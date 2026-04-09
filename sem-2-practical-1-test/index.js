
const numberInput = document.getElementById("numberInput");

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}


function checkPrime() {
  const inputValue = numberInput.value.trim();
  const parsedNumber = Number(inputValue);

  if (!Number.isInteger(parsedNumber) || parsedNumber < 0) {
    result.textContent = "Please enter a valid whole number (0 or greater).";
    return; 
  }

  // Call isPrime() and show final message.
  if (isPrime(parsedNumber)) {
    result.textContent = `${parsedNumber} is a prime number.`;
  } else {
    result.textContent = `${parsedNumber} is not a prime number.`;
  }
}

// Run prime check when the button is clicked.
checkBtn.addEventListener("click", checkPrime);

// Also run prime check when user presses Enter in the input field.
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPrime();
  }
});
