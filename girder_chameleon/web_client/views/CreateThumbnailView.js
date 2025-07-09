const { SearchFieldWidget } = girder.views.widgets;
const { FileModel } = girder.models;
const { View } = girder.views;
const { getCurrentToken } = girder.auth;
const { restRequest } = girder.rest;
const events = girder.events;

import ChameleonModel from '../models/ChameleonModel';

import CreateThumbnailViewDialogTemplate from '../templates/createThumbnailViewDialog.pug';
import CreateThumbnailViewTargetDescriptionTemplate from '../templates/createThumbnailViewTargetDescription.pug';

import '../stylesheets/createThumbnailView.styl';

const GIRDER_URL = window.location.origin;
//const GIRDER_URL = 'http://host.docker.internal:8080'

/**
 * A dialog for creating a Chameleon conversion for a specific file
 */
var CreateThumbnailView = View.extend({
    initialize: function () {
    },
    events: {
        'change .g-thumbnail-attach-container input[type="radio"]': function () {
            this.$('.g-target-result-container').empty();

            if (this.$('.g-thumbnail-attach-this-item').is(':checked')) {
                this.attachToType = 'item';
                this.attachToId = this.item.id;
                this.$('.g-thumbnail-custom-target-container').addClass('hide');
                this.$('.g-submit-create-chameleon').girderEnable(true);
            } else {
                this.attachToType = null;
                this.attachToId = null;
                this.$('.g-thumbnail-custom-target-container').removeClass('hide');
                this.$('.g-submit-create-chameleon').girderEnable(false);
            }
        },
    },

    initialize: function (settings) {
        this.item = settings.item;
        this.file = settings.file;
        this.attachToType = 'item';
        this.attachToId = this.item.id;
        this.folderId = this.item.get('folderId');
        this.collectionId = this.item.get('baseParentId');
        this.resultId = null;

        this.searchWidget = new SearchFieldWidget({
            placeholder: 'Start typing a name...',
            types: ['collection', 'folder', 'item', 'user'],
            parentView: this
        }).on('g:resultClicked', function (result) {
            this.resultId = result.id;
        }, this);
    },

    render: function () { 
        this.$el.html(CreateThumbnailViewDialogTemplate({
            file: this.file,
            item: this.item
        }));
    
        this.$el.girderModal(this).on('shown.bs.modal', () => {
            console.log("Modal shown event triggered");
            this.$('#g-endpoint-options').focus();
        });
    
        // Double-check the modal is being opened
        this.$el.modal('show'); 
    
        if (!this.searchWidget) {
            this.searchWidget = new SearchWidget();
        }
    
        this.searchWidget.setElement(this.$('.g-search-field-container')).render();
    
        return this;
    },

    pickTarget: function (target) {
        this.searchWidget.resetState();
        this.attachToType = target.type;
        this.attachToId = target.id;
        this.$('.g-submit-create-chameleon').girderEnable(true);

        this.$('.g-target-result-container').html(CreateThumbnailViewTargetDescriptionTemplate({
            text: target.text,
            icon: target.icon
        }));
    },

    executeChameleonJob: function () {
        const view = this;
    
        this.$('.g-validation-failed-message').empty();
        this.$('.g-submit-create-chameleon').girderEnable(false);
    
        const chameleonModel = new ChameleonModel({
            attachToId: this.attachToId,
            attachToType: this.attachToType,
            folderId: this.folderId,
            collectionId: this.collectionId,
            mimeType: this.file.get('mimeType')
        });
    
        const fileName = this.file.get('name');
        const attachToId = chameleonModel.get('attachToId');
        const downloadUrl = GIRDER_URL + `/api/v1/item/${attachToId}/download`;
        const mime_val = chameleonModel.get('mimeType');
        let girderToken = getCurrentToken() || window.localStorage.getItem('girderToken');
        
        const endpointMap = new Map([
            ['application/vnd.paradim.img',       { endpoint: "/rheedconverter",        ext: ".png" }],
            ['application/vnd.paradim.dat',       { endpoint: "/ppmsmpms",              ext: ".csv" }],
            ['application/vnd.paradim.raw',       { endpoint: "/brukerrawconverter",    ext: ".csv" }],
            ['application/vnd.paradim.non4d',     { endpoint: "/non4dstem_file",        ext: ".png" }],
            ['application/vnd.paradim.hs2',       { endpoint: "/hs2converter",          ext: ".png" }],
            ['application/vnd.paradim.emsa',      { endpoint: "/jeol_sem_converter",    ext: ".png" }],
            ['application/vnd.paradim.brml',      { endpoint: "/brukerbrmlconverter",   ext: ".txt" }]
        ]);

        const { endpoint, ext: defaultExt } = endpointMap.get(mime_val) || { endpoint: "/default", ext: "" };
        const outputFileName = fileName.split(".")[0] + defaultExt;

        const input_ext = (mime_val === 'application/vnd.paradim.non4d') 
            ? '.' + (fileName.split(".").pop() || "") 
            : '';
    
        restRequest({
            url: 'chameleon',
            method: 'GET',
            data: {
                "Content-Type": "application/json",
                "girderToken": girderToken,
                "input_url": downloadUrl,
                "output": outputFileName,
                "endpoint": endpoint,
                "input_ext" : input_ext
            },
        }).then(response => {
            console.log('Response received:', response);
        
            // Assuming response has { file_data, content_type, file_name }
            const byteCharacters = atob(response.file_data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: response.content_type });
        
            let mimeType = response.content_type;
            var file = new FileModel();
        
            file.uploadToItem(view.item, blob, response.file_name, mimeType)
            setTimeout(() => location.reload(), 50);
        
        })
        .catch(err => {
            
            events.trigger('g:alert', {
                icon: 'cancel',
                text: err.responseJSON.message,
                type: 'danger'
              });
            
            
        });
        
    }
});

export default CreateThumbnailView;