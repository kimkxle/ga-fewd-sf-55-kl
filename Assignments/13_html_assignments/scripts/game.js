//set value at zero
//Define ID buttons on click 
//Define output on click to play
//Define function if human plays then computer output by 3 (nested if statements) using "element.innerHTML" for dynamic outputs
    //define output statement on screen - value you played and what computer played
    //get total score based on dynamic score from ".innerHTML"
//calculate scoreboard "math.floor" and "math.random" score (what's multiply by play.lengths?)


//set value at zero
var humanScore = 0;
var computerScore = 0;

//Define ID buttons on click 
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

//Define output on click to play
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

//Define function if human plays then computer output by 3 (nested if statements)
function play(humanPlay) {

  computerPlay = getComputerPlay();

//define output statement on screen - value you played and what computer played
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
  }

//get total score based on dynamic score from ".innerHTML"
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

//calculate scoreboard "math.floor" and "math.random" score
function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}