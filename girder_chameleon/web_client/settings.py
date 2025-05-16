from girder.exceptions import ValidationException
from girder.utility import setting_utilities


class PluginSettings:
    BASE_API_URL = "chameleon.base_api_url"
    API_AUTH_HEADER_NAME = "chameleon.api_auth_header_name"
    API_AUTH_SECRET = "chameleon.api_auth_secret"
    API_AUTH_CLIENT_CERTIFICATE = "chameleon.api_auth_client_certificate"
    API_AUTH_CLIENT_KEY = "chameleon.api_auth_client_key"


@setting_utilities.default(PluginSettings.BASE_API_URL)
def _defaultProvidersEnabled():
    return []


@setting_utilities.default(PluginSettings.BASE_API_URL)
def _defaultIgnoreRegistrationPolicy():
    return False


@setting_utilities.default({
    PluginSettings.BASE_API_URL,
    PluginSettings.API_AUTH_HEADER_NAME,
    PluginSettings.API_AUTH_SECRET,
    PluginSettings.API_AUTH_CLIENT_CERTIFICATE,
    PluginSettings.API_AUTH_CLIENT_KEY,
})
def _defaultOtherSettings():
    return ''


@setting_utilities.validator({
    PluginSettings.BASE_API_URL,
    PluginSettings.API_AUTH_HEADER_NAME,
    PluginSettings.API_AUTH_SECRET,
    PluginSettings.API_AUTH_CLIENT_CERTIFICATE,
    PluginSettings.API_AUTH_CLIENT_KEY,
})
def _validateOtherSettings(doc):
    pass