import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"
import {slotModel} from "../../../../../../../../slot_core/corelib/models/SlotModel"
import {Scrollbox} from "../../../../../../../../slot_core/corelib/pixiwrapper/Scrollbox";

let historyData = {};
historyData = [
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":true,"easy6":false},
    {"winner":"dealer","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"player","playerPair":false,"dealerPair":false,"easy6":false},
    {"winner":"tie","playerPair":false,"dealerPair":false,"easy6":false},


]

export class BCTRoadmapComp extends LibView {
    constructor(config) {
        super(config);
        this.modalRect = this.elementsList["modalRect"];
        this.roadmapBG = this.elementsList["roadmapBG"];
        this.legendComp = this.elementsList["legendComp"];
        this.beadPlateComp = this.elementsList["beadPlateComp"];
        this.bigRoadComp = this.elementsList["bigRoadComp"];
        this.bigEyeBoyComp = this.elementsList["bigEyeBoyComp"];
        this.smallRoadComp = this.elementsList["smallRoadComp"];
        this.cockroachPigComp = this.elementsList["cockroachPigComp"];
        this.header = this.elementsList["header"];
        this.heading = this.elementsList["heading"];
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.header.destroy();
        }

        this.rContainer = CoreLib.UIUtil.getContainer();
        this.addChild(this.rContainer);
        this.rContainer.addChild(this.roadmapBG, this.legendComp, this.beadPlateComp, this.bigRoadComp, this.bigEyeBoyComp);
        this.addChild(this.heading);
        if (this.smallRoadComp) {
            this.rContainer.addChild(this.smallRoadComp);
        }
        if (this.cockroachPigComp) {
            this.rContainer.addChild(this.cockroachPigComp);
        }

        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            this.headerContainer = CoreLib.UIUtil.getContainer();
            this.addChild(this.headerContainer);
            this.headerContainer.addChild(this.legendComp, this.heading);
            this.scrollbox = new Scrollbox({passiveWheel : true, clampWheel : true, boxWidth: 1440, boxHeight: 550, scrollbarSize : 0, fade : false,
                dragScroll : true, scrollbarBackground : 0x250404, scrollbarForeground : 0x848484, fadeScrollboxEase : "easeInOutSine",
                overflowX : "auto", overflowY : "hidden", scrollbarOffsetHorizontal : 0, scrollbarOffsetVertical : 0});
            this.addChild(this.scrollbox);
            this.scrollbox.x = 0;
            this.scrollbox.y = 0;
            this.scrollbox.content.addChild(this.rContainer);
            this.legendComp.scale.set(1.12);
            this.scrollbox.update();
        }



        CoreLib.EventHandler.addEventListener("BCT_HISTORY_RECEIVED", this.onRoadmapData.bind(this));
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.modalRect.destroy();
        } else {
            CoreLib.UIUtil.setModalState(this.modalRect, true);
            CoreLib.UIUtil.addInteraction(this.modalRect, this.onModalClicked.bind(this));
            this.modalRect.visible = false;

        }
        this.totalIndex = 70;
        CoreLib.EventHandler.addEventListener("SHOW_BCT_ROADMAP", this.showRoadMap.bind(this));

        //this.onRoadmapData();

    }
    onModalClicked () {
        this.modalRect.visible = false;
        this.visible = false;
    }


    onRoadmapData(){
        let data = slotModel.getBCTHistoryData();
        //data = historyData;
        let len = data.length;
        if (len <= 0) {
            return;
        }
        let toshowResult = len; //this.currentIndex;



        if (data[0].winner == "tie") {
            data.splice(0, 1);
            len = data.length;
            toshowResult = len;
        }

        let result = [];
        for (let k = 0; k < toshowResult; k++) {
            let obj = data[k];
            result.push(obj);
        }

        this.legendComp.updateResult(result);

        this.beadPlateComp.updateBeadplate(result);
        let maxRow = 20;
        //toshowResult = result.length;
        let arr = [];
        let easyarr = [];
        let derivedArr = [];
        let index = 0;
        let flag = false;
        for (let k = 0; k < toshowResult; k++) {
            if (arr[index] == undefined) {
                arr[index] = [];
                easyarr[index] = [];
            }
            if (k == 0) {
                arr[index].push({ result: this.getWinner(result[k]), tie: false, easy6: result[k].easy6 });
                easyarr[index].push({ result: this.getWinner(result[k]), tie: false, easy6: result[k].easy6 });
            } else if (k == 1) {
                if (this.getWinner(result[k]) == this.getWinner(result[k - 1]) || (this.getWinner(result[k - 1]) == "tie")) {
                    if (this.getWinner(result[k]) != "tie") {
                        arr[index].push({result : this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                        easyarr[index].push({result : this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                    } else {
                        if (arr[index].length >= 1) {
                            arr[index][arr[index].length - 1].tie = true;
                            arr[index][arr[index].length - 1].easy6 = result[k].easy6;
                            if (result[k - 1].easy6) {
                                arr[index][arr[index].length - 1].tieE6 = true;
                            }
                        }

                    }
                } else {
                    if (this.getWinner(result[k]) != "tie") {
                        index++;
                        if (arr[index] == undefined) {
                            arr[index] = [];
                            easyarr[index] = [];

                        }
                        arr[index].push({result :this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                        easyarr[index].push({result :this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                    } else {
                        if (arr[index][arr[index].length - 1] == undefined) {
                            arr[index][arr[index].length - 1] = {};
                        }
                        arr[index][arr[index].length - 1].tie = true;
                        arr[index][arr[index].length - 1].easy6 = result[k].easy6;
                        if (result[k - 1].easy6) {
                            arr[index][arr[index].length - 1].tieE6 = true;
                        }
                    }
                }
            } else {
                if (this.getWinner(result[k]) == this.getWinner(result[k - 1]) || (this.getWinner(result[k - 1]) == "tie" && this.getWinner(result[k]) == this.getWinner(result[k - 2]))) {
                    if (this.getWinner(result[k]) != "tie") {
                        arr[index].push({result : this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                        easyarr[index].push({result : this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                    } else {
                        if (arr[index].length >= 1) {
                            arr[index][arr[index].length - 1].tie = true;
                            arr[index][arr[index].length - 1].easy6 = result[k].easy6;
                            if (result[k - 1].easy6) {
                                arr[index][arr[index].length - 1].tieE6 = true;
                            }
                        }

                    }
                } else {
                    if (this.getWinner(result[k]) != "tie") {
                        index++;
                        if (arr[index] == undefined) {
                            arr[index] = [];
                            easyarr[index] = [];

                        }
                        arr[index].push({result :this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                        easyarr[index].push({result :this.getWinner(result[k]), tie : false, easy6 : result[k].easy6});
                    } else {
                        if (arr[index][arr[index].length - 1] == undefined) {
                            arr[index][arr[index].length - 1] = {};
                        }
                        arr[index][arr[index].length - 1].tie = true;
                        arr[index][arr[index].length - 1].easy6 = result[k].easy6;
                        if (result[k - 1].easy6) {
                            arr[index][arr[index].length - 1].tieE6 = true;
                        }
                    }
                }
                if (arr[index].length > maxRow) {
                    index++;
                }
            }
        }

        this.bigRoadComp.updateResult(arr);
        this.bigEyeBoyComp.updateResult(arr);


        if (this.smallRoadComp) {
            this.smallRoadComp.updateResult(arr);
        }
        if (this.cockroachPigComp) {
            this.cockroachPigComp.updateResult(arr);
        }

        if (this.currentIndex > this.totalIndex) {
            this.currentIndex = 1;
        }

    }

    getWinner (obj) {
        return obj.winner;
        let winner = "";
        if (obj.tie != undefined) {
            winner = "tie";
        } else {
            if (obj.player != undefined) {
                winner = "player";
            } else {
                winner = "dealer";
            }
        }
        return winner;
    }

    showRoadMap () {
        this.visible = true;
        this.modalRect.visible = true;
    }

    resizeViewComponents () {
        super.resizeViewComponents();
        this.positionForDevice();
        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                this.modalRect.visible = true;
                this.scrollbox.boxWidth = 2880;
                this.scrollbox.boxHeight = 1100;
                this.header.width = this.scrollbox.boxWidth;
                this.header.y = CoreLib.UIUtil.getGameHeight() * 0.20;
                this.headerContainer.scale.set(1);
                let hsc = (this.header.height * 0.80) / this.headerContainer.height;
                let sc = (this.header.width * 0.9) / this.headerContainer.width;
                this.headerContainer.scale.set(Math.min(hsc, sc));
                this.headerContainer.x = (this.header.width - this.headerContainer.width) / 2;
                this.headerContainer.y = this.header.y + (this.header.height - this.headerContainer.height) / 2;


                this.rContainer.x = 0;
                this.rContainer.y = 0;
                this.scrollbox.content.x = 0;
                this.visible = false;
                this.scrollbox.y = this.header.y + this.header.height;
                this.modalRect.width = this.scrollbox.width;
                this.modalRect.height = this.scrollbox.height * 2.25;
            } else {
                let sc;
                this.header.scale.set(1);
                this.header.x = 0;
                this.header.y = 0;
                this.headerContainer.scale.set(1);
                let hsc = (this.header.height * 0.90) / this.headerContainer.height;
                sc = (this.header.width * 0.9) / this.headerContainer.width;
                this.headerContainer.scale.set(Math.min(hsc, sc));
                this.headerContainer.x = (this.header.width - this.headerContainer.width) / 2;
                this.headerContainer.y = (this.header.height - this.headerContainer.height) / 2;

                this.scrollbox.boxWidth = 1440;
                this.scrollbox.boxHeight = 684;
                this.modalRect.visible = false;
                this.scrollbox.content.x = 0;
                this.rContainer.x = 0;
                this.rContainer.y = this.header.height;
                this.visible = true;
                this.scrollbox.y = 0;
            }
            this.scrollbox.update();

        }
    }

};
