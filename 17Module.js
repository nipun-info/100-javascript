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

// Multi level if-else if-else Condition

*/
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






