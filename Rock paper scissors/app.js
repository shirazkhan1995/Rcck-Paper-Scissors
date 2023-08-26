const game = () => {
	let pScore = 0;
	let cScore = 0;
	let finalizedChoice = 0;
	let difficultyChoice = 0;
	let playerChoice;

	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const easyButton = document.querySelector('.diff button.easy');
		const moderateButton = document.querySelector('.diff button.moderate');
		const difficultButton = document.querySelector('.diff button.difficult');
		const difficultyScreen = document.querySelector('.diff');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		const difficultyLevel = [1, 2, 3];
		easyButton.addEventListener('click', () => {
			difficultyScreen.classList.add('fadeOut');
			introScreen.classList.add('fadeIn');
			difficultyChoice = difficultyLevel[0];
		});

		moderateButton.addEventListener('click', () => {
			difficultyScreen.classList.add('fadeOut');
			introScreen.classList.add('fadeIn');
			difficultyChoice = difficultyLevel[1];
		});

		difficultButton.addEventListener('click', () => {
			difficultyScreen.classList.add('fadeOut');
			introScreen.classList.add('fadeIn');
			difficultyChoice = difficultyLevel[2];
		});

		playBtn.addEventListener('click', () => {
			introScreen.classList.remove('fadeIn');
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
			finalizedChoice = difficultyChoice;
			console.log(finalizedChoice);
		});
	};

	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');

		const computerHand = document.querySelector('.computer-hand');
		const computerOptions = ['rock', 'paper', 'scissors'];

		const playerWins = (playerChoice) => {
			let computerChoice;
			if (playerChoice === 'rock') {
				computerChoice = 'scissors';
			} else if (playerChoice === 'paper') {
				computerChoice = 'rock';
			} else {
				computerChoice = 'paper';
			}
			return computerChoice;
		};

		const computerWins = (playerChoice) => {
			let computerChoice;
			if (playerChoice === 'scissors') {
				computerChoice = 'rock';
			} else if (playerChoice === 'rock') {
				computerChoice = 'paper';
			} else {
				computerChoice = 'scissors';
			}
			return computerChoice;
		};
		$('.rock').click(function () {
			playerChoice = 'rock';
		});
		$('.paper').click(function () {
			playerChoice = 'paper';
		});
		$('.scissors').click(function () {
			playerChoice = 'scissors';
		});

		options.forEach((option) => {
			option.addEventListener('click', function () {
				if (finalizedChoice === 2) {
					const computerNumber = Math.floor(Math.random() * 3);
					const computerChoice = computerOptions[computerNumber];
					compareHands(this.textContent, computerChoice);

					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}

				if (finalizedChoice === 1) {
					const computerChoice = playerWins(playerChoice);
					compareHands(this.textContent, computerChoice);
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}

				if (finalizedChoice === 3) {
					const computerChoice = computerWins(playerChoice);
					compareHands(this.textContent, computerChoice);
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}
			});
		});
	};

	const updateScore = () => {
		let playerScore = document.querySelector('.player-score p');
		let computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		let winner = document.querySelector('.winner');
		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a tie.';
			return;
		}

		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Player Wins!!!';

				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';

				cScore++;
				updateScore();
				return;
			}
		}

		if (playerChoice === 'paper') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Player Wins!!!';

				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';

				cScore++;
				updateScore();
				return;
			}
		}

		if (playerChoice === 'scissors') {
			if (computerChoice === 'paper') {
				winner.textContent = 'Player Wins!!!';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
	};

	startGame();
	playMatch();
};

game();
//
