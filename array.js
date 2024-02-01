

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