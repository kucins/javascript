function startGame() {
    document.turn ="X";
}

function nextMove(cell) {
    if(cell.innerText==""){
        cell.innerText=document.turn;
        switchTurn();
    }
}

function switchTurn(){

    if(checkWinner(document.turn)) {
        document.getElementById("p1").innerText = "The Winner " + document.turn ;
    }

    if(document.turn=="X") {
        document.turn="O";
    }
    else {
        document.turn="X";
    }
}

function checkWinner(move) {
    var result= false;
    if( checkRow(1,2,3,move) || checkRow(4,5,6,move) || checkRow(7,8,9,move) || 
        checkRow(1,5,9,move) || checkRow(3,5,7,move) || checkRow(1,4,4,move) ||
        checkRow(2,5,8,move) || checkRow(3,6,9,move)) {
        result = true;
    }
    
    return result;
}

function checkRow (x,y,z,move) {
    var result = false;
    if(getBox(x)==move && getBox(y)==move && getBox(z) == move) {
        result= true;
    }
    return result; 
}

function getBox(number) {
    return document.getElementById("k"+ number).innerText;
}