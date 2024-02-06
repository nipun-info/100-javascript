/*

// M-22.1: Can You find out who will Get the delicious Cake?

// example-1:
// inside a function
function getMax(num1, num2){
    if (num1>num2){
        return num1;
    }else {
        return num2;
    }
}
// console.log(getMax(98, 95));

const max1 = getMax(58, 92);
const max2 = getMax(62, 153);
const ultimateMax = getMax(max1, max2);

console.log('max of two is: ', ultimateMax);


// Example-2: maximum three three numbers
const jim = 80;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('Jim is the ulimate boss');
}
else if( tim > jim && tim> kim){
    console.log('Tim is the boss');
}else {
    console.log('kim is the boss now');
}


// Example-3: maximum three three numbers using function

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

const maxThreeNum = maxOfThree(25, 29, 11);
console.log("The maxium number is: ", maxThreeNum);

// Check max number of many numbers
const max = Math.max(12, 125, 1, 28, 590, 58);
console.log('max number is: ', max);



// M-22.2: Who is the talles? Find the max Number in an array
const height = [25, 68, 85, 32, 28, 54];

function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const maxOfArray = getMax(height);
console.log("Max value is: ", maxOfArray);

// homework: min number find an array



// M-22.3: Use add and multiplication to calculate wood requirements

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood =  woodQuantity(1, 1, 4);
console.log('wood needed', wood);


    // home work:
    // shirt price -> 500
    // pant price -> 300
    // shoe price -> 900



// M-22.4: Find the cheapest phone from an array and phone objects

const prices = [20000, 16000, 50000, 12000, 35000, 28000];

function getMin(numbers){
    let min =  numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log("The cheapes on is: ", cheap);


// object:
const phones = [
    {
        name: 'Samsung', price: 20000, camera: '12mp', color: 'black'
    },
    {
        name: 'Xoami', price: 12000, camera: '12mp', color: 'black'
    },
    {
        name: 'Oppo', price: 23000, camera: '12mp', color: 'black'
    },
    {
        name: 'Iphone', price: 80000, camera: '12mp', color: 'black'
    },
    {
        name: 'Symphone', price: 10000, camera: '12mp', color: 'black'
    }
]  

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheapestPhone = getCheapestPhone(phones);
console.log('Cheapest phone price is: ', cheapestPhone);


// M-22.5: Calculate The Total cost of the products in a shopping cart

// Example-1:
const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'watch', price: 600},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const totalPrice =  getShoppingTotal(products);
console.log('Total Price', totalPrice);



// Example-2: Calculate The Total cost of the products in a shopping cart with quantity

const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'chiruni', price: 100, quantity: 5},
    {name: 'shirt', price: 700, quantity: 2},
    {name: 'watch', price: 600, quantity: 1},
    {name: 'books', price: 200, quantity: 4},
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price * product.quantity;
    }
    return total;
}

const shoppingTotal = cartTotal(products);
console.log("Total Amount of Shopping: ", shoppingTotal);



// M-22.6: Multi-Layer Discount Price Calculation

// Example-2:  Discount price 
//  * upto 100: ->100
//  * more than 101-200 -> 90
//  * more than 200: -> 70
 

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }else {
        const total = quantity * 70;
        return total;
    }
}

const total = discountPrice(195)
console.log('Total Price: ', total);

// Example-2: multi-Layer Discount
//  * first100 --> 100
//  * 101To200 --> 90
//  * above200 --> 70

function layerDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const discountTotal = layerDiscountedTotal(250);
console.log(discountTotal);



// M-22.7: Simple Calculator to call function inside a function

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 - num2;
}

function calculator(a, b, operation){
    if (operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else {
        return 'Invalid Operation';
    }
}

const result = calculator(5, 7, 'add');
console.log(result);


 

// M-22.8: Handle Unexpected function input parameter error ???

// Example-1: Number validation
function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide a number";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 7);

console.log(result);

// Example-2: string validation
function fullName(first, second){
    if(typeof first !== 'string'){
        return 'first name should be a string.';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

// const fullPerson = fullName("Nipun", "Shah" );
const fullPerson = fullName("Nipun", 10 );
console.log(fullPerson);

// Example-3: Object validation
function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object!';
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name: 'shirt', price:35, color: 'blue'});
const price = getPrice(35);

console.log(price);

// Example-4: Array validation
function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array!!'
    }
    const second = numbers[1];
    return second;
}
const second = getSecond(45);
// const second = getSecond([45, 6, 28]);
console.log(second);

*/



/**
 * 
 * Reward Videos Module-22 for JavaScript
 * 
 * 
*/
// Problem-1: solving algorithom step by step
// 1. function will recive a parameter which will be number
// 2. Convert the number to cube
// 3. return the result
// 4. return error message if we get other data types instead of number.


// make cube of a provided number
function cubeNumber(number) {
    // return error message if we get other data types instead of number.
    if (typeof number !== "number") {
        return "please provide a number"
    }
    // convert the number to cube.
    const result = Math.pow(number, 3);
    // return the result
    return result;
}

console.log(cubeNumber(3));
/**
 * Problem-2: solving algorithom step by step
 * We will write a function named as "matchFinder()" which will take two input
 * will try two find match between the two strings.
 * return true/false based on the match.
 * return error message if the parameters are not string
 * */ 

function matchFinder(string1, string2){
    // return error message if the parameter are not strings
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please specify strings as input parameter";
    }
    // will try two find match between the two strings.
    const result = string1.includes(string2);
    // return true/false based on the match
    return result;
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("John Doe", false));


// Problem-3: solving algorithom step by step
/**
 * make a function name as sortMarker(), which will take an array as input
 * access the element of the input array
 * if array is positive number, then return ascending order
 * if elements are equal, than return "equal"
 * if elements are not equal, then return in descending order
 * if any elements is negative return "Invalid Input"
 * 

// make a function name as sortMarker()

function sortMarker(arr){
    //access the elements of the input array
    const [a, b] = arr;

    // if any elements is negative return "Invalid Input"
    if(a < 0 || b < 0){
        return "Invalid Input";
    }
       
    // if elements are equal, then return "equal";
    if(a == b){
        return "equal"
    }

    // if array is positive number, then return ascending order
    if(a > b){
        return [a, b];
    }else {
        return[b, a]
    }

}

console.log(sortMarker([1, 2]));
console.log(sortMarker([4, 2]));
console.log(sortMarker([4, 4]));
console.log(sortMarker([-4, 4]));
 */

// Problem-4: solving algorithom step by step
/**
 * define a function named as "findAddress()" which will take an object as input
 * access the element of the object
 * return the first output sample
 * if missing any property then replace __
 * 
 

// define a function named as "findAddress()" which will take an object as input
function findAddress(obj){
    // acces the element of the object and replace te missing property with __
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    // return the first output sample

    const str = street + ", "+ house + ", " + society;
    return str;
}

console.log(findAddress({street: 10, house:"15A", society:"Earth Perfect"}));
console.log(findAddress({street: 10, house:"15A"}));
console.log(findAddress({ house:"15A"}));

*/

// Problem-5: solving algorithom step by step
/**
 * make a function named as canPay(), this will take two input parameters
 * make sum of all the elements of an array
 * if the sum is greater than equal second input parameter, return true else return false
 * if first input is an empty array, return error message (bonus)
 * 

// Make a function named as canPay(), this will take two input parameters
function canPay(changeArray, totalDue) {
    // if first input is an empty array, return error message (bonus)
    if(changeArray.length == 0){
        return "Your array is empty!";
    }

    // make sum of all the elements of an array
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        // sum = sum + changeArray[i];
        const element = changeArray[i];
        sum += element;
    }
    
    // if the sum is greater than equal second input parameter, return true else return false

    if(sum >= totalDue){
        return true;
    }else {
        return false;
    } 
}

console.log(canPay([1, 2, 5], 10));
console.log(canPay([], 10));

*/

/******** Conceptual Sessions *******/
/* 

// example-1: 
function printDetails(name, age, address){
    console.log(`My name is ${name}. My age is ${age}. I live in ${address}`);
}
printDetails("Nipun", 40, "Dinajpur");

// example-2: check if the number is even or odd
function checkEvenOdd(x){
    if(x % 2 === 0){
        // console.log("Even");
        return "Even";
    }else {
        // console.log("Odd");
        return "Odd";
    }
}

const result = checkEvenOdd(5);
console.log(result);

checkEvenOdd(37);

// example-3: Print your name 10 Times
function printName(x){
    for(let i = 1; i<=x; i++ ){
        console.log("Naihul is nipun");
    }
}

printName(10);



// example-3: Validation check 
function details(info){
    if(typeof info !== "object"){
        return 'Input should be an object!';
    }
    else if(info.name || info.age){
        return 'Object must contain name and age property';
    }
    else if( typeof info.name !== "string" || typeof info.age !== "number"){
        return "name should be string, age should be a number!!"
    }else if (info.age <= 0){
        return "Age should be a positiove number!"
    }

    return `My name is : ${info.name} and my age is ${info.age}`;
}

// console.log(details({name: "Nipun", age:26}));
// console.log(details({name: "nipun"}));



// 07:00am - 02:30pm => 05:00Hours
// 08:00pm - 12:00am => 03:00Hours

// example-4: find largest value
const numbers = [3, 12, 4, 0, 53, 6, 8, true];
function findLargest(values){
    if(!Array.isArray(values)){
        return "Provide an array"
    }

    let max = values[0];
    for(let i = 1; i <values.length; i++){
        if(typeof values[i] !== "number"){
            return "All values should be number"
        }

        if(values[i] > max){
            max = values[i];
        }
    }
    return max;
}

console.log(findLargest(numbers));

*/

// ===========  problem solving ============
// ১. [ ফাংশন নেম দিতে হবে AnaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (Ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।

function AnaToVori(Ana) {
    // validation
    if (typeof Ana !== 'number' || Ana < 0) {
        return "Please provide a valid integar number!"
    }

    const Vori = Ana * 0.0625;
    return Vori;
}

console.log(AnaToVori("16"));



/*
২. [ ফাংশন নেম দিতে হবে PandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।
    ১ টি সিঙ্গারা এর দাম - ৭ টাকা
    ১ টি সমুচা এর দাম - ১০ টাকা
    ১ টি জিলাপি এর দাম - ১৫ টাকা
এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।


function PandaCost(singara, samucha, jilapi) {
    if (typeof singara !== "number" || typeof samucha !== "number" || typeof jilapi !== "number") 
    {
        return "Please provide valid interger numbers"
    }
    else if (singara < 0 || samucha < 0 || jilapi < 0 ){
        return "All parameters should be positive numbers"
    }

    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total = singara * singaraPrice + samucha * samuchaPrice + jilapi * jilapiPrice;
    return total;
}

console.log(PandaCost(1, 1, 1));

*/

/*
৩. [ ফাংশন নেম দিতে হবে PicnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা।

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে।

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এ বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে।

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তা প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।
*/
function PicnicBudget(perticipents) {
    if (typeof perticipents !== "number" || perticipents < 0) {
        return "Perticipents should be a valid positive number."
    } else {
        let first100Cost = 0;
        let second101To200Cost = 0;
        let remainingCost = 0;

        if (perticipents <= 100) {
            first100Cost = perticipents * 5000;
            return first100Cost;
        }
        else if (perticipents > 101 && perticipents <= 200) {
            first100Cost = 5000 * 100;
            second101To200Cost = (perticipents - 100) * 4000;
            totalCost = first100Cost + second101To200Cost;
            return totalCost;
        }
        else {
            first100Cost = 100 * 5000;
            second101To200Cost = 100 * 4000;
            remainingCost = (perticipents - 200) * 3000;
            totalCost = first100Cost + second101To200Cost + remainingCost;
            return totalCost;
        }
    }
}

console.log(PicnicBudget(-5));


