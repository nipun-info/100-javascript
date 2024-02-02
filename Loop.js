
/*
// -----***** 🔥 Module-18: JS Loop  🔥 *****-----

// ------ Explore for of loop
const fruits = ["Apple", "Orange", "Kiwi", "lemon"];

for(let fruit of fruits){
    console.log(fruit);
}



// ------- Introduction to While Loop
const number = 7;
if(number < 9){
    console.log('small number found ');
}
console.log("Something new is cooking");

// ------- while loop

let num = 0;            // loop variable
while(num < 5){         // loop condition
    console.log(num);   // loop statement
    num++;              // loop variable change
}


let num = 0;
while(num < 5){
    console.log('looping ', num);
    // num = num + 1;
    // num += 1;
    num++
}


let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    sum = sum  + num;
    console.log('sum: ', sum);
    num ++;
}
console.log('Total : ', sum);


// exam-3:
let num  = 1;
while(num <= 10){
    console.log(num);
    num++;

    if(num % 2 === 0){
        console.log('even Number', num);
    }
}



// ------------ for loop
for(let num = 0; num < 5; num ++){
    console.log(num);
}


// count even number
for (let i = 0; i <= 20; i = i + 2){
    console.log(i);
}


// count odd number
for (let i = 1; i <= 20; i = i + 2){
    console.log(i);
}


let sum = 0;

for(let i = 11; i < 20; i++){
    sum = sum  + i;
    console.log(i);
}

console.log('Sum of numbers from 11 to 20 is ', sum);


// ------ decremental for loop
for (let i = 10; i >= 0; i--){
    console.log(i);
}



let n = 10;
while(n >= 0){
    console.log(n);
    n--;
}


for (let i = 1 ; i <=30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}



for (let i = 1 ; i <=30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}


for (let i = 1 ; i <=50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}


// Give me the sum of numbers from 1 to 20 that are divisible by 3

let total = 0;
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        total = total + i;
    }
}
console.log('Total of the numbers', total);



// ---------- break
for (let i = 0; i < 150; i++){
    console.log(i);
    if(i >= 5){
        break;
    };
}



// 🔥🔥 ------- continue 🔥🔥
for (let i = 1; i < 10; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}


// 🔥🔥 ----------- Quiz  🔥🔥
for(let i = 0; i < 5; i+=3){
    console.log(i);
}

let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

const array = [1, 2, 3, 4, 5, 6, 7];

for(let i = 1; i < array.length; i++){
    if(i == 5){
        continue;
    }
    console.log(array[i]);
}

*/
