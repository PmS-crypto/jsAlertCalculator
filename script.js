var op = prompt("Enter operation (+, -, *, /)");

if (op != "+" && op != "-" && op != "/" && op != "*") {
  document.write("invalid operation(please try again!!)");
} else {
  var firstNumber = prompt("Enter first number");
  var secondNumber = prompt("Enter second number");

  if (op == "+") {
    document.write(+firstNumber + +secondNumber);
  } 
else if (op == "-") {
    document.write(+firstNumber - +secondNumber);
  } 
else if (op == "*") {
    document.write(+firstNumber * +secondNumber);
  }
 else if (op == "/") {
    document.write(+firstNumber / +secondNumber);
  }
}
