export const BCT_ROADMAP_CONFIG = {
    name :"roadmapComp", type : "Comp", class : "BCTRoadmapComp", resizeChildren : true, y : 982,
        Elements : [
            {name : "modalRect", type : "Graphics", width : 2560, height : 1440, color : 0x000000, alpha : 0.8},
            {name : "header", type : "Sprite", image : "bgboxheader"},
            {name : "heading", type : "Sprite", image : "bigroadheading", mobileImage : "bigroadheadingM", x : 24, y : 8, px : 1000, py : -6, lx : 1000, ly : -6},
            {name :"roadmapBG", type : "Comp", class : "BCTRoadmapBG", x : 12, y : 2, px : 0, lx : 0, py : 0, ly : 0, resizeChildren : true,
                Elements : [
                    {name : "leftbg", type : "Sprite", image : "leftbox"},
                    {name : "rightbg", type : "Sprite", image : "rightbox", x : 1856},
                    {name : "mobilebg", type : "Sprite", image : "bgboxM_New"},

                ]
            },
            {name : "legendComp", type : "Comp", class : "BCTLegendComp", x: 1900, y : 20, px : 0, py : 0, lx : 0, ly : 0, resizeChildren: true,
                Elements:  [
                    {name : "totalNumberText", type : "Text", contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 0, y : 2, px : 0, py : 6, lx : 0, ly : 6, anchor : {x : 0, y : 0}},
                    {name : "bankerIcon", type : 'Sprite', image : "banker", x : 90, y : 0, px : 120, py : 0, lx : 120, ly : 0},
                    {name : "bankerText", type : "Text", contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 140, y : 2, px : 190, py : 6, lx : 190, ly : 6, anchor : {x : 0, y : 0}},
                    {name : "playerIcon", type : 'Sprite', image : "player", x : 200, y : 0, px : 270, py : 0, lx : 270, ly : 0},
                    {name : "playerText", type : 'Text', contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 250, y : 2, px : 340, py : 6, lx : 340, ly : 6, anchor : {x : 0, y : 0}},
                    {name : "tieIcon", type : 'Sprite', image : "tie", x : 310, y : 0, px : 420, py : 0, lx : 420, ly : 0},
                    {name : "tieText", type : 'Text', contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 360, y : 2, px : 490, py : 6, lx : 490, ly : 6, anchor : {x : 0, y : 0}},
                    {name : "bankerpairIcon", type : 'Sprite', image : "bankerpairlegend", x : 420, y : 0, px : 570, py : 0, lx : 570, ly : 0},
                    {name : "bankerpairText", type : 'Text', contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 470, y : 2, px : 640, py : 6, lx : 640, ly : 6,anchor : {x : 0, y : 0}},
                    {name : "playerpairIcon", type : 'Sprite', image : "playerpairlegend", x : 530, y : 0, px : 720, py : 0, lx : 720, ly : 0},
                    {name : "playerpairText", type : 'Text', contentText : "", style : "gameFont1Style", fontSize : 28, mFontSize : 40, fontColor : 0x000000, x: 580, y : 2, px : 790, py : 6, lx : 790, ly : 6,anchor : {x : 0, y : 0}},
                ]
            },
            {name : "beadPlateComp", type : "Comp", class : "BCTBeadPlateComp", x: 1887, y : 90, px : 38, py : 26, lx : 34, ly : 22,
                Elements : [
                    //{name : "guideRect", type : "Graphics", width : 460, height : 210, color : 0xff00ff, alpha : 1}
                ]
            },
            {name : "bigRoadComp", type : "Comp", class : "BCTBigRoadComp", x : 23, y : 80, px : 1460, py : 12, lx : 1460, ly : 22,
                Elements : [
                    //{name : "guideRect", type : "Graphics", width : 664, height : 126, color : 0x0000ff, alpha : 0}
                ]
            },
            {name : "bigEyeBoyComp", type : "Comp", class : "BCTBigEyeComp", x : 18, y : 206, px : 1460, py : 298, lx : 1460, ly : 286,
                Elements : [
                    //{name : "guideRect", type : "Graphics", width : 214, height : 100, color : 0xff0f00, alpha : 1}

                ]
            },
            {name : "smallRoadComp", type : "Comp", class : "BCTSmallRoadComp", x : 246, y : 206, px : 1934, py : 298, lx : 1934, ly : 286,
                Elements : [
                    //{name : "guideRect", type : "Graphics", width : 214, height : 100, color : 0x00ff00, alpha : 0}

                ]
            },
            {name : "cockroachPigComp", type : "Comp", class : "BCTCockroachPigComp", x : 466, y :206, px : 2404, py : 298, lx : 2404, ly : 286,
                Elements : [
                    {name : "guideRect", type : "Graphics", width : 214, height : 100, color : 0xff00ff, alpha : 0}
                ]
            },


        ],
        layoutData : {

        }

}
