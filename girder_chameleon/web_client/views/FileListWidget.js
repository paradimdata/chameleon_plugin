import $ from 'jquery';
import Backbone from 'backbone';

const FileListWidget = girder.views.widgets.FileListWidget;
const router = girder.router;
const { wrap } = girder.utilities.PluginUtils;

import FileListWidgetCreateButtonTemplate from '../templates/fileListWidgetCreateButton.pug';

import CreateThumbnailView from './CreateThumbnailView';

const allowedMimeTypes = ['application/vnd.paradim.img', 'application/vnd.paradim.dat', 'application/vnd.paradim.raw','application/vnd.paradim.non4d','application/vnd.paradim.hs2','application/vnd.paradim.emsa','application/vnd.paradim.brml'];

// Add create thumbnail link to each file in the file list
wrap(FileListWidget, 'render', function (render) {
    render.call(this);

    // Add buttons conditionally based on mimeType
    this.collection.each((file) => {
        if (allowedMimeTypes.includes(file.get('mimeType'))) {
            const $fileActionContainer = this.$(`.g-file-actions-container[file-cid="${file.cid}"]`);
            if ($fileActionContainer.length) {
                $fileActionContainer.prepend(FileListWidgetCreateButtonTemplate());
            }
        }
    });

    return this;
});

// Bind the thumbnail creation button
FileListWidget.prototype.events['click a.g-create-thumbnail'] = function (e) {
    e.preventDefault();

    const cid = $(e.currentTarget).parent().attr('file-cid');
    const fileModel = this.collection.get(cid);

    // Safety check
    if (!allowedMimeTypes.includes(file.get('mimeType'))) {
        console.warn('Unsupported MIME type for thumbnail creation.');
        return;
    }

    const view = new CreateThumbnailView({
        parentView: this,
        item: this.parentItem,
        file: fileModel
    });

    view.executeChameleonJob();
};