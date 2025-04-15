import $ from 'jquery';
import Backbone from 'backbone';

const FileListWidget = girder.views.widgets.FileListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;

import FileListWidgetCreateButtonTemplate from '../templates/fileListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

// Add create thumbnail link to each file in the file list
wrap(FileListWidget, 'render', function (render) {
    render.call(this);

    this.$('.g-file-actions-container').prepend(FileListWidgetCreateButtonTemplate());

    return this;
});

// Bind the thumbnail creation button
FileListWidget.prototype.events['click a.g-create-thumbnail'] = function (e) {
    e.preventDefault();

    const cid = $(e.currentTarget).parent().attr('file-cid');
    const fileModel = this.collection.get(cid);

    // Directly trigger job without opening modal
    const view = new CreateThumbnailView({
        parentView: this,
        item: this.parentItem,
        file: fileModel
    });

    view.executeChameleonJob();  // Make sure this method is defined in your view
};
