console.log("hello");

// Conceptual Section
// window is global object
// type of document & console.dir(document)
//




/*
// Traversing DOM Elements


// * Multiple Element
// ------ getElementsByClassName()
const items = document.getElementsByClassName("li-items");
console.log(items);
console.log(items.length);

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    console.log(element);
    element.style.color = "green";
    element.innerText = "Updated list"
}

// ------ getElementsByClassName()

// -------- getElementsByTagName()
const items2 = document.getElementsByTagName('li');
console.log(items2);

for (const iterator of items2) {
    console.log(iterator);
    iterator.style.fontSize = '30px';
}

// ----------- querySelectorAll()
const items3 = document.querySelectorAll('li');
console.log(items3);

*/
// Nodes VS Element in DOM

// What is different child.odes and children

// type of Node: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

const ul = document.querySelector('ul');

console.log(ul.innerText);
console.log(ul.textContent);
