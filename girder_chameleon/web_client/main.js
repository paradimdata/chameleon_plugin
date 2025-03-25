const { wrap } = girder.utilities.PluginUtils;
const ItemView = girder.views.body.ItemView;  
import CreateThumbnailView from './views/CreateThumbnailView.js';
import  './views/FileListWidget.js';
import  './views/FlowView.js';
import  './views/ItemView.js';
import  './views/ItemListWidget.js'


wrap(ItemView, 'render', function (render) {
    render.apply(this, arguments);

    this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>');

    this.$('.g-open-chameleon').on('click', () => {
        new CreateThumbnailView({
            item: this.model,  // Pass the item model
            file: this.model.file
        }).render();
    });
});