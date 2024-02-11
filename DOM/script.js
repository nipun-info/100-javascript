// Example-1:
// -------- append() 
// 1. Where to add
const courseList = document.querySelector('.courseList');
// console.log(courseList);
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'MongoDB';

// 3. add the child
courseList.appendChild(li);


// Example-2:
// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerHTML = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Biryani";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Borhani";
ul.appendChild(li2);


section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML Directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Lungi</li>
</ul>
`;

mainContainer.appendChild(sectionDress);


// ---------- styling 

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