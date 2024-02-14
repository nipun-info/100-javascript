/*
    Objective: get bade, heigth of triangle. Calculate the area by using he provided formula and then display the area.

    * step-1: get base value of the triangle
        1. added an id in the base input field (html)
        2. use getElementById to access the input field
        3. get value from the input field. (value is string now)
        4. convert the value to a number. using parseFloat().
    * step-2: get height value of the triangle
*/

function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const baseValue = triangleBaseInput.value;
    const baseInput = parseFloat(baseValue);
    console.log(baseInput);

    // get triangle heigth value
    const triangleHeightInput = document.getElementById('triangle-height');
    const heightValue = triangleHeightInput.value;
    const heightInput = parseFloat(heightValue);
    console.log(heightInput);

    // Calculate the triangle area
    const area = 0.5 * baseInput * heightInput;
    console.log('Total Tri angle area is: ', area);

    // display triangle area result
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

/* 
// -------- rectangle area
function calculateRectangleArea() {
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const widthValue = rectangleWidthInput.value;
    const widthInput = parseFloat(widthValue)
    console.log(widthInput);

    // get rectangle length value
    const rectanglLengthInput = document.getElementById('rectangle-length');
    const lengthValue = rectanglLengthInput.value;
    const lengthInput = parseFloat(lengthValue)
    console.log(lengthInput);

    // Calculate the rectangle area
    const area = widthInput * lengthInput;

    // display reactangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area

}

*/
function calculateRectangleArea() {
    // get rectangle width value
    const widthValue = getInputValue('rectangle-width');

    // get rectangle length value
    const lengthValue = getInputValue('rectangle-length');

    // Calculate the rectangle area
    const area = widthValue * lengthValue;

    // display reactangle area
    setInnerTextById('rectangle-area', area);

}

function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputField);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

