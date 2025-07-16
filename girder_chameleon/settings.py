from girder.exceptions import ValidationException
from girder.utility import setting_utilities

class PluginSettings:
    BASE_API_URL = "chameleon.base_api_url"
    API_HEADER_NAME = "chameleon.api_header_name"
    API_SECRET = "chameleon.api_secret"
    API_CLIENT_CERTIFICATE = "chameleon.api_client_certificate"
    API_CLIENT_KEY = "chameleon.api_client_key"

@setting_utilities.default({
    PluginSettings.BASE_API_URL,
    PluginSettings.API_HEADER_NAME,
    PluginSettings.API_SECRET,
    PluginSettings.API_CLIENT_CERTIFICATE,
    PluginSettings.API_CLIENT_KEY
})
def _defaultChameleonParams():
    return ""

# TODO: Add sensible validation of each configuration parameter type
@setting_utilities.validator({
    PluginSettings.BASE_API_URL,
    PluginSettings.API_HEADER_NAME,
    PluginSettings.API_SECRET,
    PluginSettings.API_CLIENT_CERTIFICATE,
    PluginSettings.API_CLIENT_KEY,
})
def _validateOtherSettings(doc):
    pass