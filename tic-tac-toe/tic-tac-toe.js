function startGame(){
	document.turn ="X";
}
function NextMove(cell){
	if(cell.innerText==""){
		cell.innerText=document.turn;
		SwitchTurn();
	}
}

function SwitchTurn(){

	if(CheckWinner(document.turn))
		document.getElementById("p1").innerText = "KAZANAN " + document.turn;

	if(document.turn=="X")
		document.turn="O";
	else
		document.turn="X";
}

function CheckWinner(move){
	var result= false;
	if(
		CheckRow(1,2,3,move) ||
		CheckRow(4,5,6,move) || 
		CheckRow(7,8,9,move) || 
		CheckRow(1,5,9,move) || 
		CheckRow(3,5,7,move) ||
		CheckRow(1,4,4,move) ||
		CheckRow(2,5,8,move) ||
		CheckRow(3,6,9,move))
	{
		result = true;
	}
		return result;
}
function CheckRow (x,y,z,move){
	var result = false;
	if(getBox(x)==move && getBox(y)==move && getBox(z) == move)
	{
		result= true;
	}
	return result; 
}
function getBox(number){
		return document.getElementById("k"+ number).innerText;
}