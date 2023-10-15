import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib"
import { BCTBeadPlateElement } from './BCTBeadPlateElement'
import { BCTBigRoadElement } from './BCTBigRoadElement'

export class BCTBeadPlateComp extends LibView {
    constructor(config) {
        super(config);
        this.createItems();
    }

    createItems () {
        this.eContainer = CoreLib.UIUtil.getContainer();
        this.addChild(this.eContainer);

        let columns = 18;

        let rows = 6;
        let startX = 0;
        let startY = 0;
        let rowGap = 36;
        let columnGap = 36;
        if (!CoreLib.Model.DeviceConfig.isDesktop) {
            rowGap = 77;
            columnGap = 84;
        }
        this.itemsArray = [];
        this.items2DArray = [];
        for (let k = 0; k < columns; k++) {
            this.items2DArray[k] = [];
            for (let i = 0; i < rows; i++) {
                let element = new BCTBeadPlateElement();
                element.x = startX + k * rowGap;
                element.y = startY + i * columnGap;
                if (CoreLib.Model.DeviceConfig.isDesktop) {
                    element.scale.set(0.52);
                } else {
                    element.scale.set(1);
                }
                this.eContainer.addChild(element);
                this.itemsArray.push(element);
                this.items2DArray[k].push(element);
            }
        }
    }



    updateBeadplate(arr) {


        let newlen = this.itemsArray.length;
        for (let k = 0; k < newlen; k++) {
            this.itemsArray[k].cleanUp();
        }
        let len = arr.length;
        for (let k = 0; k < len; k++) {
            let element = this.itemsArray[k];
            element.updateBeadplate(arr[k])
        }
    }
};
