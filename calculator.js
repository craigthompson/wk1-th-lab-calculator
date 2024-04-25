function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function sqrt(num) {
  return Math.sqrt(num);
}

function factorial(num) {
  if (num >= 1) {
    let answer = num;
    for (let i = num - 1; i > 0; i--) {
      answer *= i;
    }
    return answer;
  } else {
    alert(
      `Invalid input. "${num}" needs to be a number greater than or equal to 1.`
    );
  }
}

// Calculation Function
function calculate(expression) {
  const tokenizedString = expression.split(" ");
  console.log(tokenizedString);

  let operator;
  let num1;
  let num2;

  if (tokenizedString.length === 3) {
    operator = tokenizedString[1];
    num1 = Number(tokenizedString[0]);
    num2 = Number(tokenizedString[2]);
  } else if (tokenizedString.length === 2) {
    operator = tokenizedString[0];
    num1 = Number(tokenizedString[1]);
  } else {
    alert(`Invalid input, please try again.`);
    return undefined;
  }

  if (Number.isNaN(num1)) {
    alert(`Invalid input. Please enter numbers for the calculator.`);
    return undefined;
  } else if (Number.isNaN(num2)) {
    alert(`Invalid input, please try again.`);
    return undefined;
  }

  console.log("Operation: ", operator);
  console.log("num1: ", num1);
  console.log("num2: ", num2);

  let answer;
  if (operator === "+") {
    answer = add(num1, num2);
  } else if (operator === "-") {
    answer = subtract(num1, num2);
  } else if (operator === "*") {
    answer = multiply(num1, num2);
  } else if (operator === "/") {
    answer = divide(num1, num2);
  } else if (operator === "^") {
    answer = power(num1, num2);
  } else if (operator === "%") {
    answer = mod(num1, num2);
  } else if (operator === "sqrt") {
    answer = sqrt(num1);
  } else if (operator === "!") {
    answer = factorial(num1);
  } else {
    answer = undefined;
  }

  console.log(answer);
  return answer;
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector("#submitButton").addEventListener("click", () => {
  const result = calculate(document.querySelector("#expression").value);
  if (result !== undefined) {
    document.querySelector("#answer").innerText = result;
  }
});
