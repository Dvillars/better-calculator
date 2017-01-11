var plus = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("#multiply").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = multiply(number1, number2);
      $("#output").text(result);
    });
  });

  $("#plus").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = plus(number1, number2);
      $("#output").text(result);
    });
  });

  $("#subtract").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = subtract(number1, number2);
      $("#output").text(result);
    });
  });

  $("#divide").click(function(){
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var result = divide(number1, number2);
      $("#output").text(result);
    });
  });

});
