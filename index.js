// Handle Button Clicks
function handleButtonClick() {const changeButton = document.getElementById('changeColorButton');
  const resetButton = document.getElementById('resetColorButton');
  
  changeButton.addEventListener('click', changeBackgroundColor);
  resetButton.addEventListener('dblclick', resetBackgroundColor);
  alert('Button clicked!');
}

// Function to change the background color when a button is clicked
function changeBackgroundColor() {function changeBackgroundColor() 
  document.body.style.backgroundColor = 'lightblue';
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {document.body.style.backgroundColor = 'white';
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {const keyDisplay = document.getElementById('keyDisplay');
  keyDisplay.textContent = `You pressed: ${event.key}`;

document.addEventListener('keydown', displayKeyPress);
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const textOutput = document.getElementById('textOutput');
  textOutput.textContent = event.target.value;
  // Implement the function to display user input
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)
