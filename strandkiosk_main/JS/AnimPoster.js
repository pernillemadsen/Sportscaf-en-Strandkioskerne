var stage;
var openDay = true;
var openWeather = false;
var openSeason = true;


/* KONTROL PANEL PROTOTYPE */
var openDayBoolean = localStorage.getItem('openDayBoolean');

if (openDayBoolean == "false") {
    openDay = false;
}

function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function (e) {
        stage.update();
    });
    
    
    if (openDay == true) {
        Opened();
    } else if (openSeason == false) {
        ClosedForSeason();
    } else {
        ClosedRain();
    }
    //Shop is **** funtions
    //ClosedRain();
    //ClosedBecause();
    //ClosedForSeason();
}

function Opened() {
    
    //Background
    var bgSunrise = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#ecd6b5", "#f0ae49"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 1000, 300));

    var bgDay = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#D1F7FF", "#39e5ff"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 1000, 300));
    bgDay.x = -1000;

    stage.addChild(bgSunrise, bgDay);


    //Sun
    var sun = new createjs.Shape(new createjs.Graphics().beginRadialGradientFill(["#ff5", "#ffca4c"], [0, 1], 100, 100, 0, 100, 100, 80).drawCircle(100, 100, 80));
    sun.x = -250;
    sun.y = 200;

    stage.addChild(sun);

    var txtContainerSun = new createjs.Container();
    //text box
    var txtBoxSun = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#fff", "#009"], [0, 1], 0, 200, 0, 260).drawRect(800, 220, 600, 50));

    //text
    var txtSun = new createjs.Text('Solen skinner. Vi holder åbent.', "16px Roboto", "#ff0");
    txtSun.textBaseline = "middle";
    txtSun.textAlign = "left";
    txtSun.x = 820;
    txtSun.y = 245;

    txtContainerSun.addChild(txtBoxSun, txtSun);


    //degrees celcius text
    var txtDegrees = new createjs.Text('17°C', "100px Roboto", "#000");
    txtDegrees.x = 550;
    txtDegrees.y = 50;

    //Add to stage
    stage.addChild(txtContainerSun, txtDegrees);
    
    //TWEEN
    createjs.Tween.get(txtContainerSun).to({
        x: -370,
        y: -20
    }, 1500, createjs.Ease.linear);

    createjs.Tween.get(sun).to({
        x: 90,
        y: 20
    }, 5500);

    createjs.Tween.get(bgSunrise).wait(4000).to({
        x: -1000
    });

    createjs.Tween.get(bgDay).wait(4000).to({
        x: 0
    }, createjs.Ease.sineIn);
}

function ClosedRain() {
    //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#465c67", "#326a85"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 1000, 300));
    stage.addChild(bg);

    //rainDrop
    var drops = new Array();
    for (i = 0; i < 100; i++) {
        var drop = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#777", "#ddd"], [0, 1], 0, 5, 0, 20).drawRoundRect(0, 0, 2, 20, 2));
        drop.x = Math.random() * 1000;
        drop.y = -15;
        drops.push(drop);

        var dropTime = Math.floor(Math.random() * 1500) + 10;

        createjs.Tween.get(drop, {loop: true}).to({
            y: 400
        }, dropTime).to({
            y: -15
        });
    }

    for (j = 0; j < 100; j++) {
        stage.addChild(drops[j]);
    }
    
    var txtContainerRain = new createjs.Container();
    //text box
    var txtBoxRain = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#555", "#000"], [0, 1], 0, 160, 0, 280).drawRect(200, 110, 600, 80));
    //text
    var txtRain = new createjs.Text('Vi holder lukket pga. regn', "50px Roboto", "#fff");
    txtRain.textBaseline = "middle";
    txtRain.textAlign = "center";
    txtRain.x = stage.canvas.width / 2;
    txtRain.y = stage.canvas.height / 2;
    txtContainerRain.addChild(txtBoxRain, txtRain);
    
    stage.addChild(txtContainerRain);
}

function ClosedBecause() {
    //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#465f67", "#326a85"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 1000, 300));
    stage.addChild(bg);

    var txtContainer = new createjs.Container();
    var txtBox = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#555", "#000"], [0, 1], 0, 200, 0, 260).drawRect(800, 220, 500, 50));

    //Write reason for closed here
    var CLOSEDBC = 'Vi holder lukket i dag pga. sygdom';
    //text
    var txt = new createjs.Text(CLOSEDBC, "14px Roboto", "#fff");
    txt.textBaseline = "middle";
    txt.textAlign = "left";
    txt.x = 820;
    txt.y = 245;

    txtContainer.addChild(txtBox, txt);

    stage.addChild(txtContainer);

    createjs.Tween.get(txtContainer).to({
        x: -250, y: -50
    }, 1000, createjs.Ease.linear);
}

function ClosedForSeason() {
    //Background
    var bg = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#465f67", "#000"], [0, 1], 0, 20, 0, 400).drawRect(0, 0, 1000, 300));
    stage.addChild(bg);

    var txtContainer2 = new createjs.Container();
    var txtBox2 = new createjs.Shape(new createjs.Graphics().beginLinearGradientFill(["#555", "#000"], [0, 1], 0, 175, 0, 280).drawRect(800, 175, 500, 50));

    //text2
    var txt2 = new createjs.Text('Vi holder sæsonlukket. Strandkioskerne åbner igen i maj', "14px Roboto", "#fff");
    txt2.textBaseline = "middle";
    txt2.textAlign = "left";
    txt2.x = 820;
    txt2.y = 200;

    txtContainer2.addChild(txtBox2, txt2);

    stage.addChild(txtContainer2);

    createjs.Tween.get(txtContainer2, {loop: true}).to({
        x: -1300
    }, 16000, createjs.Ease.linear).to({
        x: 0
    }, 16000, createjs.Ease.linear);
}