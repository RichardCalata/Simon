"use strict";

var simonArr = [];
var userArr = [];
var colorNumber;
var color;
var level =0;
var roundCount = 0;

///causes color panels to react to user mouse clicks///

$('.quarter').on('mousedown', function(){

    colorNumber = $(this).attr('id');
    color =$(this).attr('class').split(' ')[3];
    userArr.push(colorNumber);
    lightPanel(colorNumber,color);

    if(!checkPlayerInput()){
        displayError();
        userArr = [];
        simonArr = [];
        level= 0;

    }
    if(simonArr.length > 0 && userArr.length == simonArr.length) {
        level++;
        roundCounter();
        console.log("this is the length of roundCount array "+roundCount);
        userArr =[];
        // console.log("a very important message")
        setTimeout(function(){
            startGame();
            }, 800);

    }


    function roundCounter(){
        if(userArr.length == simonArr.length){
        roundCount++;
            console.log("round Counter fires");
            $(".round_count").text("Highest Round " + roundCount);


        }
    }
    // $(this).addClass($(this).attr('class').split(' ')[3]+'-active');
    //
    //     console.log($(this).attr('class').split(' ')[3] + " was clicked");
    //     // userArr.push(useClick);
    //     console.log($(this).attr('class').split(' ')[3]+ '-active');
    //
    // $(this).on('mouseup', function(){
    //         // console.log($(this).attr('class').split(' ')[1] + " was UNclicked");
    //         $(this).removeClass($(this).attr('class').split(' ')[3]+ '-active');
    //     });
});

$('.start').on('click', function(){
    level++;
    startGame()
});

// starts game
function startGame(){

    // console.log("current level "+level);
    $(".game_body").text("Round " +level);
    randomNumber();
    var i=0;
    var interval = setInterval(function(){
    // console.log(roundCount[i]);
     colorNumber =  simonArr[i];
     color = $("#" + colorNumber).attr('class').split(' ')[3];
     // console.log($("#"+colorNumber).attr('class')[3]);
     // console.log(color);
     i++;
     lightPanel(colorNumber,color);

    if(i==simonArr.length){
        clearInterval(interval);
    }

    }, 800);

}


function randomNumber(){
    var random = Math.floor(Math.random()*4);
    simonArr.push(random);
}

///add class
function lightPanel(colorNumber,color){
    // console.log("lightPanel function")

    $("#"+colorNumber).addClass(color+"-lit");
    setTimeout(function(){
        $("#"+colorNumber).removeClass(color+"-lit");
    }, 400);
}

function checkPlayerInput(){
    for(var i= 0; i<userArr.length; i++) {
        if(userArr[i] != simonArr[i]){
            return false;

        }
    } return true;
}

function displayError(){
    $('.game_body').text("Error Game will restart");
    var counter = 0;

var errorTimer = setInterval(function() {
    $('.btn-lg').addClass('error');
    $('.quarter').addClass('error');
    counter++;
    if(counter == 3){
        clearInterval(errorTimer);}
    setTimeout(function () {
        $('.btn-lg').removeClass('error');
        $('.quarter').removeClass('error')
    }, 200)
}, 400)
}
