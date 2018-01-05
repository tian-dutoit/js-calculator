$(document).ready(function(){
var result = 0;
var operator = 0;
var currentVal = 0;
///////////event handlers for operators

($(".op")).click(function(){
  currentVal = parseInt($("#screen").html());
  if(operator === 0){
    result += currentVal;
    $("#screen").html("");
  }
  else if(operator === 1){
    result -= currentVal;
    $("#screen").html("");
    }
  else if(operator === 2){
    result = result * currentVal;
    $("#screen").html("");
    }
  else if(operator === 3){
    result = result / currentVal;
    $("#screen").html("");
  }
  else if(operator === 4){
    result = currentVal;
    $("#screen").html("");
  }
  else{
    alert("Error");
    $("#screen").html("");
  }
});



($("#plus")).click(function(){
  operator = 0;
});

($("#minus")).click(function(){
  operator = 1;
});

($("#times")).click(function(){
  operator = 2;
});

($("#divide")).click(function(){
  operator = 3;
});

($("#equals")).click(function(){
  operator = 4;
});


//append the button pressed to current display
// $('.numb').click(function(){
//   $("#screen").append($(this).html());
//   currentVal = parseInt($('#screen').html());
// //  alert(currentVal);
// });


////////////////////////////////////
//Appending selection to show current equation

var selectString = function(){
  $("#equation").append(($(this).html()));
};

$('button').click(selectString);


//clearing the screen on C press
$("#zero").click(function(){
  $("#screen").html("");
  $("#equation").html("");
  $("#operators").html("");
  currentVal = 0;
  result = 0;
  operators = 0;
});




//equation for simplified equals solution
$("#equals").click(function(){
  currentVal = parseInt($("#screen").html());
  $("#equation").html("");
  if(operator === 0){
    addition(result, currentVal);
  }
  else if(operator === 1){
    subtraction(result, currentVal);
  }
  else if(operator === 2){
    multiply(result, currentVal);
  }
  else if(operator === 3){
    division(result, currentVal);
  }
  else if(operator === 4){
    console.log(result);
    $("#screen").html(result);

    //$("#screen").html("0");
  }
  else{
    alert("Error");
    $("#screen").html("0");
  }
  result = 0;
});


// //clicking on equals runs the calculation
// $("#equals").click(function(){
//   currentVal = parseInt($("#screen").html());
//   $("#equation").html("");
//   if(operator === 0){
//     addition(result, currentVal);
//   }
//   else if(operator === 1){
//     subtraction(currentVal, currentVal);
//   }
//   else if(operator === 2){
//     multiply(currentVal, currentVal);
//   }
//   else if(operator === 3){
//     division(currentVal, currentVal);
//   }
//   else{
//     alert("Error");
//     $("#screen").html("0");
//   }
//
// });



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
//  result = 0;
};

var subtraction = function(currentVal, currentVal) {
   result = result-currentVal;
  $("#screen").html(result);
};

var multiply = function(currentVal, currentVal) {
   result = result*currentVal;
   $("#screen").html(result);
};

var division = function(currentVal, currentVal) {
  result = result/currentVal;
  $("#screen").html(result);
};

$('button').click(function(){
  $("#current").html(currentVal);
  $("#operators").html(operator);
  $("#res").html(result);

});


});
