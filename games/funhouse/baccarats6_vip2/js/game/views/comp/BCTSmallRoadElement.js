import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTSmallRoadElement extends LibView {
    constructor(config) {
        super(config);


    }

    cleanUp() {
        if (this.iconPair) {
            this.iconPair.destroy();
            this.iconPair = null;
        }

    }

    setStateSmallRoad (data) {
        this.cleanUp();
        let img = null;
        if (data == "red") {
            img = "reddot";
        } else if (data == "blue") {
            img = "bluedot";
        }
        if (img) {
            this.iconPair = CoreLib.UIUtil.getSprite(img);
            this.addChild(this.iconPair);
        }
    }





};
