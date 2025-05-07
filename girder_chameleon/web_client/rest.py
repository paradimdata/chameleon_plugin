from girder.api.rest import Resource
from girder.api.rest import setResponseHeader, setRawResponse
from girder.api import access
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

        if len(PluginSettings.API_AUTH_HEADER_NAME) > 0 and PluginSettings.API_AUTH_HEADER_NAME != "chameleon.api_auth_header_name":
            token[PluginSettings.API_AUTH_HEADER_NAME] = PluginSettings.API_AUTH_SECRET

        if len(PluginSettings.API_AUTH_CLIENT_CERTIFICATE) > 0 and PluginSettings.API_AUTH_CLIENT_CERTIFICATE != "chameleon.api_auth_client_certificate":
            if len(PluginSettings.API_AUTH_CLIENT_KEY) > 0: # two file version
                cert = (PluginSettings.API_AUTH_CLIENT_CERTIFICATE, PluginSettings.API_AUTH_CLIENT_KEY)
            else: # one file version
               cert = PluginSettings.API_AUTH_CLIENT_CERTIFICATE

        url = params.get('chameleon-url')
        content_type = params.get('Content-Type')
        girder_token = params.get('girderToken')
        input_url = params.get('input_url')
        output = params.get('output')
        output_type = "raw"
        output_dest = "caller"
        input_ext = params.get('input_ext')

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
                "input_ext": input_ext
            }

        req = Request("POST", url, json=data, headers=headers, cert = cert)
        prepared = req.prepare()
        session = Session()
        resp = session.send(prepared, stream=True)

        file_content = resp.content

        file_data_b64 = base64.b64encode(file_content).decode('utf-8')

        content_type = resp.headers.get('Content-Type', 'application/octet-stream')

        return {
            'file_data': file_data_b64,
            'content_type': content_type,
            'file_name': output
        }