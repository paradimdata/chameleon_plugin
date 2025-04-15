import $ from 'jquery';
import Backbone from 'backbone';

const ItemListWidget = girder.views.widgets.ItemListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;

import ItemListWidgetCreateButtonTemplate from '../templates/itemListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

wrap(ItemListWidget, 'render', function (render) {
    // Call the original render method
    render.call(this);

    // Append the "Create Thumbnail" button to each item entry
    this.$('li.g-item-list-entry').each((index, element) => {
        let item = this.collection.at(index);
        if (item) {
            $(element).append(ItemListWidgetCreateButtonTemplate({ item: item }));
        }
    });

    return this;
});

// Extend the `events` object to handle the button click
ItemListWidget.prototype.events['click a.g-create-thumbnail'] = function (event) {
    event.preventDefault();

    let itemId = $(event.currentTarget).attr('data-item-id');
    let item = this.collection.find((model) => model.id === itemId);

    // Directly create the thumbnail without opening a dialog
    const view = new CreateThumbnailView({
        parentView: this,
        item: item,
        file: this.collection.get(item.cid)  // Assuming file is associated
    });

    // Just call the method to execute the job
    view.executeChameleonJob();  // This should internally upload the file, etc.
};