/*
// ****** JavaScript Array *****
// ****🔥 array length 🔥****
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



// 🔥 array push and pop method
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



// ----- ***🔥 array includes *** -----
const programLang = ["Java", "python", "HTML", "CSS", "JavaScript" ];
const numbers = [99, 88, 55, 80, 44, 66];

console.log(programLang.indexOf("JavaScript"));
console.log(programLang.indexOf("Javascript"));

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// (method) Array<string>.indexOf(searchElement: string, fromIndex?: number | undefined): number


// ----- ***🔥 isArray(): check is array or not  *** -----
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

//🔥 syntax: splice(start, deleteCount, addElement(element1, element2 ....))
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



// ------ 🔥🔥🔥--------- 🔥🔥🔥 ----------- 🔥🔥🔥 ---------

// --------- 19.5.1: Array Traversal Using for and while loop 🔥
/**
 * 1. for loop
 * 2. while loop
 * 3. do while loop
 * 4. for of ==> array loop korar jonno
 * 5. for in ==> object loop korar jonno
 
* */ 

/***
const legends = ['Elon Mask', "Bill Gates", "Steve Jobs", "Waren Baffet"];

for(let legend of legends ){
    console.log(legend);
}

for(let i = 0; i < 10; i++){
    console.log(i);
    console.log(legends[i]);
}

for(let i = 0; i < legends.length; i++){
    console.log(i , legends[i]);
}

let i = 0;
while(i < legends.length){
    console.log(i, legends[i]);
    i++;
}



// --------- 19.5.2: Reversing An Array with and Without Reverse Method 🔥
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);

// Notes: Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array. Reverse method change the original methods.

// Way-2:
let rev_numbers = [];

for(let num of numbers){
    // console.log(num);
    // rev_numbers.push(num);
    rev_numbers.unshift(num)
}

console.log(rev_numbers);
console.log(numbers);



// Way-3:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}

// console.log(reversed_numbers);

// Way-4:
const rev_numbs = [];
for (let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    rev_numbs.push(num);
}
console.log(rev_numbs);
***/ 
const legends = ['Elon Mask', "Bill Gates", "Steve Jobs", "Waren Baffet"];
// console.log(legends.reverse());

// --------- way-2 ---------
let legend_members = []
for (let legend of legends){
    // console.log(legend);
    // legend_members.push(legend)
    legend_members.unshift(legend)
}
console.log(legend_members);

// --------- way-3 ---------
let legend_members_rev = [];
for(let i = legends.length -1; i >= 0; i --){
    const legend = legends[i];
    // console.log(legend);
    legend_members_rev.push(legend);   
}
console.log(legend_members_rev);