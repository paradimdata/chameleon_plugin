const { wrap } = girder.utilities.PluginUtils;
const ItemView = girder.views.body.ItemView;

// Load the config route
import './routes';

// Extend other views
import './views/FileListWidget';
import './views/FlowView';
import './views/ItemView';
import './views/ItemListWidget';

import CreateThumbnailView from './views/CreateThumbnailView';

wrap(ItemView, 'render', function (render) {
    render.apply(this, arguments);

    this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>');

    this.$('.g-open-chameleon').on('click', () => {
        new CreateThumbnailView({
            item: this.model,
            file: this.model.file
        }).render();
    });
});