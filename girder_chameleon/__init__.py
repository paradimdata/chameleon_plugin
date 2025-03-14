import os
from girder.plugin import GirderPlugin, registerPluginStaticContent
from girder.utility.model_importer import ModelImporter


class ChameleonPlugin(GirderPlugin):
    DISPLAY_NAME = "Chameleon"

    def load(self, info):
        registerPluginStaticContent(
            plugin="chameleon",
            css=["/style.css"],
            js=["/girder-plugin-chameleon.umd.cjs"],
            staticDir=os.path.join(os.path.dirname(__file__), "web_client", "dist"),
            tree=info["serverRoot"],
        )
