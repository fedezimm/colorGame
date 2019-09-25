//Normal variables
var numberOfSquares = 6;
var colors = [];
var pickedColor;

//Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode Buttons event Listeners
	setUpModeButtons();
	//add click listeners to squares
	setUpSquares();
	resetGame();
	resetButton.addEventListener("click",resetGame);
};

function setUpModeButtons(){
	for(var i = 0; i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares=6;
		// if(this.textContent === "Easy"){
		// 	numberOfSquares=3;
		// }else{
		// 	numberOfSquares=6;
		// };
		resetGame();
		});
	};
};

function setUpSquares(){
	for(var i =0;i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			message.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor=pickedColor;
			resetButton.textContent = "Play Again!"
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
			}
		});
	};
};

function resetGame(){
	//generate all new colors
	colors= generateArray(numberOfSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	//change textContent of the button and background of h1
	resetButton.textContent="New Colors!";
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
};

function generateArray(size){
	var newArray = [];
	for(var i = 0;i<size;i++){
		newArray.push(generateRandomColor());
	};
	return newArray;
};

function generateRandomColor(){
	var newColor="rgb("
	for(var i =0;i<2;i++){
		newColor=newColor+generateRandomNumber()+", ";
	};
	newColor=newColor+generateRandomNumber()+")";
	return newColor;
};

function generateRandomNumber(){
	var newNumber = Math.floor(Math.random() *255 + 1);
	return newNumber.toString(); 
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
};

function pickColor(){
	var randomNumber = Math.floor(Math.random()*colors.length);
	return colors[randomNumber];
}


