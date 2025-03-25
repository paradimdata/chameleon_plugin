import $ from 'jquery';
import Backbone from 'backbone';

const ItemListWidget = girder.views.widgets.ItemListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;

import ItemListWidgetCreateButtonTemplate from '../templates/itemListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

wrap(ItemListWidget, 'render', function (render) {
    render.call(this);

    this.$('.g-item-list-entry').append(ItemListWidgetCreateButtonTemplate());

    return this;
});

ItemListWidget.prototype.events['click a.g-create-thumbnail'] = function (e) {
    var cid = $(e.currentTarget).parent().attr('file-cid');

    new CreateThumbnailView({
        el: $('#g-dialog-container'),
        parentView: this,
        item: this.parentItem,
        file: this.collection.get(cid)
    }).once('submit #g-create-thumbnail-form', function (params) {
        Backbone.history.fragment = null;
        router.navigate(params.attachedToType + '/' + params.attachedToId, {trigger: true});
    }, this).render();
};