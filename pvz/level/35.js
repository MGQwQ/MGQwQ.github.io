oS.Init({
    // 植物名称列表
    PName: [oYanghelin2, oYanghelin, oPeashooter, oCherryBomb, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover],
    // 僵尸名称列表
    ZName: [oZombie, oZombie2, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oConeheadZombie, oBalloonZombie, oDolphinRiderZombie],
    // 图片数组
    PicArr: ["images/interface/background4.jpg", "images/interface/Taco.png"],
    // 初始坐标
    Coord: 2,
    // 初始阳光数量
    SunNum: 5000,
    // 植物栏布局
    LF: [0, 1, 1, 2, 2, 1, 1],
    // 背景图片
    backgroundImage: "images/interface/background4.jpg",
    // 是否可以选择卡片
    CanSelectCard: 1,
    // 游戏模式
    DKind: 0,
    // 是否有雾气
    HaveFog: 4,
    // 关卡名称
    LevelName: "关卡 4-5",
    // 关卡英文名称
    LvlEName: 35,
    // 大波标识
    LargeWaveFlag: {
        10: $("imgFlag3"),
        20: $("imgFlag1")
    },
    // 用户自定义标识功能
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3])
    },
    // 开始游戏音乐
    StartGameMusic: "Loonboon"
}, {
    // 僵尸数组
    AZ: [
        [oZombie, 2, 1],
        [oZombie2, 2, 1],
        [oDuckyTubeZombie1, 1, 6, [6, 7, 8, 10, 19, 20]],
        [oDuckyTubeZombie2, 1, 6, [10, 20]],
        [oDuckyTubeZombie3, 1, 6, [10, 20]],
        [oConeheadZombie, 3, 1],
        [oBalloonZombie, 1, 10, [10, 20]],
        [oDolphinRiderZombie, 1, 10, [10, 20]]
    ],
    // 总波数
    FlagNum: 20,
    // 每一波的僵尸数量
    FlagToSumNum: {
        a1: [3, 5, 9, 10, 13, 15, 19],
        a2: [1, 2, 3, 10, 4, 5, 6, 15]
    },
    // 监控波数对应的函数
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowFinalWave, 0]
    },
    // 结束标识功能
    FlagToEnd: function() {
        NewImg("imgSF", "images/interface/Taco.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                alert('本关获得商店，暂未开放，敬请期待！');
                SelectModal(0);
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
    }
});