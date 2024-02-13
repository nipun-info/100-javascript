/*
//*** Practice, Practice, Practice ------------
M-25.1: What is Event, different types of event in web
//----- search google common dom event

https://tinycode.medium.com/10-of-the-most-important-document-events-5fd1879a5a1f

<h1 onclick="console.log('Dom start now');">DOM Event </h1>
<button onclick="console.log('nipun');">Click Your Name</button>
<button onclick="console.log(2024);">Click Year </button>

M-25.2: Add onclick handler directly or via javascript
// ------ option-1: Directly set on the HTML element
// <h1 onclick="console.log('Dom start now');">DOM Event </h1>

// ----------- option-2: add onclick function
//----------- index.js:
<!-- ------ Option-1: -->
    <button onclick="document.body.style.backgroundColor = 'yellow' ">Make Yellow</button>

    <!-- ------ Option-2: -->
    <button onclick="makeRed()">Make Red</button>

    <!-- ------ Option-3: -->
    <button id="make-blue">Make Blue</button>

    <!-- ------ Option-3: another -->
    <button id="make-purple">Make Purple</button>

//-------- event.js
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// ----------- option-3:
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// ----------- option-3: another
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


M-25.3: Different was to use addEventLister on a button
// --- searching addEventLister
<!-- ------ Option-4: -->
    <button id="make-pink">Make Pink</button>
    <button id="make-green">Make Green</button>


// ----------- option-4:
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// ----------- option-4: final
document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

M-25.4: Most common ways to set Event Handlers
<h2>Final DOM Event Handlers</h2>
    <h3 id="handler-status">Default Text</h3>
    <button onclick="handleOnClick()">Handle Event By add Onclick Function</button>

    <button id="event-listener">Handle Event by addEventListener</button>

    <p id="input-text-display">Default Input Text</p>
    <input id="input-field" type="text">
    <button id="btn-update">Update</button>

    <script>
        // ------ option 1:
        function handleOnClick() {
            const handlerStatus = document.getElementById('handler-status');
            handlerStatus.innerText = 'Handled by functon attached on onClick attribute';
        }

        // -------- option 2:
        document.getElementById('event-listener').addEventListener('click', function () {
            const handlerStatus = document.getElementById('handler-status');
            handlerStatus.innerText = 'Text updated by add Event listener button';
        });

        // --------- option : recap
        document.getElementById('btn-update').addEventListener('click', function () {
            const inputField = document.getElementById('input-field');
            const inputText = inputField.value;

            document.getElementById('input-text-display').innerText = inputText;
            inputText.value = '';
        });

    </script>

M-25.5: Create a comment box and display comment

M-25.6: Simple github like delete confirmation button

M-25.7: (semi-advanced) Event bubble and stop propagating

M-25.8: (advanced) Event delegate and bebefit of Event bubble

M-25.9: DOM events summary and homework
M-25.10: Bsic js events all in one
*/


// conceptual section
// https://catnip-eyelash-300.notion.site/Play-with-DOM-Document-Object-Model-a04fba01e65b4971a500950379733b8c


// https://github.com/rokib97/play-with-dom-b9
