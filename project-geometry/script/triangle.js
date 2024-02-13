/*
    Objective: get bade, heigth of triangle. Calculate the area by using he provided formula and then display the area.

    * step-1: get base value of the triangle
        1. added an id in the base input field (html)
        2. use getElementById to access the input field
        3. get value from the input field. (value is string now)
        4. convert the value to a number. using parseFloat().
    * step-2: get height value of the triangle
*/ 

function calculateTriangleArea(){
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