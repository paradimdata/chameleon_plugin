from girder.api.rest import Resource
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
            if len(API_AUTH_CLIENT_KEY) > 0: # two file version
                cert = (API_AUTH_CLIENT_CERTIFICATE, API_AUTH_CLIENT_KEY)
            else: # one file version
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

        if token:
            headers = {'Content-Type': content_type} | token
        else:
            headers = {'Content-Type': content_type}

        if input_ext:
            data = {
                "girderToken": girder_token,
                "input_url": input_url,
                "output": output,
                "output_type": output_type,
                "output_dest": output_dest,
                "input_ext": input_ext
            }
        else:
            data = {
                "girderToken": girder_token,
                "input_url": input_url,
                "output": output,
                "output_type": output_type,
                "output_dest": output_dest,
            }
        print('##TEST##')
        print(full_url)
        print('##TEST##')
        req = Request("POST", full_url, json=data, headers=headers)
        prepared = req.prepare()
        session = Session()
        resp = session.send(prepared, stream=True, cert=cert)

        file_content = resp.content

        file_data_b64 = base64.b64encode(file_content).decode('utf-8')

        content_type = resp.headers.get('Content-Type', 'application/octet-stream')

        return {
            'file_data': file_data_b64,
            'content_type': content_type,
            'file_name': output
        }
