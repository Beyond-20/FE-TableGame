export const BCT_SETTINGS_CONFIG = {
  name :"desktopSettings", type : "Comp", class : "DesktopSettingsComp",
  Elements : [
    {name : "bg", type : "Sprite", image : "settingspanelbg"},
    {name : "historyBtn", type : "Comp", class : "MobileLongBtnComp", x : 20, y : 20,
      Elements: [
        {name : "bg", type : "Graphics", width : 100, height : 100, color : 0xffff00},
        {name : "titleText", type : "Text", content : "historyText", style : "commonFontStyle", fontSize : 38, mFontSize : 40, anchor : {x : 0, y : 0}},
        {name : "icon", type : "Sprite", image : "historyIconBtn", x : 340},
      ]
    },
    {name : "ambientSetting", type : "Comp", class : "SettingsElement", x : 20, y : 100,
      Elements : [
        {name : "toggleOption", type : "Comp", class : "AnimatedToggleOption", x : 390, y : 10, state : true,
          Elements : [
            {name : "onbg", type : "Sprite", image : "onbar"},
            {name : "offbg", type : "Sprite", image : "offbar"},
            {name : "offbtn", type : "Sprite", image : "offBtn"},
            {name : "onbtn", type : "Sprite", image : "onBtn"},
          ]
        },
        {name : "titleText", type : "Text", content : "ambientMusicText", style : "commonFontStyle", fontSize : 38, mFontSize : 40, anchor : {x : 0, y : 0}},
        {name : "descText", type : "Text", content : "ambientMusicDesc", style : "commonFontStyle", wordWrap : true, wordWrapWidth : 340, fontSize : 22, mFontSize : 40, anchor : {x : 0, y : 0}, y : 50}
      ]
    },
    {name : "fxSetting", type : "Comp", class : "SettingsElement", x : 20, y : 235,
      Elements : [
        {name : "toggleOption", type : "Comp", class : "AnimatedToggleOption", x : 390, y : 10, state : true,
          Elements : [
            {name : "onbg", type : "Sprite", image : "onbar"},
            {name : "offbg", type : "Sprite", image : "offbar"},
            {name : "offbtn", type : "Sprite", image : "offBtn"},
            {name : "onbtn", type : "Sprite", image : "onBtn"},
          ]
        },
        {name : "titleText", type : "Text", content : "soundFXText", style : "commonFontStyle", fontSize : 38, mFontSize : 40, anchor : {x : 0, y : 0}},
        {name : "descText", type : "Text", content : "fxMusicDesc", style : "commonFontStyle", wordWrap : true, wordWrapWidth : 340, fontSize : 22, mFontSize : 40, anchor : {x : 0, y : 0}, y : 50}
      ]
    },
  ],
  layoutData : {
    "Desktop" : {widthPerc : 1, x : 150, y : 760},
    "Portrait" : {hAlign : "center", vAlign : "top", fitToScreen : true},
    "Landscape" : {hAlign : "center", vAlign : "top", fitToScreen : true},
  }

}
