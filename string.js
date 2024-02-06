
/* 

// --------- 19.1: Introduction to string and String VS Array 🔥
const country = 'Bangla desh';
const division = 'Rongpur';
const district = `Thakurgaon`;
const thana = new String('Pirganj');

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);
console.log(thana);

const numbers = [55, 88, 54, 98, 85];
console.log(numbers.length);
console.log(numbers[1]);
numbers[2] = 11;    
console.log(numbers);

console.log(country.length);   //  string length count space
console.log(country[1]);
country[2] = 'N';
console.log(country);    // string not changeable 
// ----> string is immutable ==> not changeable
// ----> array is mutable => you can change the array element




// --------- 19.2: String comparison Lowercase Uppercase and Trim 🔥
// 🔥 toLowercase():Converts all the alphabetic characters in a string to lowercase.
 // && 
// 🔥 toUpperCase(): Converts all the alphabetic characters in a string to uppercase.
const school = "RaJ Uk Uttara model school";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book =  "chemistry";

if(subject === book){
    console.log(" subject and book are OKAY");
}
else {
    console.log("subject and book are Not OK");
}

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Ssubject and book are OKAY");
}
else {
    console.log("subject and book are Not OK");
}



// 🔥 trim(): Removes the leading and trailing white space and line terminator characters from a string.
// (method) String.trim(): string
const drink = ' water';
const liquid = ' water ';

if (drink.trim() === liquid.trim()){
    console.log("Panir opor name jibon");
}




// --------- 19.3: String Slice, Join, Concat and Includes  🔥

// 🔥 slice(): Returns a section of a string.
// @param start — The index to the beginning of the specified portion of stringObj.

// @param end — The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.

const address = 'andorKilla';
// const slice = address.slice(2, 5);
// const slice = address.slice(2, 12);
const slice = address.slice(0, 5);
console.log(slice);

// 🔥 split(): Split a string into substrings using the specified separator and return them as an array.

// @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

// @param limit — A value used to limit the number of elements returned in the array.

const sentenceOne = "I am a good and hardworking person";
// console.log(sentence.split());
console.log(sentenceOne.split(""));
console.log(sentenceOne.split(" "));
console.log(sentenceOne.split("a"));
console.log(sentenceOne.split(" a "));


// --> split() method convert string to array
const friendStr = 'Rahim, karim, abbus, fahim, sohid';
const friends = friendStr.split(',');
console.log(friends);

// --> join() method convert array to string
const realFriend = [ 'Rahim', ' karim', ' abbus', ' fahim', ' sohid' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));



// 🔥 concat(): Returns a string that contains the concatenation of two or more strings.
// @param strings — The strings to append to the end of the string.

const first = 'Abid';
const last = 'Navid';

// const fullName = first + last;
const fullName = first + " " + last;
console.log(fullName);

const fullName2 = first.concat(' ').concat(last);

console.log(fullName2);


// 🔥 includes(): Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

// (method) String.includes(searchString: string, position?: number | undefined): boolean

const desh = "Bangladesh";
console.log(desh.includes('d'));
console.log(desh.includes('D'));

// 



// --------- 19.4: Reverse A string in three Different Ways 🔥
const sentence = "I am learning web Dev."

// solution-1:
let reverse = '';
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse ;
}
console.log(reverse);


// solution-2:
let revs = '';
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    const letter = sentence[i];
    revs = letter + revs;
}
console.log(revs);

// solution-3: shortcut
const reversed = sentence.split('').reverse().join("");

console.log(reversed);

*/ 

/***
 * A JavaScript string is zero or more characters written inside quotes.
 * JavaScript strings are used for storing and manipulating text.
 * You can use single or double quotes
 * Strings can be created as primitives, 
 * from string literals, or as objects, using the String() constructor
 * 
 * 
 * 
 * 
 *  



👉 How to find the length of a string
🙋‍♂️ String.prototype.length 🙋‍♂️
const myName = "Nasihul Nipun";
console.log(myName.length);

👉 Escape Character

let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

 * ***/ 




/*

// String Task not complete
//Task-1: Count how many times a string has the letter a
const str = "Bangladesh is beautiful country";

// ------ Way-1: -----
console.log(str.split('a').length -1);

// ------ Way-2: -----
let strSentence = "Bangladesh is beAutiful country";
let strLen = strSentence.length;

let count = 0;
for(var i = 0; i < strLen; i++){
    if(strSentence[i] == 'a'){
        count ++;
    }
}
console.log(count);

// Task-2: Count how many times a string has the letter a or A
let strSentence = "Bangladesh is beAutiful country";
let strLen = strSentence.length;

let count = 0;
for(var i = 0; i < strLen; i++){
    if(strSentence[i] == 'a' || strSentence[i] == 'A'){
        count ++;
    }
}
console.log(count);



// Task-3: Check whether a string contains all the vowels a, e, i, o, u 

let sentence = "Bangladesh is beautiful country";

let count = 0;
let vowels = "aeiou";

for (var i = 0; i <sentence.length; i++){
    if(vowels.indexOf(sentence[i]) > -1){
        count ++;
        console.log(`Index: ${i} | Letter: ${sentence[i]}`);
    }
}
console.log("Total vowel is: ", count);

*/ 
