import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTBeadPlateElement extends LibView {
    constructor(config) {
        super(config);


    }

    cleanUp() {
        if (this.icon) {
            this.icon.destroy();
            this.icon = null;
        }
        if (this.icon2) {
            this.icon2.destroy();
            this.icon2 = null;
        }
        if (this.icon3) {
            this.icon3.destroy();
            this.icon3 = null;
        }
    }

    updateBeadplate (config) {
        this.cleanUp();
        if (config.winner == "dealer") {
            this.icon = CoreLib.UIUtil.getSprite("banker");
        } else if (config.winner == "player") {
            this.icon = CoreLib.UIUtil.getSprite("player");
        } else {
            this.icon = CoreLib.UIUtil.getSprite("tie");
        }
        this.addChild(this.icon);

        if (config.dealerPair) {
            this.icon2 = CoreLib.UIUtil.getSprite("bankerPair");
            this.addChild(this.icon2);
        }
        if (config.playerPair) {
            this.icon3 = CoreLib.UIUtil.getSprite("playerPair");
            this.addChild(this.icon3);
        }

    }





};
