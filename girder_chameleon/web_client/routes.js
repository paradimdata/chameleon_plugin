/* eslint-disable import/first */

const events = girder.events;
const router = girder.router;
const { exposePluginConfig } = girder.utilities.PluginUtils;

exposePluginConfig('chameleon', 'plugins/chameleon/config');

import ConfigView from './views/ConfigView';
router.route('plugins/chameleon/config', 'chameleonConfig', function () {
    events.trigger('g:navigateTo', ConfigView);
});