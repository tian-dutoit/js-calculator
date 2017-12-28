$(document).ready(function(){
//taking the input from the button and displaying it in the display area

var result = parseInt($('#screen').html());
//console.log(result);
var first = 10;
var second = 2;
var operator = 9;


//append the button pressed to current display
$("#test").click(function(){
  $("#screen").append("t");
  result = $('#screen').html();
//  console.log(result);
});


//clearing the screen on C press
$("#zero").click(function(){
  $("#screen").html("0");
});

// clicking on equals runs the calculation
$("#equals").click(function(){
  //var welp = parseInt(first) + parseInt(second);
  if(operator === 0){
  addition(first, second);
  }
  else if(operator === 1){
    subtraction(first, second);
  }
  else if(operator === 2){
    multiply(first, second);
  }
  else if(operator === 3){
    division(first, second);
  }
  else{
    alert("Error");
    $("#screen").html("0");
  }

});
//   var welp = first + second;
//   alert(welp);
// });

var addition = function(first, second) {
   var calc = first+second;
   alert(calc)
   $("#screen").html(calc);
};

var subtraction = function(first, second) {
  var calc = first-second;
  alert(calc)
  $("#screen").html(calc);
};

var multiply = function(first, second) {
   var calc = first*second;
   alert(calc)
   $("#screen").html(calc);
};

var division = function(first, second) {
  var calc = first/second;
  alert(calc)
  $("#screen").html(calc);
};



});
