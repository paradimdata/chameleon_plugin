import $ from 'jquery';
import _ from 'underscore';

const PluginConfigBreadcrumbWidget = girder.views.widgets.PluginConfigBreadcrumbWidget;
const View = girder.views.View;
const { getApiRoot, restRequest } = girder.rest;
const events = girder.events;

import ConfigViewTemplate from '../templates/configView.pug';
import '../stylesheets/configView.styl';

var ConfigView = View.extend({
    events: {
        'submit .g-chameleon-config-form': function (event) {
            event.preventDefault();
            this.$('.g-config-error-message').empty();
    
            const settings = [{
                key: 'chameleon.base_api_url',
                value: this.$('#g-chameleon-base-api-url').val().trim()
            }, {
                key: 'chameleon.api_auth_header_name',
                value: this.$('#g-chameleon-auth-header-name').val().trim()
            }, {
                key: 'chameleon.api_auth_secret',
                value: this.$('#g-chameleon-auth-secret').val().trim()
            }, {
                key: 'chameleon.api_auth_client_certificate',
                value: this.$('#g-chameleon-client-certificate').val().trim()
            }, {
                key: 'chameleon.api_auth_client_key',
                value: this.$('#g-chameleon-client-key').val().trim()
            }];
    
            this._saveSettings(settings);
        }
    },

    initialize: function () {
        this.settingKeys = [
            'chameleon.base_api_url',
            'chameleon.api_header_name',
            'chameleon.api_secret',
            'chameleon.api_client_certificate',
            'chameleon.api_client_key'
        ];

        restRequest({
            method: 'GET',
            url: 'system/setting',
            data: {
                list: JSON.stringify(this.settingKeys)
            }
        }).done((resp) => {
            this.settingVals = resp;
            this.render();

            // Populate form fields after rendering
            this.$('#g-chameleon-base-api-url').val(resp['chameleon.base_api_url'] || '');
            this.$('#g-chameleon-header-name').val(resp['chameleon.api_header_name'] || '');
            this.$('#g-chameleon-secret').val(resp['chameleon.api_secret'] || '');
            this.$('#g-chameleon-client-certificate').val(resp['chameleon.api_client_certificate'] || '');
            this.$('#g-chameleon-client-key').val(resp['chameleon.api_client_key'] || '');
        });
    },

    render: function () {
        // Optionally keep origin/apiRoot if your template uses them
        const origin = window.location.protocol + '//' + window.location.host;
        let _apiRoot = getApiRoot();
        if (_apiRoot.charAt(0) !== '/') {
            _apiRoot = '/' + _apiRoot;
        }

        // Remove settings context; let JS populate fields after render
        this.$el.html(ConfigViewTemplate({
            origin,
            apiRoot: _apiRoot
        }));

        if (!this.breadcrumb) {
            this.breadcrumb = new PluginConfigBreadcrumbWidget({
                pluginName: 'Chameleon',
                el: this.$('.g-config-breadcrumb-container'),
                parentView: this
            }).render();
        }

        return this;
    },

    _saveSettings: function (settings) {
        restRequest({
            method: 'PUT',
            url: 'system/setting',
            data: {
                list: JSON.stringify(settings)
            }
        }).done(() => {
            events.trigger('g:alert', {
                icon: 'ok',
                text: 'Chameleon settings saved.',
                type: 'success',
                timeout: 3000
            });
        }).fail((resp) => {
            this.$('.g-config-error-message').text(resp.responseJSON.message);
        });
    }
});

export default ConfigView;
