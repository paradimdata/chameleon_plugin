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

    // Create a new `CreateThumbnailView` and pass the necessary arguments
    new CreateThumbnailView({
        el: $('#g-dialog-container'),
        parentView: this,
        item: item,
        file: this.collection.get(item.cid)// Assuming 'file' is an attribute of the item
    }).once('submit #g-create-thumbnail-form', function (params) {
        // Once the form is submitted, navigate to the specific route
        Backbone.history.fragment = null;
        router.navigate(params.attachedToType + '/' + params.attachedToId, { trigger: true });
    }, this).render();
};