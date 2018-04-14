"use strict";

var simonArr = [];
var userArr = [];
var colorNumber;
var color;
var level =0;

///causes color panels to react to user mouse clicks///

$('.quarter').on('mousedown', function(){
    $(this).addClass($(this).attr('class').split(' ')[3]+'-active');

        console.log($(this).attr('class').split(' ')[3] + " was clicked");
        // userArr.push(useClick);
        console.log($(this).attr('class').split(' ')[3]+ '-active');

    $(this).on('mouseup', function(){
            // console.log($(this).attr('class').split(' ')[1] + " was UNclicked");
            $(this).removeClass($(this).attr('class').split(' ')[3]+ '-active');
        });
});

$('.start').on('click', function(){
    level++;
    startGame()
});

// starts game
function startGame(){
    console.log(level);
    $(".game_body").text(level);
    randomNumber();
    var i=0;
    var interval = setInterval(function(){
     colorNumber =  simonArr[i];
     color = $("#" + colorNumber).attr('class').split(' ')[3];
     console.log($("#"+colorNumber).attr('class')[3]);
     console.log(color);
     i++;
     lightPanel(colorNumber,color);
    if(i==simonArr.length){
        clearInterval(interval);
    }

    }, 1000);

}


function randomNumber(){
    var random = Math.floor(Math.random()*4);
    simonArr.push(random);
}

///add class
function lightPanel(colorNumber,color){
    console.log(" an Important message")

    $("#"+colorNumber).addClass(color+"-active");
    setTimeout(function(){
        $("#"+colorNumber).removeClass(color+"-active");
    }, 400);
}