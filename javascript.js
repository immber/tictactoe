$(document).ready(function() {
	
	currentGame = new Board();
	gameType = setGameType();
	placeFirstX();
	bindEvents();

});

function bindEvents(){
	$(".corner, .edge, .center").on('click', function(event) {
		if (currentGame.legalMove(this.id)){
			currentGame.playerMove(this.id);
		} else {
			alert("You can't do that, that spot is already taken")
		}
	});
}

function setGameType(){
	var rand = Math.random() >= .5;
	if (rand == 0) {
		gameType = "CENTER"
	}else {
		gameType = "CORNER"
	};
	return gameType
}

function placeFirstX(){	
	if (gameType == "CENTER") {
		currentGame.computerMove(5)
	} else if (gameType == "CORNER") {
		var corners = [1,3,7,9];
		var corner = corners[(Math.floor(Math.random() * 4))];
		currentGame.computerMove(corner);
	}
};

function computerNextMove(playerLastMove){
	var lastMoveType = $("#" + playerLastMove).attr('class').toUpperCase();
	console.log(playerLastMove)

	if (gameType == "CENTER") {
		if (lastMoveType == "EDGE") {
			// console.log("pick an oppisite corner")
			if (playerLastMove > 5) {
				currentGame.computerMove(parseInt(playerLastMove) - 5);
			} else {
				currentGame.computerMove(parseInt(playerLastMove)  + 5);
			}
				
		} else if (lastMoveType == "CORNER") {
			if (playerLastMove > 5) {
				currentGame.computerMove(parseInt(playerLastMove) - 6);
			} else {
				currentGame.computerMove(parseInt(playerLastMove)  + 6);
			}
		}
			
	} else if (gameType == "CORNER") {
		if (lastMoveType == "EDGE") {
			console.log("yep edge")
		} else if (lastMoveType == "CORNER") {
			console.log('yep corner')
		} else if (lastMoveType == "CENTER") {
			console.log('shit center')
		}
	}

	// if ((gameType == "CENTER") && ($("#" + playerLastMove).attr('class') == "EDGE")) {
	// 	console.log('pick oppisite corner')
	// 	//computer picks corner on oppisite side

	// } else if ((gameType == "CENTER") && ($("#" + playerLastMove).attr('class') == "CORNER")) {
	// 	//computer picks oppisiite diagonal corner
	// 	console.log('pick oppisite diagonal corner')

	// }

	// // if (gameType == corner && $("#" + playerLastMove).attr('class') == "edge") {
	// 	//computer picks corner on oppisite side

	// } else if (gameType == corner && $("#" + playerLastMove).attr('class') == "corner") {
	// 	//computer picks oppisiite diagonal corner
	// }
}

function Board(){
	this.gameBoard = ["-","-","-","-","-","-","-","-","-"];
}

Board.prototype.legalMove = function(space) {
	return this.gameBoard[space-1] == "-";
}

Board.prototype.playerMove = function(space) {
	this.gameBoard[space -1] = "o";
	$("#" + space).html("o");
	console.log(currentGame.gameBoard);
	computerNextMove(space);
};

Board.prototype.computerMove = function(space) {
	this.gameBoard[space -1] = "x";
	$("#" + space).html("x");
	console.log(currentGame.gameBoard);
};

Board.prototype.checkForWinner = function(){
	//check for tictactoe
}

