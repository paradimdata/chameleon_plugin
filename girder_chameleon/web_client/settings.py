from girder.exceptions import ValidationException
from girder.utility import setting_utilities


class PluginSettings:
    BASE_API_URL = "http://localhost:8080"
    API_AUTH_HEADER_NAME = "X-Auth-Access-Token"
    API_AUTH_SECRET = "LVsWdSd4DIT9Tuc9NmvqHNhi8XeT548TvDFX9W6J9jM"
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


@setting_utilities.validator(PluginSettings.BASE_API_URL)
def _validateProvidersEnabled(doc):
    if not isinstance(doc['value'], (list, tuple)):
        raise ValidationException('The enabled providers must be a list.', 'value')


@setting_utilities.validator(PluginSettings.BASE_API_URL)
def _validateIgnoreRegistrationPolicy(doc):
    if not isinstance(doc['value'], bool):
        raise ValidationException('Ignore registration policy setting must be boolean.', 'value')


@setting_utilities.validator({
    PluginSettings.BASE_API_URL,
    PluginSettings.API_AUTH_HEADER_NAME,
    PluginSettings.API_AUTH_SECRET,
    PluginSettings.API_AUTH_CLIENT_CERTIFICATE,
    PluginSettings.API_AUTH_CLIENT_KEY,
})
def _validateOtherSettings(doc):
    pass