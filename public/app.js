console.log("hello, everyone!");
// Element variables
const availableGamesContainer = document.querySelector("#game");
const addedGamesContainer = document.querySelector(".addedGames");
const randomizerButton = document.querySelector(".randomizerButton");
const randomGame = document.querySelector('.randomGame');
const addGameForm = document.querySelector('#addGameForm');
const gameSelected = document.querySelector('select');

//Global Variables
const games = ["Don't Panic", "Disney Trivia", "Disney Trivia II", "Wingspan", "Take Off", "Scattegories"];
const addedGames = [];

//Add Dynamic Content
games.forEach((game, index) => {
    availableGamesContainer.innerHTML += `<option value="${game}" >${game}</option>`;
});






//Functions
function addGame(e){
    e.preventDefault();
    const selectedGame = gameSelected.value;
    if(!addedGames.includes(selectedGame)){
        addedGames.push(selectedGame);
    }
    displayGame();
    
}

function displayGame() {
    addedGamesContainer.innerHTML = '';
        addedGames.forEach((game, index) => {
        addedGamesContainer.innerHTML += `<div><p class="gameName">${game}</p><button data-index="${game}">Remove Game</button></div>`;
    });
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
        const selectedGame = e.target.parentNode.querySelector(".gameName").textContent;
        let index = addedGames.indexOf(selectedGame)
        addedGames.splice(index, 1);
        displayGame();
    }
}

//Event Listeners
availableGamesContainer.addEventListener('click', addGame);
randomizerButton.addEventListener('click', getRandomGame);
addedGamesContainer.addEventListener('click', removeGame);
addGameForm.addEventListener('submit', addGame)