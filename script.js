	/*----- constants -----*/
	const COLORS = [
		['green', 'rgb(112, 173, 153)'],
		['blue', 'rgb(156, 213, 242)'],
		['purple', 'rgb(178, 167, 211)'],
		['pink', 'rgb(248, 183, 205)'],
		['orange', 'rgb(251, 197, 159)'],
		['yellow', 'rgb(246, 239, 181)'],
	]
	


	/*----- state variables -----*/
	let result;  //the random generated answer
	let board; //2D array
	let turn; //which letter A, B, C or D
	let state; //null = no winner; 1 = winner; -1 = failed the game
	let tries = 0; //amount of tried inputs
	let timer; 
	let timeLeft; 

	/*----- cached elements  -----*/
	const messageEl = document.querySelector('.message');
	const playAgainBtn = document.querySelector('.start');
	const colorBtn = document.getElementById('colors');
	const colorEls = [...document.querySelectorAll('.color-wrap > div')];
	const resultEl = document.querySelectorAll('.answer > *');
	
	/*----- event listeners -----*/
	playAgainBtn.addEventListener('click', init);
	colorBtn.addEventListener('click', handleColorClick);



	/*----- functions -----*/
	playAgainBtn.style.visibility = 'visible';
	colorBtn.style.visibility = 'hidden';
	document.getElementsByClassName('answer0')[0].style.visibility = state ? 'visible' : 'hidden';
	document.getElementsByClassName('answer1')[0].style.visibility = state ? 'visible' : 'hidden';
	document.getElementsByClassName('answer2')[0].style.visibility = state ? 'visible' : 'hidden';
	document.getElementsByClassName('answer3')[0].style.visibility = state ? 'visible' : 'hidden';

	
	function init() {
		start();
		board = [
			[0, 0, 0, 0],  // col 0
			[0, 0, 0, 0],  // col 1
			[0, 0, 0, 0],  // col 2
			[0, 0, 0, 0],  // col 3
			[0, 0, 0, 0],  // col 4
			[0, 0, 0, 0],  // col 5
			[0, 0, 0, 0],  // col 6
			[0, 0, 0, 0],  // col 7
			[0, 0, 0, 0],  // col 8
			[0, 0, 0, 0],  // col 9
			[0, 0, 0, 0],  // col 10
			[0, 0, 0, 0],  // col 11
		  ];
		
		result = randResult();
		updateResultColors();
		turn = "A";
		tries = 0;
		state = null;
		render();

	}

	function randResult() {
		let res = [];
		for(let i=0; i<4; i++) {
			let random = Math.floor(Math.random() * 6)
			res.push(COLORS[random][0]);
		}
		return res;
	}

	function updateResultColors() {
		for(let i=0; i<4; i++) {
			let ans = ".answer"+i;
			let resEl = document.querySelector(ans);
			for(let b=0; b<6; b++) {
				if(COLORS[b][0]===result[i])
					resEl.style.backgroundColor = COLORS[b][1];
			}
		}
	}

	function render() {
		renderBoard();
		renderMessage();
		renderControls();
	};

	function renderBoard() {
		board.forEach(function(arr, arrIdx) {
			arr.forEach(function(square, squareIdx) {
				const squareClass = `.c${arrIdx}r${squareIdx}`
				const squareEl = document.querySelector(squareClass);
				const col = board[arrIdx][squareIdx];
				
				for(let i=0; i<6; i++) {
					
					if(COLORS[i][0]===col) {
						squareEl.style.backgroundColor = COLORS[i][1];
					}
					if(col===0) {
						squareEl.style.backgroundColor = 'rgb(227, 244, 205)';
						squareEl.style.border = 'none';
					}
				}
			})
		})
		hints();
	};

	function renderMessage() {
		if (state === 1) 
			messageEl.innerText = `CONGRATS!!
			YOU WON ON TRY NUMBER ${tries+1}!
			WITH ${timeLeft} SECONDS LEFT!`
		else if (state === -1) 
			messageEl.innerText = `Failed... Try again?`	
		else 
			messageEl.innerText = `Click on a color to choose for:
			${turn}`;
	};
	
	function renderControls() {
		playAgainBtn.style.visibility = state ? 'visible' : 'hidden';
		//this is good: its just marked green during writing of code:
		document.getElementsByClassName('answer0')[0].style.visibility = state ? 'visible' : 'hidden';
		document.getElementsByClassName('answer1')[0].style.visibility = state ? 'visible' : 'hidden';
		document.getElementsByClassName('answer2')[0].style.visibility = state ? 'visible' : 'hidden';
		document.getElementsByClassName('answer3')[0].style.visibility = state ? 'visible' : 'hidden';
		colorBtn.style.visibility = state ? 'hidden' : 'visible';
		if (state===1 || state===-1) {
			clearInterval(timer);
		}
		// if (state===1){
		// 	document.getElementsByClassName('answer0')[0].style.transform = 'preserve-3d';
		// 	document.getElementsByClassName('answer1')[0].style.transform = 'preserve-3d';
		// 	document.getElementsByClassName('answer2')[0].style.transform = 'preserve-3d';
		// 	document.getElementsByClassName('answer3')[0].style.transform = 'preserve-3d';
		// }
		
	};

	function handleColorClick(evt) {
		let clickedEl = evt.target.className;
		const idxEl = colorEls.indexOf(evt.target);
		if(idxEl === -1) return;
		let turnNow = 0;
		if(turn === 'A') turnNow = 0;
		else if(turn==='B') turnNow = 1;
		else if(turn==='C') turnNow = 2;
		else turnNow = 3;
		board[tries][turnNow] = clickedEl;
		state = getState();
		
		//change turn
		if(turnNow === 0) turn = 'B';
		else if(turnNow=== 1) turn = 'C';
		else if(turnNow=== 2) turn = 'D';
		else if(turnNow=== 3) turn = 'A';
		render();
		if (turnNow===3) tries+=1;
	}

	function getState() {
		let test=0;
		for(let i=0; i<4; i++) {
			if(result[i]===board[tries][i]) test+=1;
		}
		if(test===4) {
			return 1;
		}
		if((tries===11) && (turn==='D')){
			return -1;
		}
	}

	function hints() {
		if (turn==='A') { //once filled in all 4 chosen colors
			for (let i=0; i<4;i++) { //iterate 4 times
				const squareClass = `.c${tries}r${i}`
				const squareEl = document.querySelector(squareClass);
				//right color right place = black border
				if(board[tries][i]===result[i]) {
					squareEl.style.border = 'black solid 0.6vmin'
				}
				//right color wrong place = white border
				else if (board[tries][i]===result[0] || board[tries][i]===result[1] ||board[tries][i]===result[2] ||board[tries][i]===result[3]) {
						squareEl.style.border = 'white solid 0.6vmin'
					 }
				}
			}
		}

		function gameOver() {
			clearInterval(timer);
		  state = -1;
		  render();
	  }
  
	  function updateTimer() {
		  if(state!==1 && state!==-1) {
			  timeLeft -= 1;
			  
			  if(timeLeft >= 0)
				  document.getElementById('timer').innerText = timeLeft;
			  else {
				  gameOver();
			  }
		  }
	  }
  
	  function start() {
		  timeLeft = 60;
		  document.getElementById('timer').innerText = timeLeft;
		  timer = setInterval(updateTimer, 1000);
	  }