/*  ******* Module 17 **********
* COMPARISON Operator
    * 1. greater: >
    * 2. less: <
    * 3. equal: ==
    * 4. greater than or equal: >=
    * 5. less than or equal: <=
    * 6. not equal: !=
    *
    * -----------------------
    7. and: &&
    8. or: ||

console.log(5 >= 10);
console.log(15 >= 10);

console.log(10 == '10');
console.log(10 === '10');
//-------------------------
console.log(10 != '10');
console.log(10 !== '10');

*/
// ----------* Introduction to If Else Condition *---------
/*

If statement:The if statement executes a statement if a specified condition is truthy.
if(true){
    console.log("Code to be executed!!");
}

if(false){
    console.log("Code don't be executed!!");
}

if(13 < 10){
    console.log('I jave a smaller value');
}

// ------------- * else statement * -------------
If the condition is falsy, else statement is executed.
if (5>8){
    console.log("5 is grater than three");
}else{
    console.log("5 is not grater than eight");
}

// --------- * Multiple Condition Logical Operators * ----------
const salary = 25000;
const isBCS = true;
const height = 61;

if(salary > 20000 && height > 66){
    console.log("You are selected!!!");
}else {
    console.log("You are not selected!!!");
}

// -------- * Multi level if-else if-else Condition * --------------
// --- Example-01
const price = 2000;
if(price >= 5000){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500){
    // 5% discount
    const discount = price - 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}
// --- Exam -02:
const age = 55;
const price = 500;
 if (age <= 12){
    console.log('You can eat for free');
 }else if (age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
 else if (age >= 50){
    // 25% discount
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
 else {
    console.log(price);
 }

 // -------- * Nested If-else condition * -------------
const money = 50;
if ( money > 300){
    console.log("Vi You are rich!!");
}else {
    if(money > 100){
        console.log('Your amount has 100');
    }else {
        if (money > 0){
            console.log("You have under 100 money");
        }else {
            console.log('You are minus person');
        }
    }
}
// ------ * if-else shorthand Ternary Operator * -------
// ==== exam-01: ====
const age = 12;
if (age >= 18){
    console.log('you can vote');
}else {
    console.log('You can not vote ');
}

// shorthand:
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// ==== exam-02: ====
let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}else {
    price = price + 100;
}

// console.log(price);

// short-hand
price = isLeader === true ? 0 : price + 100;

console.log(price);


// ------- Logical Not Operator --------
const isLeader = true;
if(isLeader){
    console.log("leader come in !!  ");
}
else {
    console.log(" Any body cann't entry");
}

const isPassed = false;
// if(isPassed === false)
if(!isPassed){
    console.log("You cann't Certificate");
}
else {
    console.log("You get Certificate");
}

// Note:
    - Negation Operator
    - Logical complement
    - Flips the value of a boolean
    - If the value is true, returns false
    - If the value is false, returns true
    - Logical Not is also used with non-Boolean values

// Conditional Statement
let isLogged = false;

if(!isLogged) {
    console.log("User is not logged in");
}

// Toggling Boolean Values
let isEnabled = true;
isEnabled = !isEnabled;

console.log(isEnabled);

// Checking for Falsy Values
let inputValue = null;

if(!inputValue){
    console.log("Input value is falsy!");
}

// Checking for Truthy Values
let userInput = "SomeValue";

if(!userInput){
    console.log("User input is empty");
}else {
    console.log("user input is: " + userInput);
}

// Double Not forcefully converts any value to the corresponding boolean value (true or false) 

*/

/* JS Condition Tasks
    Task-1: Free Drinks
    - Burger More than 500tk: Free coke
    - Else Coke: 30tk

    // Task-1 Solution:
    let burgerPrice = 550;
    if (burgerPrice >= 500) {
        console.log("You get Free coke.");
    }
    else {
        console.log(" You buy coke 30 taka");
    }

    Task-2: BMI Calculator and Health Category
    Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

        - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
        - BMI < 18.5, you are underweight.
        - BMI >= 18.5 and BMI <=24.9, you are normal.
        - BMI >=25 and BMI <= 29.9, you are overweight.
        - Otherwise, you are obese.
    // Task-2 Solution:

    // let bmi = weight / (height * height);
    let bmi = 23.5;
    if(bmi < 18.5){
        console.log("You are underweight.");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("You are normal");
    }
    else if (bmi >= 25 && bmi <= 29.9){
        console.log("You are overweight.");
    }else {
        console.log("You are obese.");
    }

    Task-3: Grade Calculator
    Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

        A: 90-100
        B: 80-89
        C: 70-79
        D: 60-69
        F: 0-59


    // Solution Task-3:
    let grade = 45;
    if(grade >=  90 && grade <= 100 ){
        console.log("You Got A++ ");
    }
    else if(grade >= 80 && grade <= 89){
        console.log("You Got A+ ");
    }
    else if(grade >= 70 && grade <= 79){
        console.log("You Got A ");
    }
    else if(grade >= 60 && grade <= 69){
        console.log("You Got B ");
    }
    else if(grade >= 0 && grade <= 59){
        console.log("You are passed ");
    }

    Task-4:
    if you get more then 80 then inside your friend score. 
        If your friend get more than 80. then go for a lunch. 
        if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
        if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
        if your friend get less than 40, block your friend
        if you get less than 80 go to home and sleep and act sad

    Note:  use nested if-else-if-else

    // Solution Task-4:
    let score = 38;
    if (score > 80){
        console.log("Go to lunch");
    } else {
        if(score >= 60) {
            console.log("Good Luck Next time");
        }else{
            if(score >= 40){
                console.log("Friends message unseen");
            }else {
                console.log("block your friends");
            }
        }
    }

*/

/* 
// ****** JavaScript Array *****
// **** array length ****
const numbers = [99, 88, 55, 80, 44, 66];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(numbers);
console.log("Array length:- " + numbers.length);
console.log(fruits);
console.log("Array length:- " + fruits.length);

// Array Methods
// push(): add elements to the end of your array effortlessly.
// pop(): Say goodbye to the last element with style.
// shift(): Bid farewell to the first element gracefully.
// unshift(): Welcome new elements to the beginning seamlessly.

// array push and pop method
const numbers = [99, 88, 55, 80, 44, 66];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(numbers);
console.log(fruits);

console.log("----- push -----");

numbers.push(100);
console.log(numbers);
fruits.push("Grape");
console.log(fruits);

console.log("----- pop -----");

numbers.pop();
console.log(numbers);
fruits.pop();
console.log(fruits);

// array shift and unshift
fruits.shift()



// ----- *** array includes *** -----
const programLang = ["Java", "python", "HTML", "CSS", "JavaScript" ];
const numbers = [99, 88, 55, 80, 44, 66];

console.log(programLang.includes("java"));
console.log(programLang.includes("Java"));

console.log(numbers.includes(99));
console.log(numbers.includes(909));

// The includes() method returns true if an array contains a specified value
// Determines whether an array includes a certain element, returning true or false as appropriate.

// Array<string>.includes(searchElement: string, fromIndex?: number | undefined): boolean

// more example:
if(programLang.includes("JavaScript")){
    console.log("learn Now");
}else {
    console.log("learn later");
}



// ----- *** array includes *** -----
const programLang = ["Java", "python", "HTML", "CSS", "JavaScript" ];
const numbers = [99, 88, 55, 80, 44, 66];

console.log(programLang.indexOf("JavaScript"));
console.log(programLang.indexOf("Javascript"));

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// (method) Array<string>.indexOf(searchElement: string, fromIndex?: number | undefined): number


// ----- *** isArray(): check is array or not  *** -----
const programLang = ["Java", "python", "HTML", "CSS", "JavaScript" ];
const numbers = [99, 88, 55, 80, 44, 66];
const arrOne = [];
const str = "Bangladesh is a beautiful country";

console.log(Array.isArray(programLang));
console.log(Array.isArray(arrOne));
console.log(Array.isArray(str));



// ----- *** array concat()  *** -----
// 🔥Merging (Concatenating) Arrays: 
// The concat() method creates a new array by merging existing arrays. The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];


const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


// ----- 🔥 array join()  🔥 -----
const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
console.log(fruits); 
console.log(fruits.join("-"));
console.log(fruits.join(""));
console.log(fruits.join("*"));



// ----- 🔥 array toString()  🔥 -----
// JavaScript method toString() converts an array to a string of array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.toString());



// ----- 🔥 array slice()  🔥 -----
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// slice() method slices out a piece of an array into a new array. 
// slice() method creates a new array.
// slice() method does not remove any elements from the source array.

const fruits = ["Banana", "Orange", "Apple", "Mango", "Grape", "Straw berry"]; 
console.log(fruits.slice(1));
console.log(fruits.slice(1,2));
console.log(fruits.slice(2));
console.log(fruits.slice(2, 5));

console.log(fruits);



// ----- 🔥 array splice()  🔥 -----
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Grape", "Straw berry"]; 
console.log(fruits);

// console.log(fruits.splice());       //return empty array
// console.log(fruits.splice(2));
console.log(fruits.splice(2, 0, "Coco-nut", "Guava" ));
console.log(fruits);

*/


/*

task-1: Declare an array
    - Declare an array with 5 elements containing fruits
    - console log the 3rd index element
    - change the value of the 2nd index element to jambura
    - console log the final array

task-2: Add or remove elements
    - Declare an array of 3 tourist destinations
    - Add a new tourist destination to your tourist array
    - Add two more to your array
    - Remove the last tourist destination you have added
    - display the final array as output

task-3: Checking Array Membership with ‘includes’
    Instructions:
    - Create an array of books containing different book.
    - Use the includes method to check if the array contains a javascript book.
    - Print a message to the console indicating whether the element is present in the array or not.

task-4: Checking if it's an Array
    Instructions:
    - Create different variables, each containing either an array or a non-array value.
    - Now use isArray to check if each variable is an array.
    - Print a message to the console indicating whether each variable is an array or not.

task-5: Combining Arrays
    Instructions:

    - Create two arrays of your choice.
    - Use the concat method to combine the two arrays into a new array.
    - Print both the original arrays and the combined array using console.log().

//-------------------------- Solution of Task Array -----------------------------------
 
// Solution task-1:
    const fruits = ["apple", "banana", "Coconut", "lemon", "Orange" ];
    console.log(fruits);
    console.log(fruits[2]);
    console.log(fruits[1] = "Kiwi");
    console.log(fruits);

// Solution task-2:
    const touristPlace = ["Kashmir", "Cox-Bazar", "London", "New York", "Tajmohol"];
    console.log(touristPlace);
    touristPlace.push("Sain-martin");
    console.log(touristPlace);

    touristPlace.pop();
    console.log(touristPlace);

// Solution task-3:
    const books = ["Holy Quran", "Harry Potter", "The Alchemist", "The Biography", "Trust"];

    console.log(books.includes("Holy Quran"));
    console.log(books.includes("Harry potter"));

// Solution task-4:
    const subject = ["English", "Bengli", "CSE", "Sociology"];
    const score = [99, 42, 87, 82,];
    const empty = [];
    const qoute = " “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” ";

    const fruit = '';
    let result;

    console.log(Array.isArray(subject));
    console.log(Array.isArray(score));
    console.log(Array.isArray(empty));
    console.log(Array.isArray(qoute));
    console.log(Array.isArray(fruit));
    console.log(Array.isArray(result));

// Solution task-5:
    const fruits = ["Apple", "Orange", "Kiwi"];
    const fruitsTwo = ["Banana", "Lemon", "Guava"];

    const concatFruits = fruits.concat(fruitsTwo);

    console.log(concatFruits);

*/

// -----***** 🔥 Module-18: JS Loop  🔥 *****-----




















