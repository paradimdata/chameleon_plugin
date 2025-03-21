const { SearchFieldWidget } = girder.views.widgets;
const { FileModel } = girder.models;
const { View } = girder.views;
const { getCurrentToken } = girder.auth;
/*
import '@girder/core/utilities/jquery/girderEnable';
import '@girder/core/utilities/jquery/girderModal';
*/
import ThumbnailModel from '../models/ThumbnailModel';
import ChameleonModel from '../models/ChameleonModel';

import CreateThumbnailViewDialogTemplate from '../templates/createThumbnailViewDialog.pug';
import CreateThumbnailViewTargetDescriptionTemplate from '../templates/createThumbnailViewTargetDescription.pug';

import '../stylesheets/createThumbnailView.styl';

/*import FolderModel from 'girder/models/FolderModel'

/**
 * A dialog for creating thumbnails from a specific file.
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

        'submit #g-create-thumbnail-form': function (e) {
            const view = this;
            e.preventDefault();

            this.$('.g-validation-failed-message').empty();
            this.$('.g-submit-create-chameleon').girderEnable(false);

            const chameleonModel = new ChameleonModel({
                output_name: String(this.$('#g-output-name').val()) || '',                
                target_endpoint: String(this.$('#g-endpoint-options').val()) || '',
                output_type: String(this.$('#g-output-types').val()) || '',
                input_type: String(this.$('#g-input-extension-options').val()) || '',
                secondFile: this.resultId,
                fileId: this.file.id,
                attachToId: this.attachToId,
                attachToType: this.attachToType,
                folderId: this.folderId,
                collectionId: this.collectionId
            });

            const endpoint = chameleonModel.get('target_endpoint') || "option1";
            const subtitleElement = document.querySelector('.g-dialog-subtitle');
            const fileName = subtitleElement ? subtitleElement.textContent.trim() : '';
            const fileId = chameleonModel.get('fileId')  
            const attachToId = chameleonModel.get('attachToId')
            const secondFileId = chameleonModel.get('secondFile')
            const input_type = chameleonModel.get('input_type')
            const downloadUrl = `http://localhost:8080/api/v1/item/${attachToId}/download`;
            const secondFileUrl = `http://localhost:8080/api/v1/item/${secondFileId}/download`;
            const folder = chameleonModel.get('folderId');
            const collection = chameleonModel.get('collectionId');
            const folderUrl = `http://localhost:8080/api/v1/folder/${folder}/download`
            let outputFileName = chameleonModel.get('output_name') || '';
            let girderToken = getCurrentToken() || window.localStorage.getItem('girderToken');
            let finalEndpoint;
            let default_ext;

            switch (endpoint) {
                case 'option1': 
                    finalEndpoint = "http://localhost:5020/rheedconverter";
                    default_ext = '.png'
                    break; 
                case 'option2': 
                    finalEndpoint = "http://localhost:5020/ppmsmpms";
                    default_ext = '.csv'
                    break; 
                case 'option3': 
                    finalEndpoint = "http://localhost:5020/brukerrawconverter";
                    default_ext = '.csv'
                    break;
                case 'option4': 
                    finalEndpoint = "http://localhost:5020/non4dstem_file";
                    default_ext = '.png'
                    break;
                case 'option5': 
                    finalEndpoint = "http://localhost:5020/hs2converter";
                    default_ext = '.png'
                    break;
                case 'option6': 
                    finalEndpoint = "http://localhost:5020/jeol_sem_converter";
                    default_ext = '.png'
                    break;
                case 'option7': 
                    finalEndpoint = "http://localhost:5020/brukerbrmlconverter";
                    default_ext = '.txt'
                    break;
                default:
                    finalEndpoint = "http://localhost:5020/default"; // Fallback in case none match
            }

            if (outputFileName == '') {
                const result = fileName.split(".")[0];
                outputFileName = result + default_ext
            }
            
            let extraData = {};
            switch (input_type) {
                case 'option2': 
                    extraData = {"input_ext": ".dm4"};
                    break; 
                case 'option3': 
                    extraData = {"input_ext": ".emd"};
                    break; 
                case 'option3': 
                    extraData = {"input_ext": ".ser"};
                    break; 
            }

            console.log(outputFileName)

            $.ajax({
                url: finalEndpoint,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access-token": "nschakJJdEsIQUfADFerH6aGjyz706f114C3c8leXhM"
                },
                data: JSON.stringify({
                    "girderToken": girderToken,
                    "input_url": downloadUrl,
                    "output": outputFileName,
                    "output_type": "raw",  
                    "output_dest": "caller",  
                    ...extraData
                }),
                xhrFields: {
                    responseType: "blob"  
                },
                processData: false
            }).done(function(response, textStatus, jqXHR) {
                const contentType = jqXHR.getResponseHeader("Content-Type");
            
                if (contentType.includes("application/json")) {
                    // JSON response (could be base64 encoded)
                    const reader = new FileReader();
                    reader.onload = function () {
                        try {
                            const jsonResponse = JSON.parse(reader.result);
                            if (jsonResponse.file_data) {
                                const byteCharacters = atob(jsonResponse.file_data);
                                const byteNumbers = new Array(byteCharacters.length);
                                for (let i = 0; i < byteCharacters.length; i++) {
                                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                                }
                                const byteArray = new Uint8Array(byteNumbers);
                                const blob = new Blob([byteArray], { type: contentType });
            
                                let mimeType;
                                var file = new FileModel();
                                file.uploadToItem(view.item, blob, jsonResponse.file_name, mimeType);
            
                                view.$el.modal('hide');
                                location.reload();
                            } else {
                                console.log("JSON Response:", jsonResponse);
                            }
                        } catch (error) {
                            console.error("Error parsing JSON response:", error);
                        }
                    };
                    response.text().then(text => reader.readAsText(new Blob([text])));
                } else {
                    // Raw file response
                    const blob = new Blob([response], { type: contentType });
            
                    // Mimic the actions of uploadFile directly here
                    let mimeType;
                    var file = new FileModel();
                    file.uploadToItem(view.item, blob, outputFileName, mimeType);
            
                    // Close the modal and reload the page
                    view.$el.modal('hide');
                    setTimeout(() => location.reload(), 500);
                }
            }).fail(function(xhr, status, error) {
                console.error("AJAX Request Failed!");
                console.error("Status:", status);
                console.error("Error:", error);
                console.error("Response Text:", xhr.responseText);
                console.error("HTTP Status Code:", xhr.status);
            
                let errorMessage = `
                    <div class="alert alert-danger">
                        <strong>Error:</strong> ${error} <br>
                        <strong>Status:</strong> ${status} <br>
                        <strong>HTTP Code:</strong> ${xhr.status} <br>
                        <strong>Response:</strong> ${xhr.responseText || "No response from server"} <br>
                        <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                    </div>`;
            
                $(".g-validation-failed-message").html(errorMessage);
                $(".g-submit-create-chameleon").girderEnable(true);
            });
            
        }
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
        })).girderModal(this).on('shown.bs.modal', () => {
            this.$('#g-endpoint-options').focus();
        });

        this.$('#g-endpoint-options').focus();

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
    }
});

export default CreateThumbnailView;
