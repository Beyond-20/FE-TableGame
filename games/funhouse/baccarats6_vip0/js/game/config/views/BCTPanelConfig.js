export const BCT_PANEL_CONFIG = {
    name :"panelComp", type : "Comp", class : "BCTPanelComp", resizeChildren : true, y : 982,
        Elements : [
            {name : "panelbg", type : "Sprite", image : "panelbg", mobileImage : "buttonsbgMobile"},
            {name : "buttonsComp", type : "Comp", class : "BCTButtonsComp", x : 716,
                Elements : [
                    {name : "bg", type : "Sprite", image :"buttonsbg"},
                    {name : "pssBtn", type : "Comp", class : "BCTCustomBetBtn", x : 0, y : 8, px : 0, py : 0, lx : 2, ly : 178,
                        chipPosX : 66, chipPosY : 270,
                        chipPosPX : 72, chipPosPY : 72,
                        chipPosLX : 62, chipPosLY : 86,
                        Elements: [
                            {name : "bg", type : "DSSprite", image : "super6btn_up", imagePT : "super6btnPt_up", imageLS : "super6btnLs_up"},
                            {name : "ttext", type : "Text", content : "super6", style : "gameFont1Style", fontSize: 22, mFontSize : 44, wordWrapWidth : 120, mWordWrapWidth : 400, align : "center"}
                        ]
                    },
                    {name : "bssBtn", type : "Comp", class : "BCTCustomBetBtn", x : 1004, y : 8, px : 722, py : 0, lx : 2030, ly : 178,
                        chipPosX : 66, chipPosY : 270,
                        chipPosPX : 644, chipPosPY : 72,
                        chipPosLX : 464, chipPosLY : 86,
                        Elements: [
                            {name : "bg", type : "DSSprite", image : "super6btn_up", imagePT : "super6btnPt_up", imageLS : "super6btnLs_up"},
                            {name : "ttext", type : "Text", content : "super6", style : "gameFont1Style", fontSize: 22, mFontSize : 44, wordWrapWidth : 120, mWordWrapWidth : 400, align : "center"}
                        ]
                    },
                    {name : "playerPairBtn", type : "Comp", class : "BCTCustomBetBtn", x : 144, y : 8, px : 0, py : 146, lx : 0, ly : 0,
                        chipPosX : 44, chipPosY : 36,
                        chipPosPX : 72, chipPosPY : 72,
                        chipPosLX : 62, chipPosLY : 86,
                        Elements: [
                            {name : "bg", type : "DSSprite", image : "playerPairBtn_up", imagePT : "playerPairBtnPt_up", imageLS : "playerPairBtnLs_up"},
                            {name : "ttext", type : "Text", content : "playerPairBtnText", style : "gameFont1Style", fontSize: 22, mFontSize : 44, wordWrapWidth : 400, mWordWrapWidth : 600, align : "center"}
                        ]
                    },
                    {name : "bankerPairBtn", type : "Comp", class : "BCTCustomBetBtn", x : 576, y : 8, px : 722, py : 146, lx : 2030, ly : 0,
                        chipPosX : 370, chipPosY : 36,
                        chipPosPX : 644, chipPosPY : 72,
                        chipPosLX : 464, chipPosLY : 86,
                        Elements: [
                            {name : "bg", type : "DSSprite", image : "bankerPairBtn_up", imagePT : "bankerPairBtnPt_up", imageLS : "bankerPairBtnLs_up"},
                            {name : "ttext", type : "Text", content : "bankerPairBtnText", style : "gameFont1Style", fontSize: 22, mFontSize : 44, wordWrapWidth : 400, align : "center"}
                        ]
                    },
                    {name : "playerBtn", type : "Comp", class : "BCTCustomBetBtn", x : 144, y : 94, px : 0, py : 290, lx : 534, ly : 0, resizeChildren : true,
                        chipPosX : 248, chipPosY : 188,
                        chipPosPX : 72, chipPosPY : 370,
                        chipPosLX : 72, chipPosLY : 296,
                        cardPositions : [{x : 100, y : 132}, {x :165, y : 132}, {x : 95, y : 160}],
                        mobileCardPositionsL : [{x : 258, y : 190}, {x :378, y : 190}, {x : 242, y : 236}],
                        mobileCardPositionsP : [{x : 235, y : 264}, {x :350, y : 264}, {x : 222, y : 314}],
                        cardScale : 0.16,
                        mobileCardScale : 0.28,
                        Elements : [
                            {name : "bg", type : "DSSprite", image : "playerBtn_up", imageLS : "playerBtnLs_up", imagePT : "playerBtnPt_up"},
                            {name : "icon", type : "Sprite", image : "playerBtnIcon", x : 40, y : 132, py : 330, ly : 260, alpha : 0.4},
                            {name : "titleText", type : "Text", content : "playerBtnTitle", style : "gameFont1Style", fontSize: 22, mFontSize : 44, x: 20, y : 8, ly : 12, anchor : {x : 0, y : 0}},
                            {name : "betStatusComp", type : "Comp", class : "BCTGameBetStatusComp", x : 16, y : 50, px : 20, py : 90, lx : 20, ly : 70, fillColor : "0x2a68f2", fontColor : "0x2a68f2"},
                            {name : "totalBG", type : "Sprite", image : "playerTotalBG", x : 198, y : 48, px : 378, py : 70, lx : 418, ly : 70},
                            {name : "totalText", type : "Text", contentText : "", style : "gameFont1Style", fontSize : 44, mFontSize : 60, fontColor : "0x0d2a6a", x: 252, y : 78, px : 430, py : 98, lx : 480, ly : 98, anchor : {x : 0.5, y : 0.5}},
                        ]
                    },
                    {name : "tieBtn", type : "Comp", class : "BCTCustomBetBtn", x : 440, y : 94, px : 462, py : 290, lx : 1046, ly : 0, resizeChildren : true,
                        chipPosX : 178, chipPosY : 188,
                        chipPosPX : 256, chipPosPY : 370,
                        chipPosLX : 236, chipPosLY : 296,
                        Elements : [
                            {name : "bg", type : "DSSprite", image : "tieBtn_up", imagePT : "tieBtnPt_up", imageLS : "tieBtnLs_up"},
                            {name : "icon", type : "Sprite", image : "tieBtnIcon", x : 92, y : 132, py : 330, ly : 260, alpha : 0.4},
                            {name : "titleText", type : "Text", content : "tieBtnTitle", style : "gameFont1Style", fontSize: 22, mFontSize : 44, x: 124, y : 8, ly : 12, anchor : {x: 0.5, y : 0}},
                            {name : "betStatusComp", type : "Comp", class : "BCTGameBetStatusComp", x : 34, y : 50, px : 60, py : 90, lx : 60, ly : 70, fillColor : "0x18c904", fontColor : "0x18c904"},
                        ]
                    },
                    {name : "bankerBtn", type : "Comp", class : "BCTCustomBetBtn", x : 680, y : 94, px : 932, py : 290, lx : 1476, ly : 0, resizeChildren : true,
                        chipPosX : 68, chipPosY : 188,
                        chipPosPX : 82, chipPosPY : 370,
                        chipPosLX : 82, chipPosLY : 296,
                        cardPositions : [{x : 90, y : 132}, {x : 155, y : 132}, {x : 307, y : 160}],
                        mobileCardPositionsL : [{x : 145, y : 190}, {x :265, y : 190}, {x : 530, y : 236}],
                        mobileCardPositionsP : [{x : 108, y : 264}, {x :223, y : 264}, {x : 490, y : 314}],
                        cardScale : 0.16,
                        mobileCardScale : 0.28,
                        Elements : [
                            {name : "bg", type : "DSSprite", image : "bankerBtn_up", imagePT : "bankerBtnPt_up", imageLS : "bankerBtnLs_up"},
                            {name : "icon", type : "Sprite", image : "bankerBtnIcon", x : 190, y : 132, py : 330, my : 260, ly : 260, alpha : 0.4},
                            {name : "titleText", type : "Text", content : "bankerBtnTitle", style : "gameFont1Style", fontSize: 22, mFontSize : 44, x: 292, y : 8, ly : 12, anchor : {x: 1, y : 0}},
                            {name : "betStatusComp", type : "Comp", class : "BCTGameBetStatusComp", x : 114, y : 50, px : 214, py : 90, lx : 250, ly : 70, fillColor : "0xe11216", fontColor : "0xe11216", percPosition : "right"},
                            {name : "totalBG", type : "Sprite", image : "bankerTotalBG", x : 0, y : 48, px : 10, py : 70, ly : 70},
                            {name : "totalText", type : "Text", contentText : "", style : "gameFont1Style", fontSize : 44, mFontSize : 60,fontColor : "0x85160f", x: 52, y : 78, px : 60, py : 98, lx : 60, ly : 98, anchor : {x : 0.5, y : 0.5}},
                        ]
                    },
                    {name : "warningComp", type : "Comp", class : "BCTWarningComp", x : 340, y : 150,
                        Elements : [
                            {name : "bg", type : "Graphics", width : 640, height : 100, color : 0x000000, alpha : 0.8},
                            {name : "warningText", type : "Text", content : "maxBetWarning", style : "gameFont1Style", fontSize : 36, mFontSize : 30, fontColor : "0xffffff", x: 240, y : 50, anchor : {x : 0.5, y : 0.5}},

                        ]
                    }
                ]
            }
        ],
        layoutData : {

        }

}
