$(document).ready(function(){
var result = 0;
var second = 0;
var operator = 0;
var currentVal = 0;
///////////event handlers for operators
($("#plus")).click(function(){
  operator = 0;
  currentVal = parseInt($("#screen").html());
  result = result + currentVal;
  $("#screen").html("");
});

($("#minus")).click(function(){
  operator = 1;
  currentVal = parseInt($("#screen").html());
  $("#screen").html("");
});

($("#times")).click(function(){
  operator = 2;
  currentVal = parseInt($("#screen").html());
  $("#screen").html("");
});

($("#divide")).click(function(){
  operator = 3;
  currentVal = parseInt($("#screen").html());
  $("#screen").html("");
});

//append the button pressed to current display
// $('.numb').click(function(){
//   $("#screen").append($(this).html());
//   currentVal = parseInt($('#screen').html());
// //  alert(currentVal);
// });


////////////////////////////////////
//Appending selection to show current equation
var selection = "";

var selectString = function(){
  $("#test").append(($(this).html()));
};

$('button').click(selectString);


//clearing the screen on C press
$("#zero").click(function(){
  $("#screen").html("0");
  $("#test").html("");
  currentVal = 0;
  second = 0;
  result = 0;
});


//clicking on equals runs the calculation
$("#equals").click(function(){
  currentVal = parseInt($("#screen").html());
  $("#test").html("");
  if(operator === 0){
    addition(result, currentVal);
  }
  else if(operator === 1){
    subtraction(currentVal, second);
  }
  else if(operator === 2){
    multiply(currentVal, second);
  }
  else if(operator === 3){
    division(currentVal, second);
  }
  else{
    alert("Error");
    $("#screen").html("0");
  }

});



//*functions*

//append the button pressed to current display

var app = function(){
  $("#screen").append($(this).html());
};

$('.numb').click(app);

//calculation functions
var addition = function(result, currentVal) {
   result = result+currentVal;
   $("#screen").html(result);
   result = 0;
};

var subtraction = function(currentVal, second) {
  var currentVal = currentVal-second;
  $("#screen").html(currentVal);
};

var multiply = function(currentVal, second) {
   var currentVal = currentVal*second;
   $("#screen").html(currentVal);
};

var division = function(currentVal, second) {
  var currentVal = currentVal/second;
  $("#screen").html(currentVal);
};

$('button').click(function(){
  $("#current").html(currentVal);
  $("#sec").html(second);
  $("#res").html(result);

});


});
