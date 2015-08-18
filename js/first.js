/**
 * Created by nickolasnikolic on 8/18/15.
 */
$(document).ready(function(){
    var stage = createjs.Stage('stage');

    var circle = new createjs.Shape();
    circle.graphics
        .beginFill('red')
        .drawCircle(0,0,50);

    circle.x = 100;
    circle.y = 100;

    stage.addChild(circle);

    stage.update(); //tbd
});
