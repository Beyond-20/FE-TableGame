import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib"
import { BCTBeadPlateElement } from './BCTBeadPlateElement'

    export class BCTRoadmapBG extends LibView {
    constructor(config) {
        super(config);
        this.leftbg = this.elementsList["leftbg"];
        this.rightbg = this.elementsList["rightbg"];
        this.mobilebg = this.elementsList["mobilebg"];


        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.mobilebg.destroy();
        } else {
            this.leftbg.destroy();
            this.rightbg.destroy();
        }
    }
    resizeViewComponents () {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            // CoreLib.UIUtil.positionObjectForDevice(this.mobilebg);
            // CoreLib.UIUtil.positionObjectForDevice(this.heading);
        }
    }

    };
