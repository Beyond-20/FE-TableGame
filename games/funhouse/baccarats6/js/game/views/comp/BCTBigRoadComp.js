import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"
import { BCTBigRoadElement } from './BCTBigRoadElement'


let columns = 33;
let rows = 6;

export class BCTBigRoadComp extends LibView {
    constructor(config) {
        super(config);
        this.createItems();
    }

    createItems () {
        this.eContainer = CoreLib.UIUtil.getContainer();
        this.addChild(this.eContainer);


        let startX = 0;
        let startY = 0;
        let rowGap = 20;
        let columnGap = 20;
        if (!CoreLib.Model.DeviceConfig.isDesktop) {
            rowGap = 42.5;
            columnGap = 46;
        }
        this.itemsArray = [];
        this.items2DArray = [];
        for (let k = 0; k < columns; k++) {
            this.items2DArray[k] = [];
            for (let i = 0; i < rows; i++) {
                let element = new BCTBigRoadElement();
                element.x = startX + k * rowGap;
                element.y = startY + i * columnGap;
                if (CoreLib.Model.DeviceConfig.isDesktop) {
                    element.scale.set(0.32);
                } else {
                    element.scale.set(0.68);
                }
                this.eContainer.addChild(element);
                this.itemsArray.push(element);
                this.items2DArray[k].push(element);
            }
        }
        this.runIndex = 1;
    }

    updateResult (arr) {
        let newlen = this.itemsArray.length;
        for (let k = 0; k < newlen; k++) {
            this.itemsArray[k].cleanUp();
        }
        let len = this.itemsArray.length;
        let collen = arr.length;
        if (collen > columns) {
            let diff = collen - columns;
            arr.splice(0, diff);
        }
        collen = arr.length;
        let index = 0;
        let maxRow = 6;
        let trailIndex = 1;

        for (let k = 0; k <collen; k++) {
            trailIndex = 1;
            let len2 = arr[index].length;
            let index2 = 0;

            for (let i = 0; i < len2; i++) {
                if (i < maxRow) {
                    this.items2DArray[k][index2++].setStateBigRoad(arr[index][i]);
                } else {
                    this.items2DArray[k + trailIndex++][rows - 1].setStateBigRoad(arr[index][i]);
                }
            }
            index++;
        }
    }
};
