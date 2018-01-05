$(document).ready(function(){
  var result = 0;
  var operator = 0;
  var currentVal = 0;

  //on clicking an operator update the currentVal and result variables
  ($(".op")).click(function(){
    currentVal = parseInt($("#screen").html());
    if(operator === 0){
      result += currentVal;
    }
    else if(operator === 1){
      result -= currentVal;
      }
    else if(operator === 2){
      result = result * currentVal;
      }
    else if(operator === 3){
      result = result / currentVal;
    }
    else if(operator === 4){
      result = currentVal;
    }
    else{
      alert("Error");
    }
    $("#screen").html("");
  });

  //event handlers for operators
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

  //Appending selection to show current calculation
  var selectString = function(){
    $("#equation").append(($(this).html()));
  };
  $('button').click(selectString);

  //clearing the screen on C press (zero out)
  var clear = function(){
    $("#screen").html("");
    $("#equation").html("");
    $("#operators").html("");
    currentVal = 0;
    result = 0;
    operators = 0;
  };
  $("#zero").click(clear);

  //Select the appropriate equation on pressing equals
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
      $("#screen").html(result); // have to have something for the this otherwise the error will pop up when you press equals.
    }
    else{
      alert("Error");
      $("#screen").html("0");
    }
    $("#screen").html(result);
    result = 0;
  });

  //append the button pressed to current display
  var app = function(){
    $("#screen").append($(this).html());
  };
  $('.numb').click(app);

  //calculation functions
  var addition = function(result, currentVal) {
    result = result+currentVal;
  };

  var subtraction = function(currentVal, currentVal) {
     result = result-currentVal;
  };

  var multiply = function(currentVal, currentVal) {
     result = result*currentVal;
  };

  var division = function(currentVal, currentVal) {
    result = result/currentVal;
  };
});
