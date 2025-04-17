import $ from 'jquery';
import Backbone from 'backbone';

const ItemListWidget = girder.views.widgets.ItemListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;
const restRequest = girder.rest.restRequest;
const { FileModel } = girder.models;

import ItemListWidgetCreateButtonTemplate from '../templates/itemListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

wrap(ItemListWidget, 'render', function (render) {
    render.call(this);

    this.$('li.g-item-list-entry').each((index, element) => {
        let item = this.collection.at(index);
        if (item) {
            $(element).append(ItemListWidgetCreateButtonTemplate({ item: item }));
        }
    });

    return this;
});

ItemListWidget.prototype.events['click a.g-create-thumbnail'] = function (event) {
    event.preventDefault();

    const itemId = $(event.currentTarget).attr('data-item-id');
    const item = this.collection.find((model) => model.id === itemId);

    if (!item) {
        console.warn('Item not found');
        return;
    }

    restRequest({
        url: `item/${itemId}/files`,
        method: 'GET'
    }).done((files) => {
        if (!files.length) {
            console.warn('No files found for item');
            return;
        }

        const fileModel = new FileModel(files[0]);

        const view = new CreateThumbnailView({
            parentView: this,
            item: item,
            file: fileModel
        });

        view.executeChameleonJob();
    });
};