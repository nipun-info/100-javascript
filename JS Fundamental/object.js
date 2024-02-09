/*****************************
 * Module-19
 * String and Objects
 * ****************************
 *


// --------- 19.5: Introduction To Objects Properties and values 🔥
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}
console.log(bottle);

console.log(typeof bottle);


// --------- 19.6: Multiple ways to Get and Set Object Properties 🔥
const person = {
    name: 'Najim Uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav place': ['cox-bazar', 'kuakata', 'Sajek velli'],
}

//dot notation
console.log(person.profession);
const income = person.salary;
console.log(income);
// console.log(person.fav place); // not supported dot notation; only supported bracket notation.


// bracket Notation
console.log(person['age']);
const personAge = person['age'];
console.log(personAge);

console.log(person["fav place"]);

// update value
person.salary = 30000;
person['age'] = 26;
person['fav place'] = ['maldives', 'Goa', 'bali']
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);


// --------- 19.7: Keys, Values, nested Objects and Delete 🔥
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp',
    unique: {
        color: 'Magenta'
    }
}

// keys
const keys = Object.keys(computer);
console.log(keys);

// values
const values = Object.values(computer)
console.log(values);


// nested object
console.log(computer.unique.color);

// delete
delete computer.price;
console.log(computer);



// --------- 19.8: Loop an object and ways to declare an object 🔥

const mobile = {
    brand : 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mgapexel'
}

for(const prop in mobile){
    // console.log(prop);
    console.log(mobile[prop]);
}

// for of : array
// for in : object

console.log(Object.keys(mobile));
const keysA = Object.keys(mobile);

for (const key of keysA){
    console.log(key);
}

//  ways to declare an object
const pen = {brand: 'econo', price: 10, color: 'black'}
const pencil = new Object();
const rubber = Object.create({})

var person = {}
person.name = "jhon";
person.age = 30;

console.log(person);




// ====== ******* Quiz-19: **********=====
// let str = "Mississippi"
// console.log(str.indexOf("i", 3));

const x = "";
if(!x.length) {
    console.log("Hey");
}else {
    console.log("Hi");
}

const str = "Hello";
str[0] = 'h';
console.log(str);


const mobile = {
    brand : 'samsung',
    price: 25000,
    color: 'black',

}

console.log(mobile.camera);

/ ====== Module-19 Task of Object ===========/
// Task-1: Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const goldenRod = colors['golden rod'];
console.log(goldenRod);



// Task-2: For this object below add a property named passenger capacity with value 5.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;

console.log(car);

// Task-3: Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);


// Task-4: Count the number of properties
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const keys = Object.keys(student).length;   // Way-1
// console.log(keys);

// here we are iterating over the user object
for(const values in student){
    if(student.hasOwnProperty(values)){
        console.log(`${values}: ${student[values]}`);
    }
}

var length = Object.values(student).length;  // Way-2
console.log(length);

// Note: Objects are collections of key-value pairs that have properties that are linked by their names. Understanding how to find the object's length is not a common and basic operation, but in order to avoid unnecessary bugs, it is essential to know how it can be done. There is no length property by default on the object. It is only available to arrays and strings that have the length property.


// Task-5(hard): Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

// Way-1:
for(const values in myObject){
    if(myObject.hasOwnProperty(values)){
        console.log(`key: ${values} | type: ${typeof myObject[values]}`) ;
    }
}

console.log("===========");

// Way-2:
for (let keys in myObject){
    console.log(`key: ${keys} | type: ${typeof myObject[keys]}`);
}

*/

