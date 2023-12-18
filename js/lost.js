// Update the computer score
let compScore = document.getElementById('computerScore');
compScore.innerHTML = localStorage.computerScore;

// Uodate the player score
let playScore = document.getElementById('playerScore');
playScore.innerHTML = localStorage.playerScore;

// Create the image tags
const playerImage = document.createElement('img')
const computerImage = document.createElement('img')

// Select which image has to be displayed based on the players selected hand 
if (localStorage.getItem('playerChoice') == 1) {
  playerImage.src = 'img/rock.png'
}
else if (localStorage.getItem('playerChoice') == 2) {
  playerImage.src = 'img/scissors.png'
}
else if (localStorage.getItem('playerChoice') == 3) {
  playerImage.src = 'img/paper.png'
}

// Select which image has to be displayed based on the the computers selected hand
if (localStorage.getItem('computerChoice') == 1) {
  computerImage.src = 'img/rockWin.png'
}
else if (localStorage.getItem('computerChoice') == 2) {
  computerImage.src = 'img/scissorsWin.png'
}
else if (localStorage.getItem('computerChoice') == 3) {
  computerImage.src = 'img/paperWin.png'
}

// Append the images to the page
document.getElementById('lost').appendChild(playerImage)
document.getElementById('won').appendChild(computerImage)

// This function toggles the display of the rules
function showRules() {
      // x is the rules element
    let x = document.getElementById("rules");
      // y is the close button
    let y = document.getElementById("close-button")
      // If the rules block is not visible, set it to visible. Else set it to not visible
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  }
