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
    var action;
    $("#multiply").mouseenter(function(){
      action = 'multiply'
    });
    $("#plus").mouseenter(function(){
      action = 'plus'
    });
    $("#subtract").mouseenter(function(){
      action = 'subtract'
    });
    $("#divide").mouseenter(function(){
      action = 'divide'
    });
    $("form").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      if (action === 'multiply') {
        var result = multiply(number1, number2);
        $("#output").text(result);
      } else if (action === 'plus') {
        var result = plus(number1, number2);
        $("#output").text(result);
      } else if (action === 'subtract') {
        var result = subtract(number1, number2);
        $("#output").text(result);
      } else if (action === 'divide') {
        var result = divide(number1, number2);
        $("#output").text(result);
      } else {
        console.log('Darn  theres an error')
      }
    });
  });


// $(document).ready(function() {
//   $("#multiply").click(function(){
//     $("form").submit(function(event) {
//       event.preventDefault();
//       var number1 = parseInt($("#num1").val());
//       var number2 = parseInt($("#num2").val());
//       var result = multiply(number1, number2);
//       $("#output").text(result);
//     });
//   });
//
//   $("#plus").click(function(){
//     $("form").submit(function(event) {
//       event.preventDefault();
//       var number1 = parseInt($("#num1").val());
//       var number2 = parseInt($("#num2").val());
//       var result = plus(number1, number2);
//       $("#output").text(result);
//     });
//   });
//
//   $("#subtract").click(function(){
//     $("form").submit(function(event) {
//       event.preventDefault();
//       var number1 = parseInt($("#num1").val());
//       var number2 = parseInt($("#num2").val());
//       var result = subtract(number1, number2);
//       $("#output").text(result);
//     });
//   });
//
//   $("#divide").click(function(){
//     $("form").submit(function(event) {
//       event.preventDefault();
//       var number1 = parseInt($("#num1").val());
//       var number2 = parseInt($("#num2").val());
//       var result = divide(number1, number2);
//       $("#output").text(result);
//     });
//   });

//});
