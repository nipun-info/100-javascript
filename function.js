/**
 * Module- 20: Fundamentals of Functions
 * */ 

// 20.1: Function and Function Syntax

// function declaration
function fanOff(){
    console.log("Walk towards the switch");
    console.log("Click the switch to off of the Fan");
}

//call the function
fanOff();

//  20.2: Function Parameter, Handle Multiple Parameters

// example-1:
function square(number) {
    console.log('value of the number parameter: ', number);
    const sqr = number * number;
    console.log('Square of the given Number is: ', sqr);
}
square(4);
square(8);

// example-2:
function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 4, 5, 6);         // result: NaN 
addAll(3, 4, 5, 6, 8);      // 26


// 20.3: How Function Works and Argument Vs Parameters

// example -1:
function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log("I will call the function");
doubleIt(15);
console.log("-------------");
doubleIt(88);
console.log("-------------");
doubleIt(178);
const money = 112;
doubleIt(money);


// example -2:
function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}

let fatherAge = 40;
let myAge = 15;

difference(fatherAge, myAge);


// 20.4: Function Return and Set Return value to a variable

function tenimes(number){
    const result = number * 10;
    // return number;
    return result;
}

const output = tenimes(5);
console.log("Output: ", output);


function cutHalf(num){
    const half = num / 2;
    return half;
}

console.log(cutHalf(9));

// 20.5: Recap and conditional Return of odd and even
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const calc = doMath(10, 5);
console.log(calc);


// Conditional return
function isEven(number){
    if(number % 2 === 0){
        return true;
    }else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(110));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isOdd(11));


// 20.6: Different Types Of Parameters Of a Function

// for a given string tell me whether it has even number of characters or not.
// example-1:
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 ===0){
        console.log('even size');
    }else {
        console.log('Odd size');
    }
}

evenSizedString("dhaka");
evenSizedString("Bangladesh");

// example-2:

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));


// example-3:
function numberOfElments(number){
    const len = number.length;
    return len;
}

numberOfElments([12, 45, 78, 12125, 4, 8]);



// 20.7: Sum of All Numbers in An Array Using Function (‼️importent❣️)

/**
 * Objective: wrie a function to give me the sum of all numbers in an array
 * *******
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s) check, check whether parameter is passed in a proper format
 * do the function work(step by steps)
 * */

function sumOfNumbers(numbers) {
    //    console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;  
    }
    return sum;
}

const numbs = [54, 62, 12, 6]
const total = sumOfNumbers(numbs);
console.log('sum of numbers is', total);


// 20.8: Return All the even Numbers of an array (‼️importent❣️)
/**
 * create function that will return only the even numbers
 * and
 * return the sum of even numbers
 *  **/ 

function evenNumbersOnly(numbers){
    // return numbers;
    let evens = [];
    for(const number of numbers){
        if(number % 2 ===0){
            // console.log(number);
            evens.push(number);
        }        
    }
    return evens;
}

const numbers = [5, 8, 9, 62, 67, 6, 102, 85];
const evenNumbs =  evenNumbersOnly(numbers);
console.log('Even Numbers: ', evenNumbs);

// Example-2:
// return the sum of even numbers
function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum = sum + number
        }
    }
    return sum;
}

const sumEvenNumbs = sumOfEvenNumbers(numbers);
console.log('Sum of Even Numbers is: ', sumEvenNumbs);

/** Home work: solve this problem
 * create function that will return only the odd numbers
 * and
 * return the sum of odd numbers
 *  **/ 

const array = [52, 53, 54, 55, 56, 57, 58, 59];


// 20.9: Function Summary and Practice Tasks
// Task-1: Take four parameters. Multiply the four numbers and then return the result.

// Solution
function multiplyNumbers (a, b, c, d){
    multNumbs = a * b * c * d;
    return multNumbs;
}
console.log(multiplyNumbers(4, 5, 6, 7));

// Task-2: Take a number if the number is odd multiply it by 2 and return the result. It the number is even divide it by two and return the result.
// Solution
function resNumber(numbers){
    if(numbers % 2 ===1){
        return numbers * 2;
    }else {
        return numbers / 2
    }
}

console.log(resNumber(25));
console.log(resNumber(38));

// Task-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

const arrayAvg = [52, 53, 54, 55, 56, 57, 58, 59];

function make_avg(numbers) {
    let sum = 0;
      
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

const sumOfNumbers = make_avg(arrayAvg);
const arrLen = arrayAvg.length;
const arrAvg = sumOfNumbers / arrLen;

console.log(sumOfNumbers);
console.log(arrLen);
console.log(arrAvg);

// Task-4: Write a function called count_zero() which will take a binary string (Binaru string is a string which is consist of only 0 and 1) as parameter and count how many 0's are there in that string.

const binary_str = '11001010010';
function count_zero(str){
    let zeroCount = [];
    for(let strCount of str){
        if(strCount === "0"){
           zeroCount.push(strCount);
        }
    }
    return zeroCount;
}

const binaryResult = count_zero(binary_str);
console.log(binaryResult);
console.log('Total Zero Counts: ', binaryResult.length);

// Task-5:  Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(number){
    if(number % 2 === 0){
        return "Even";
    }
    return "Odd";
}

console.log(odd_even(4));
console.log(odd_even(5));
