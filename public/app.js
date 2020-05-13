console.log("hello, everyone!");
// Element variables
const availableGamesContainer = document.querySelector(".availableGames");
const addedGamesContainer = document.querySelector(".addedGames");
const randomizerButton = document.querySelector(".randomizerButton");
const randomGame = document.querySelector('.randomGame');

//Global Variables
const games = ["Don't Panic", "Disney Trivia", "Disney Trivia II", "Wingspan", "Take Off", "Scattegories"];
const addedGames = [];
games.forEach((game, index) => {
    availableGamesContainer.innerHTML += `<div>${game}<button data-index="${game}">Add Game</button></div>`;
});





//Functions
function addGame(e){
    if (e.target.tagName === "BUTTON") {
        addedGames.push(e.target.dataset.index);
        addedGamesContainer.innerHTML = '';
        addedGames.forEach((game, index) => {
            addedGamesContainer.innerHTML += `<div>${game}<button data-index="${game}">Remove Game</button></div>`;
        });
    }
}

function getRandomGame() {
    const randomIndex = Math.floor((Math.random() * addedGames.length));
    let message = '';
    if(addedGames.length < 1) {
        message = "Please select games to add to your list";
    } else if (addedGames.length === 1) {
        message = "Please select another game for the randomizer to work";
    } else {
        message = `Your selected game is: ${addedGames[randomIndex]}`;
    }
    randomGame.textContent = message;
}

function removeGame(e) {
    if (e.target.tagName === "BUTTON") {
        console.log(addedGames);
        console.log(addedGames[e.target.dataset.index])
        addedGames.splice(addedGames[e.target.dataset.index], 1);
        addedGamesContainer.innerHTML = '';
        addedGames.forEach((game, index) => {
            addedGamesContainer.innerHTML += `<div>${game}<button data-index="${game}">Remove Game</button></div>`;
        });
    }
}

//Event Listeners
availableGamesContainer.addEventListener('click', addGame);
randomizerButton.addEventListener('click', getRandomGame);
addedGamesContainer.addEventListener('click', removeGame);