// 23.1: Explore what you can do with JavaScript Object

// Arguments
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
}
add(12, 13, 45, 9, 78);

// Note: arguments not a array, it's array like object

// 23.2: Find the Matching Product By Searching Products
const products = [
    {id:1, name: 'Xiomi phone', price: 19000},
    {id:2, name: 'iphone', price: 19000},
    {id:3, name: 'mac book air', price: 19000},
    {id:4, name: 'Lenovo yoga laptop', price: 19000},
    {id:5, name: 'Dell inspiron laptop', price: 19000},
    {id:6, name: 'Samsung Phone note', price: 19000},
    {id:7, name: 'Nokia 6 phone', price: 19000}
]

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Laptop');

console.log(result);


/*
********** Reward Video ********* 
 ---- Topics: Essential CSS Rules Recap Along With HTML
*/ 

