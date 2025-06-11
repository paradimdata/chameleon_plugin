from girder.api.rest import Resource, RestException
from girder.api.rest import setResponseHeader, setRawResponse
from girder.api import access
from girder.models.setting import Setting
from .settings import PluginSettings
from requests import Request, Session
import base64

class ChameleonAuth(Resource):
    def __init__(self):
        super().__init__()
        self.resourceName = 'chameleonAuth'
        self.route('GET', (), self.getAuthMethod)

    @access.public
    def getAuthMethod(self, params, **kwargs):
        token = {}
        cert = None

        # Get current plugin settings
        API_AUTH_HEADER_NAME = Setting().get(PluginSettings.API_AUTH_HEADER_NAME)
        API_AUTH_SECRET = Setting().get(PluginSettings.API_AUTH_SECRET)
        API_AUTH_CLIENT_CERTIFICATE = Setting().get(PluginSettings.API_AUTH_CLIENT_CERTIFICATE)
        API_AUTH_CLIENT_KEY = Setting().get(PluginSettings.API_AUTH_CLIENT_KEY)

        # Auth token header, if configured
        if len(API_AUTH_HEADER_NAME) > 0 and len(API_AUTH_SECRET) > 0:
            token[API_AUTH_HEADER_NAME] = API_AUTH_SECRET

        # SSL client authentication private key & cert, if configured
        if len(API_AUTH_CLIENT_CERTIFICATE) > 0:
            if len(API_AUTH_CLIENT_KEY) > 0:
                cert = (API_AUTH_CLIENT_CERTIFICATE, API_AUTH_CLIENT_KEY)
            else:
                cert = API_AUTH_CLIENT_CERTIFICATE

        base_url = Setting().get(PluginSettings.BASE_API_URL)
        content_type = params.get('Content-Type')
        girder_token = params.get('girderToken')
        input_url = params.get('input_url')
        output = params.get('output')
        output_type = "raw"
        output_dest = "caller"
        endpoint = params.get('endpoint')
        input_ext = params.get('input_ext')
        full_url = base_url + endpoint

        headers = {'Content-Type': content_type}
        if token:
            headers.update(token)

        data = {
            "girderToken": girder_token,
            "input_url": input_url,
            "output": output,
            "output_type": output_type,
            "output_dest": output_dest
        }
        if input_ext:
            data["input_ext"] = input_ext

        req = Request("POST", full_url, json=data, headers=headers)
        prepared = req.prepare()
        session = Session()

        try:
            resp = session.send(prepared, stream=True, cert=cert)
        except Exception as e:
            raise RestException(f'Connection to external API failed: {str(e)}', code=502)

        if not resp.ok:
            # Enhanced error parsing
            try:
                error_detail = resp.json()
                error_message = error_detail.get('error') or error_detail.get('message') or str(error_detail)
            except ValueError:
                # Not a JSON response
                error_message = resp.text.strip()

            raise RestException(
                f'Chameleon API returned HTTP {resp.status_code}: {resp.reason}. Details: {error_message}',
                code=resp.status_code
            )

        # Try to parse JSON response to check for application-level errors
        try:
            json_data = resp.json()
            if isinstance(json_data, dict) and 'error' in json_data:
                raise RestException(f"External service error: {json_data['error']}")
        except ValueError:
            pass  # Response is not JSON

        file_content = resp.content
        file_data_b64 = base64.b64encode(file_content).decode('utf-8')
        content_type = resp.headers.get('Content-Type', 'application/octet-stream')

        return {
            'file_data': file_data_b64,
            'content_type': content_type,
            'file_name': output
        }
