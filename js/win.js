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
    playerImage.src = 'img/rockWin.png'
  }
  else if (localStorage.getItem('playerChoice') == 2) {
    playerImage.src = 'img/scissorsWin.png'
  }
  else if (localStorage.getItem('playerChoice') == 3) {
    playerImage.src = 'img/paperWin.png'
  }

  // Select which image has to be displayed based on the the computers selected hand
  if (localStorage.getItem('computerChoice') == 1) {
    computerImage.src = 'img/rock.png'
  }
  else if (localStorage.getItem('computerChoice') == 2) {
    computerImage.src = 'img/scissors.png'
  }
  else if (localStorage.getItem('computerChoice') == 3) {
    computerImage.src = 'img/paper.png'
  }

// Append the images to the page
  document.getElementById('won').appendChild(playerImage)
  document.getElementById('lost').appendChild(computerImage)

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