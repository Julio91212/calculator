
const add = function (x, y) {
    return x + y
  };
  
  const subtract = function (x, y) {
    return x - y
  };
  
  const sum = function (array) {
    return array.reduce((total, number) => total + number, 0);
  
  };
  
  const multiply = function (array) {
    return array.reduce((total, number) => total * number, 1);
  };

  const divide = function (array) {
    return array.reduce((total, number) => total / number, 1);
  };
  
  const operate = function (operator, x, y) {
    if (operator = "add") {add(x,y)} 
    else if (operator="subtract") {subtract(x,y)} 
    else if (operator="multiply") {multiply(x,y)} 
    else if (operator="divide") {divide(x,y)} 
    else {return "error"}
  }