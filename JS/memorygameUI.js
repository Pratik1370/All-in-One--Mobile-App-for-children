//fetches all data from the UI of learningtools
//**********************************Adding the UI part***************************************//
var mainwindow;
function memorygameUI()
{	console.log("the memorygame UI is running");
	Lheader("images/raw/memorygametitle.png");
	bodyMemoryGame();
	Lfooter();
	loadAppmemory();
}
//defines the body of the drawing book
function bodyMemoryGame()
{	//inside mainwindow div contr div is created	
	var contr=addDiv("contr","contr");
	mainwindow.append(contr);

	//inside contr div game div is created 
	var game=addDiv("game","game");
	contr.append(game);

	//inside contr setting div
	var settings=addDiv("settings","settings");
	game.append(settings);
	var p=addParagraph("myp","myp","Number of tiles");
	settings.append(p);
	
	var span1=addSpan("mys","mys","10");
	settings.append(span1);
	
	var irange=addInput("myrange","myrange");
	settings.append(irange);
	
	var buttonreset=addButton("buttonquiz","buttonquiz","Reset");
	buttonreset.setAttribute("name","reset");
	settings.append(buttonreset);
	
	var buttonstart=addButton("buttonquiz","buttonquiz","start");
	buttonstart.setAttribute("name","start");
	settings.append(buttonstart);
	
	
	//inside contr play-area div
	var playarea=addDiv("play-area","play-area");
	game.append(playarea);
	 
}

//********************working section****************************//


//the function is loaded when the app runs
//the function is loaded when the app runs
function loadAppmemory() {
	// Fade in the body
	document.querySelector('body').style.opacity = 0;
	setTimeout(() => {
		document.querySelector('body').style.opacity = 1;
	});
	const body = document.querySelector('body'),//query selector of body
	number_tiles = document.querySelector('#settings span'), //selecting id seting and span inside
	tile_input = document.querySelector('#settings input'),
	Button_Start = document.querySelector('#settings button[name=start]'),//selecting the button with name start
	Button_Reset = document.querySelector('#settings button[name=reset]'),
	Area_Play = document.querySelector('#play-area');
	tile_input.addEventListener('input', () => {
		number_tiles.innerHTML = tile_input.value;
	});
	//when button reset is clicked
	Button_Reset.addEventListener('click', () => {
		Button_Start.removeAttribute('disabled', '');
		tile_input.removeAttribute('disabled', '');
		Area_Play.innerHTML = '';
	});

	Button_Start.addEventListener('click', () => {
		Button_Start.setAttribute('disabled', '');
		tile_input.setAttribute('disabled', '');

		// Create tiles
	for (let i = 0; i < tile_input.value; i++) {
		Area_Play.innerHTML += '<div class="tile"><p></p></div>';
		}

	// Push to `numsToAssign` all the numbers from 0 to `tile_input / 2`
	var numsToAssign = [];
	for (let i = 0; i < tile_input.value / 2; i++) {
			numsToAssign.push(i, i);
		}
	// Assign each number of `numsToAssign` to each tile randomly
	var randomNum = Math.floor(Math.random() * tile_input.value);
	var randomTile = document.querySelectorAll('.tile p')[randomNum];

		for (let i = 0; i < tile_input.value; i++) {
			do {
				if (!randomTile.innerHTML) {
					randomTile.innerHTML = numsToAssign.shift();
				}

				randomNum = Math.floor(Math.random() * tile_input.value);
				randomTile = document.querySelectorAll('.tile p')[randomNum];
			} while (randomTile.innerHTML && numsToAssign.length > 0)
		}

		startGame();
	});


	function startGame() {
		let tiles = document.querySelectorAll('.tile');
		let firstClickedTile;
		let secondClickedTile;

		// Add click event for every tile
		for (let i = 0; i < tiles.length; i++) {
			tiles[i].addEventListener('click', matching);
		}

		function matching(e) {
			if (!firstClickedTile) {
				firstClickedTile = e.target.parentNode;
				firstClickedTile.firstChild.style.filter = 'blur(0px)';
			} else if (e.target.parentNode !== firstClickedTile) {
				secondClickedTile = e.target.parentNode;
				secondClickedTile.firstChild.style.filter = 'blur(0px)'

				/*
				If the tiles match:
				 - add 'matched' class to the matched tiles;
				 - remove the click event for the matched tiles;
				 - remove blur for the matched tiles;
				Else keep the blur.
				*/

				if (firstClickedTile.firstChild.innerText == secondClickedTile.firstChild.innerText) {
					firstClickedTile.classList.add('matched');
					secondClickedTile.classList.add('matched');

					firstClickedTile.removeEventListener('click', matching);
					secondClickedTile.removeEventListener('click', matching);

					firstClickedTile.firstChild.style.filter = 'blur(0px)';
					secondClickedTile.firstChild.style.filter = 'blur(0px)';

					tilesClickDelayAndWinCheck();
				} else {
					setTimeout(() => {
						firstClickedTile.firstChild.style.filter = 'blur(15px)';
						secondClickedTile.firstChild.style.filter = 'blur(15px)';
					}, 400);

					tilesClickDelayAndWinCheck();
				}

				setTimeout(() => {
					firstClickedTile = undefined;
				}, 400);
			}
		}

		// Removes click events on tiles to be able to see the second tile, then adds events back.
		function tilesClickDelayAndWinCheck() {
			let notMatchedTiles = 0;

			for (let i = 0; i < tiles.length; i++) {
				tiles[i].removeEventListener('click', matching);

				if (!tiles[i].classList.contains('matched')) {
					notMatchedTiles++;
				}
			}
		//  case defined for winning where no tile has been left empty or open
			if (notMatchedTiles === 0) {
				console.log('You won!');
				winMenu();
				return;
			}

			setTimeout(() => {
				for (let i = 0; i < tiles.length; i++) {
					tiles[i].addEventListener('click', matching);
				}
			}, 400);
		}

		function winMenu() {
			body.innerHTML += '<div id="winScreen"></div>';
			document.querySelector('#winScreen').innerHTML = '<p>You won!</p>';

			setTimeout(() => {
				document.querySelector('#winScreen').style.background = 'rgba(0, 0, 0, .7)';
			}, 100);
			
			setTimeout(() => {
				body.removeChild(document.querySelector('#winScreen'));
			}, 2000);
		}
		
	}
}
