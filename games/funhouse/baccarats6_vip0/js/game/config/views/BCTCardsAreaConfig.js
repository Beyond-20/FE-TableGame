export const BCT_CARDSAREA_CONFIG = {
    name :"cardsAreaComp", type : "Comp", class : "BCTCardsAreaComp", resizeChildren : true, y : 0,
        Elements : [
            {name : "guideRect", type : "Graphics", width : 2560, height : 1154, color : 0xff0000, alpha : 0},
            {name : "topchairs", "type" : "Sprite", image : "topchairs", x : 0, y : 0},
            {name : "leftcardsHolder", "type" : "Sprite", image : "leftcardsHolder", x : 0, y : 112},
            {name : "maincards", "type" : "Sprite", image : "playerBankerTitle", x : 790, y : 296},
            //{name : "extracards", "type" : "Sprite", image : "extraCardsSpace", x : 1846, y : 100},
            {name : "rightcardsHolder", "type" : "Sprite", image : "rightcardsHolder", x : 2272, y : 194},
            {name : "gameTimer", type : "Comp", class : "CircularTimer", x : 2340, y : 500, py : 900, ly : 500, fillColor : 0x00ff00, style : "gameFont1Style", fontSize : 66, mFontSize : 48, fontColor : 0xffffff, showDebug : true},
            //{name : "cardsRef", type : "Sprite", image : "element"},
            {name : "statusText", type : "Text", style : "gameFont1Style", fontSize : 50, mFontSize : 66, x : 1288, y : 680, anchor : {x : 0.5, y : 0.5}},
            {name : "countText", type : "Text", style : "gameFont1Style", fontSize : 36, mFontSize : 60, x : 40, y : 734, px : 60, py : 1032, lx : 40, ly : 740, anchor : {x : 0, y : 0}},
            {name : "resultComp", type : "Comp", class : "BCTWinnerComp", x : 1286, y : 760, py : 790, ly : 724,
                Elements : [
                    {name : "bg", type : "Sprite", image : "bct_winbg", anchor: {x : 0.5, y : 0}},
                    {name : "titleText", type : "Text", content : "winTitle", style : "gameFont1Style", anchor : {x:0.5, y : 0.5}, fontSize : 44, mFontSize : 50, x : 0, y : 22},
                    {name : "resultText", type : "Text", content : "", style : "gameFont1Style", anchor : {x:0.5, y : 0.5}, fontSize : 50, mFontSize : 60, x : 0, y : 86, my : 96},
                ]
            },
            {name : "winnerComp", type : "Comp", class : "BCTResultComp", x : 1066, y : 478,
                Elements : [
                    {name : "bg", type : "Sprite", image : "winnerBGDealer"},
                    {name : "resultText", type : "Text", content : "bankerText", style : "gameFont1Style", anchor : {x:0.5, y : 0.5}, fontSize : 44, x : 200, y : 44},
                ]
            },

        ]

}
