var numSquares=6;
var color= [];
var colorPicker;
var squares = document.querySelectorAll(".square");
var colorDispaly=document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var modeButtons= document.querySelectorAll(".mode");
colorDisplay.textContent=colorPicker;
 init();
 function init(){
 		setUpmodeButtons();
 		setUpsquares();
		resetu();
 		}
  function setUpmodeButtons(){
  	for(var i=0; i<modeButtons.length;i++ ){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			resetu();
		});
		}
  		}
  function setUpsquares(){
  	for(var i = 0; i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];
	//adding quick listener 
	squares[i].addEventListener("click",function(){
			//grab the color of sqaure
			var selectedColor= this.style.backgroundColor;
			//compare the colors
			if(selectedColor===colorPicker){
				messageDisplay.textContent="CORRECT!"
				changeColor(colorPicker);
				h1.style.backgroundColor=colorPicker;
					reset.textContent="Try Again";	
			}
			else{
				this.style.backgroundColor="#232323"
				messageDisplay.textContent="try Again";
			}
			
});
}
  }

		for(var i=0; i<modeButtons.length;i++ ){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;

			
				resetu();

		});
		}
		function resetu(){
			color = generateRandomColors(numSquares);
			//pic any random color
			colorPicker=pickColor();
			colorDisplay.textContent=colorPicker;
			messageDisplay.textContent=" ";
			reset.textContent="New Colors"
			//put colors in all squares
			
			h1.style.backgroundColor= "steelblue" ;
			for(var i =0; i<squares.length;i++){
				if(color[i]){
					squares[i].style.display = "block";
				squares[i].style.backgroundColor=color[i];
				}
				else{
					squares[i].style.display = "none";
				}
				}
				
			}


reset.addEventListener("click",function(){
	resetu();
});

for(i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];
	//adding quick listener 
	squares[i].addEventListener("click",function(){
			//grab the color of sqaure
			var selectedColor= this.style.backgroundColor;
			//compare the colors
			if(selectedColor===colorPicker){
				messageDisplay.textContent="CORRECT!"
				changeColor(colorPicker);
				h1.style.backgroundColor=colorPicker;
					reset.textContent="Try Again";	
			}
			else{
				this.style.backgroundColor="#232323"
				messageDisplay.textContent="try Again";
			}
			
});
}
function changeColor(color){
	for(var i =0; i<squares.length;i++){
		squares[i].style.backgroundColor=colorPicker;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}
function generateRandomColors(num){
	//make an arrray
	var arr=[];
	// add num random colors to array
	for(var i=0;i<num;i++){
	//get random color and push into array
	arr.push(randomColor())
	}
	//return that array
	return arr;

}

function randomColor(){
	//pic a random color red from 0 to 255
	var r =Math.floor(Math.random()*256);
	//pic a random color green from 0 to 255

	var g=Math.floor(Math.random()*256);
	
	//pic a random color blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}





