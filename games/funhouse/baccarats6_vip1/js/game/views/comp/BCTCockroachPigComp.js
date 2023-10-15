import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"
import { BCTBigRoadElement } from './BCTBigRoadElement'
import { BCTCockroachPigElement } from './BCTCockroachPigElement'

let columns = 20;
let rows = 10;
export class BCTCockroachPigComp extends LibView {
    constructor(config) {
        super(config);
        this.createItems();
    }

    createItems () {
        this.eContainer = CoreLib.UIUtil.getContainer();
        this.addChild(this.eContainer);

        let startX = 0;
        let startY = 0;
        let rowGap = 10;
        let columnGap = 10;
        if (!CoreLib.Model.DeviceConfig.isDesktop) {
            rowGap = 22;
            columnGap = 22;
        }
        this.itemsArray = [];
        this.items2DArray = [];
        for (let k = 0; k < columns; k++) {
            this.items2DArray[k] = [];
            for (let i = 0; i < rows; i++) {
                let element = new BCTCockroachPigElement();
                element.x = startX + k * rowGap;
                element.y = startY + i * columnGap;
                if (CoreLib.Model.DeviceConfig.isDesktop) {
                    element.scale.set(0.16);
                } else {
                    element.scale.set(0.44);
                }
                this.eContainer.addChild(element);
                this.itemsArray.push(element);
                this.items2DArray[k].push(element);
            }
        }
        this.runIndex = 1;
    }

    updateResult (result) {
        this.cleanUp();
        let len = result.length;
        let start = 4;
        let data = [];
        let index = 0;
        let lastcol = "";
        for (let k = start; k < len; k++) {
            if (data[index] == undefined) {
                data[index] = [];
            }
            let len2 = result[k].length;
            for (let i = 0; i < len2; i++) {
                if (i == 0) {
                    // check 2 before columns
                    if (result[k - 1].length == result[k - 3].length) {
                        if (lastcol == "blue") {
                            index++
                            if (data[index] == undefined) {
                                data[index] = [];
                            }
                        }
                        data[index].push("red");
                        lastcol = "red";
                    } else {
                        if (lastcol == "red") {
                            index++
                            if (data[index] == undefined) {
                                data[index] = [];
                            }
                        }
                        data[index].push("blue");
                        lastcol = "blue";
                    }
                } else {
                    if (result[k - 3][i] == result[k - 3][i - 1]) {
                        if (lastcol == "blue") {
                            index++
                            if (data[index] == undefined) {
                                data[index] = [];
                            }
                        }
                        data[index].push("red");
                        lastcol = "red";
                    } else {
                        if (lastcol == "red") {
                            index++
                            if (data[index] == undefined) {
                                data[index] = [];
                            }
                        }
                        data[index].push("blue");
                        lastcol = "blue";
                    }
                }
            }

        }

        let newlen = data.length;
        if (newlen >= columns) {
            let extra = newlen - columns;
            data.splice(0, extra);
            newlen = data.length;
        }
        for (let k = 0; k < newlen; k++) {
            let newlen2 = data[k].length;
            let trailIndex = 1;
            if (newlen2 > 0) {
                for (let i = 0; i < newlen2; i++) {
                    if (i <= rows - 1) {
                        this.items2DArray[k][i].setStateCockroach(data[k][i]);
                    } else {
                        if (this.items2DArray[k + trailIndex] && this.items2DArray[k + trailIndex][rows - 1]) {
                            this.items2DArray[k + trailIndex][rows - 1].setStateCockroach(data[k][i]);
                            trailIndex++;
                        }

                    }
                }
            }
        }


    }

    cleanUp () {
        let len1 = this.items2DArray.length;
        for (let k = 0; k < len1; k++) {
            let len2 = this.items2DArray[k].length;
            for (let i = 0; i < len2; i++) {
                this.items2DArray[k][i].cleanUp();
            }
        }
    }


};
