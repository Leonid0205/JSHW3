// Task 1

function thirdDegree(number) {
    return number ** 3;
}
const third = (number) =>  number ** 3; 
console.log(`2^3 + 3^3 = ${thirdDegree(2) + third(3)}`);

// Task 2

const netSalary = (salary) => {
    console.log(`Net salary is ${salary * 0.87}`);
}
let salary = +prompt('Input your salary');
if (isNaN(salary)) {
    console.log('The salary you had inputed is not a number!');
} else {
    netSalary(salary)
}

// Task 3

function checkMaxNumber(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber >= secondNumber && firstNumber > thirdNumber) {
        console.log(`Max number is ${firstNumber}`);
    } else if (secondNumber > firstNumber && secondNumber >= thirdNumber) {
        console.log(`Max number is ${secondNumber}`);
    } else if (thirdNumber >= firstNumber && thirdNumber > secondNumber) {
        console.log(`Max number is ${thirdNumber}`);
    } else {console.log(`Max number is ${firstNumber}`);}
}
let firstNumber = +prompt('Input firstNumber');
let secondNumber = +prompt('Input firstNumber');
let thirdNumber = +prompt('Input firstNumber');
checkMaxNumber(firstNumber, secondNumber, thirdNumber);

// Task 4

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;
function difference(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    } else if (secondNumber > firstNumber) {
        return secondNumber - firstNumber
    } else return 0;
}
console.log(`4 + 5 = ${sum(4, 5)}; 3 * 3 = ${multiplication(3, 3)}; 8 / 4 = ${division(8, 4)}; 4 - 16 = ${difference(4, 16)}`);