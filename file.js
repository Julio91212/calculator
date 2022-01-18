const numbers = []
let num1 = ""
let num2 = ""
let operator = ""
//populate number that is clicked and return value
const Num = document.querySelectorAll("button.number");
Num.forEach(button => 
  button.addEventListener("click", () => addNum(button.innerHTML)))

function addNum(number) {
  const result = document.querySelector("div.result");
  if (operator == "") {num1 += number, result.textContent = num1 }
  else if (operator !== "") {
    num2 += number,
    result.textContent = num2
  }
  else { error }
}
//populate operator that is called and return value for future use
const op = document.querySelectorAll("button.operator");
op.forEach(button => button.addEventListener("click", function () {
  const result = document.querySelector("div.result");
  //return value of operator selected
  if (num2 !== "") {operate(numbers, operator) }
  else if (button.innerHTML == "+") { operator = "add", result.textContent=button.innerHTML }
  else if (button.innerHTML == "-") { operator = "subtract", result.textContent=button.innerHTML }
  else if (button.innerHTML == "*") { operator = "multiply", result.textContent=button.innerHTML }
  else if (button.innerHTML == "/") { operator = "divide", result.textContent=button.innerHTML }
  else operator = ""
}))
// operate if user presses equals
const equals = document.querySelector("button.equals");
equals.addEventListener("click", function () { operate(numbers, operator) }
)

//add function
function add(x, y) {
  if ((x + y) % 1 == 0) { return x + y }
  else { return (x + y).toFixed(2) };
}
//subtract function
function subtract(x, y) {
  if ((x - y) % 1 == 0) { return x - y }
  else { return (x - y).toFixed(2) };
}
//multiply function
function multiply(x, y) {
  if ((x * y) % 1 == 0) { return x * y }
  else { return (x * y).toFixed(2) };
}
//divide function
function divide(x, y) {
  if (y != 0 && ((x / y) % 1 == 0)) {
    return (x / y)}
    else if (y != 0) {
    return (x / y).toFixed(2);
  }
  else { return "wooooow, really?" }
}
//operate based on two values and a selected operator
const operate = function () {
  numbers.push(parseFloat(num1));
  numbers.push(parseFloat(num2));
  console.table(numbers)
  const result = document.querySelector("div.result");
  const Num = document.querySelectorAll("button.number");
  console.table(numbers)
  console.log(operator)
  if (operator == "add") {
    result.textContent = add((numbers.slice(-2, -1)[0]), numbers.slice(-1)[0]),
    numbers.push(parseFloat(result.textContent))
  }
  else if (operator == "subtract") {
    result.textContent = subtract(numbers.slice(-2, -1)[0], numbers.slice(-1)[0]),
    numbers.push(parseFloat(result.textContent))
  }
  else if (operator == "multiply") {
    result.textContent = multiply(numbers.slice(-2, -1)[0], numbers.slice(-1)[0]),
    numbers.push(parseFloat(result.textContent))
  }
  else if (operator == "divide") {
    result.textContent = divide(numbers.slice(-2, -1)[0], numbers.slice(-1)[0]),
    numbers.push(parseFloat(result.textContent))
  }
  else { result.textContent = 0 }
  num1 = numbers.slice(-1)[0]
  num2 = ""
  console.table(numbers)
}
//clear button
const clear = document.querySelector("button.clear");
clear.addEventListener("click", function () {
  const result = document.querySelector("div.result");
  result.textContent = "0"
  operator = ""
  num2 = ""
  num1 = ""
  while (numbers.length > 0)
    numbers.pop()
})
const decimal = document.querySelector("button.point");
decimal.addEventListener ("click", function (){
  const result = document.querySelector("div.result");
  let screen = result.textContent;
if (screen.includes(".")==true) {return}
  else if (operator !=="" && num2=="") {num2 += "0.", result.textContent = num2}
  else if (operator !=="") {num2 += ".", result.textContent = num2}
  else if (num1 =="") {num1 += "0.", result.textContent = num1}
  else {num1 +=".", result.textContent=num1}
})
const del = document.querySelector("button.delete");
del.addEventListener ("click", function (){
  const result = document.querySelector("div.result");
  result.textContent = result.textContent.toString()
  .slice(0,-1)
  if (num2 == "" && operator == "") {num1 = num1.slice(0,-1)}
  else if (num2 == "") {operator =""}
  else {num2 = num2.slice(0,-1)}
})
