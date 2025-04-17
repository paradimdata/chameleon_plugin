import $ from 'jquery';
import Backbone from 'backbone';

const ItemListWidget = girder.views.widgets.ItemListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;
const restRequest = girder.rest.restRequest;
const { FileModel } = girder.models;

import ItemListWidgetCreateButtonTemplate from '../templates/itemListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

const allowedMimeTypes = ['application/vnd.paradim.img', 'application/vnd.paradim.dat', 'application/vnd.paradim.raw','application/vnd.paradim.non4d','application/vnd.paradim.hs2','application/vnd.paradim.emsa','application/vnd.paradim.brml'];

wrap(ItemListWidget, 'render', function (render) {
    render.call(this);

    this.$('li.g-item-list-entry').each((index, element) => {
        const item = this.collection.at(index);
         if (!item) return;
 
         restRequest({
             url: `item/${item.id}/files`,
             method: 'GET'
         }).done((files) => {
             const hasMatchingMime = files.some((file) => allowedMimeTypes.includes(file.mimeType));
             if (hasMatchingMime) {
                 $(element).append(ItemListWidgetCreateButtonTemplate({ item }));
             }
         });
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