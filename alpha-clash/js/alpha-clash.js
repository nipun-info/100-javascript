/*
function play() {
    // Step-1: hide the home screen
    const homeScreen = document.getElementById('home-screen');
    // console.log(homeScreen);
    // console.log(homeScreen.classList);
    homeScreen.classList.add('hidden');

    // step-2: Show the playground
    const playGroundScreen = document.getElementById('play-ground');
    playGroundScreen.classList.remove('hidden');

}

*/

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log( 'Your random alphabet', alphabet);

    // set randomply generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

/*
07:30am - 10:30pm = 06Hours
07:30 - 09:30 ->90
10:00 - 12:30 ->90
06:00 - 08:00 ->90
08:30 - 10:30 ->90

*/ 