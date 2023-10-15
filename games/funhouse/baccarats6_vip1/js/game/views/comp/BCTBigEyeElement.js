import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTBigEyeElement extends LibView {
    constructor(config) {
        super(config);


    }

    cleanUp() {
        if (this.icon) {
            this.icon.destroy();
            this.icon = null;
        }
    }

    updateBigEyeElement (config) {
        this.cleanUp();
        if (config == "blue") {
            this.icon = CoreLib.UIUtil.getSprite("blueoutline");
        } else if (config == "red") {
            this.icon = CoreLib.UIUtil.getSprite("redoutline");
        } else {
            this.icon = CoreLib.UIUtil.getSprite("tie");
        }
        this.addChild(this.icon);



    }





};
