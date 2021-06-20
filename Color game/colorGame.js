let difficultyMode = 6;
let colors = generateColors(difficultyMode);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let display = document.querySelector("#colorDisplay");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");
let activeButton = "hard";

setNewGame();

resetButton.addEventListener("click", function(){
	//change display bar color
	display.parentNode.style.backgroundColor = "steelblue";
	//remoce message
	message.innerHTML = "";
	// generate new colors
	colors = generateColors(difficultyMode);
	pickedColor = pickColor();
	//change play again back to new colors
	this.innerHTML = "New Colors";
	//set new game
	setNewGame();
})

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	difficultyMode = 3;
	if (activeButton == "hard") {
		displayPropertyChange("none");
		resetButton.click();
	}
	activeButton = "easy";
	for (let i = 0; i < squares.length; i++) {
		squares[i].display
	}
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	difficultyMode = 6;
	if (activeButton == "easy") {
		displayPropertyChange("");
		resetButton.click();
	}
	activeButton = "hard";
})



function setNewGame(){

	display.innerHTML = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		//add initial colors
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//check correct guess
			if (this.style.backgroundColor == pickedColor) {
				changeColors();
				message.innerHTML = "Correct!";
				resetButton.innerHTML = "Play Again?";
			}
			//incorrect guess;
			else{
				this.style.backgroundColor = "#232323";
				message.innerHTML = "Try Again";
			}
		});
	}

}

function changeColors(){
	display.parentNode.style.backgroundColor = pickedColor;
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor(){
	let randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateColors(num){
	//make array
	let output = [];
	//add random numbers to array
	for (let i = 0; i < num; i++) {
		//get random color
		output.push(randomColors());
	}

	//return array
	return output;
}

function randomColors(){
	let randomR = Math.floor(Math.random() * 256);
	let randomG = Math.floor(Math.random() * 256);
	let randomB = Math.floor(Math.random() * 256);
	return "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
}

function displayPropertyChange(prop){
	for (let i = 3; i < squares.length; i++) {
		squares[i].style.display = prop;
	}
}