import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTCockroachPigElement extends LibView {
    constructor(config) {
        super(config);


    }

    cleanUp() {
        if (this.iconPair) {
            this.iconPair.destroy();
            this.iconPair = null;
        }

    }

    setStateCockroach (data) {
        this.cleanUp();
        let img = null;
        if (data == "red") {
            img = "redSlantedLine";
        } else if (data == "blue") {
            img = "blueSlantedLine";
        }
        if (img) {
            this.iconPair = CoreLib.UIUtil.getSprite(img);
            this.addChild(this.iconPair);
        }
    }





};
