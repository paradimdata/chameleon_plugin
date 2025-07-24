import os
from girder.plugin import GirderPlugin, registerPluginStaticContent
from girder.utility.model_importer import ModelImporter
from .rest import Chameleon
import logging

log = logging.getLogger(__name__)

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
        log.info("Chameleon-plugin-loading")
        info['apiRoot'].chameleon = Chameleon()
        log.info("\n")

