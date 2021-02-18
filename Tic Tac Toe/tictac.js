

	var turnCount = 1;
	var playerOnePoints = 0;
	var playerTwoPoints = 0;
	
	const WINCON1 = [1,1,1];
	const WINCON2 = [2,2,2];

	var gameState = [[0,0,0],[0,0,0],[0,0,0]];

	var gameStateDisplay = [

		[document.getElementsByClassName("board-space")[0],
		 document.getElementsByClassName("board-space")[1],
		 document.getElementsByClassName("board-space")[2]],

		[document.getElementsByClassName("board-space")[3],
		 document.getElementsByClassName("board-space")[4],
		 document.getElementsByClassName("board-space")[5]],

		[document.getElementsByClassName("board-space")[6], 
		 document.getElementsByClassName("board-space")[7],
		 document.getElementsByClassName("board-space")[8]]

	];



	function compareArray(arrOne, arrTwo) {

		if (arrOne.length == arrTwo.length) {
		
			let truthTable = [];

			for (let i = 0; i < arrOne.length; i++) {
				if (arrOne[i] == arrTwo[i]) {
					truthTable.push(1);
				} else {
					truthTable.push(0);
				}
			}

			for (let n = 0; n < truthTable.length; n++) {
				if (truthTable[n] == 0) {
					return false;
				} else {
					if (n == truthTable.length - 1) {
						return true;
					}
				}
			}

		} else {
			return false;
		}

	}



	function checkState() {

		let winCond = 0;
		console.log(gameState[0]);

		for (let i = 0; i < 3; i++) {

			if (compareArray(gameState[i], WINCON1)) {
				console.log("P1");
				return winCond + 1;
			} else if (compareArray(gameState[i], WINCON2)) {
				console.log("P2");
				return winCond + 2;
			}

			let tempStateOne = [gameState[0][i], gameState[1][i], gameState[2][i]];

			if (compareArray(tempStateOne, WINCON1)) {
				console.log("P1");
				return winCond + 1;
			} else if (compareArray(tempStateOne, WINCON2)) {
				console.log("P2");
				return winCond + 2;
			}

		}

		let tempStateTwo = [gameState[0][0], gameState[1][1], gameState[2][2]];
		let tempStateThree = [gameState[2][0], gameState[1][1], gameState[0][2]];

		if (compareArray(tempStateTwo, WINCON1) || compareArray(tempStateThree, WINCON1)) {
			console.log("P1")
			return winCond + 1;
		} else if (compareArray(tempStateTwo, WINCON2) || compareArray(tempStateThree, WINCON2)) {
			console.log("P2");
			return winCond + 2;
		}

		let tempWinCond = 0;
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				if (gameState[j][k] != 0) {
					tempWinCond++;
				}
				if (tempWinCond == 9) {
					console.log("This is the only one that works...");
					return winCond + 3;
				}
			}
		}

		return winCond;

	}



	function playerMove(x,y) {
		
		if (gameStateDisplay[y][x].id == "taken") {
			
			document.getElementById("script-output").innerHTML = "Taken!";
		
		} else {
			
			gameState[y][x] = turnCount;
			
			if (turnCount == 1) {
				gameStateDisplay[y][x].innerHTML = "<img src=\"tictac-x.png\">";
				gameStateDisplay[y][x].setAttribute("id", "taken");
				turnCount++;
			} else if (turnCount == 2) {
				gameStateDisplay[y][x].innerHTML = "<img src=\"tictac-o.png\">";
				gameStateDisplay[y][x].setAttribute("id","taken");
				turnCount--;
			}
			
			updateWindow();
		}

	}



	function updateWindow() {

		let gameOutcome = checkState();
	
		if (gameOutcome == 1) {
			document.getElementById("script-output").innerHTML = "Player 1 Wins!";
			playerOnePoints++;
			stopPlay(true);
		} else if (gameOutcome == 2) {
			document.getElementById("script-output").innerHTML = "Player 2 Wins!";
			playerTwoPoints++;
			stopPlay(true);
		} else if (gameOutcome == 3) {
			document.getElementById("script-output").innerHTML = "No One Wins!";
		} else {
			document.getElementById("script-output").innerHTML = "";
		}
	
		document.getElementById("player-turn").innerHTML = "P" + turnCount + "'s Turn";
		document.getElementById("player-one-points").innerHTML = "P1 Wins: " + playerOnePoints;
		document.getElementById("player-two-points").innerHTML = "P2 Wins: " + playerTwoPoints;

	}



	function resetWindow(reset) {
		
		if (reset == 1) {
			playerOnePoints = 0;
			playerTwoPoints = 0;
		}

		turnCount = 1;
		
		gameState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];
		
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				gameStateDisplay[i][j].innerHTML = "";
				gameStateDisplay[i][j].setAttribute("id", "open");
			}
		}

		stopPlay(false);
		updateWindow();

	}

	

	function stopPlay(bool) {

		if (bool) {
		
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					gameStateDisplay[i][j].setAttribute("onclick", "");
				}
			}

		} else {

			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					gameStateDisplay[i][j].setAttribute("onclick", `playerMove(${j},${i})`);
				}
			}
		}
			

	}



	updateWindow();











