


// M-24.2: Traversing DOM - getElementsByTagName


// M-24.3: Traversing DOM - document.getElementsByClassName vs document.getElementId


// M-24.4:  Traversing DOM - document.querySelector() & document.querySelectorAll();

// ********* What is difference NodeList and HTMLCollection

// 24.5: Dynamic Style, GetAttribute, SetAttribute, innerText, innerHTML

// 24.6: Styling DOM Properties, add and Remove css class using JS
// --------- use querySelector()
const body = document.querySelector('body');
body.style.background = 'azure';
body.style.margin = 0;
body.style.padding = "40px";
body.style.fontFamily = "cursive"

// --------- use querySelectorAll()
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '25px';
    section.style.borderRadius = "15px";
    section.style.padding = "8px";
}

// -------- use getElementById()
const fruitContainer = document.getElementById('fruits');
fruitContainer.style.backgroundColor = "darkgray";

// ------ insert css style from style files
fruitContainer.classList.add('text-center');
fruitContainer.classList.add('text-color');

// 24.7: NodeList, HTMLCollection, parentNode, childNodes, createElement

// 24.8: Create HTML elements using Javascript and appendChild



// index.html code:
const dom = `
    <header>
        <h1>JAVASCRIPT DOM MODULES</h1>
    </header>
    <main id="main-container">
        <section id="courses">
            <div>
                <h1 id="title">My Awesome DOM</h1>
            </div>
            <div>
                <ul class="courseList">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT JS</li>
                </ul>
            </div>
        </section>

        <section id="fruits">
            <div>
                <h1>My Fav Fruits</h1>
            </div>
            <div>
                <ul class="list">
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Orange</li>
                </ul>
            </div>
        </section>
    </main>

    <script src="script.js"></script>

`




