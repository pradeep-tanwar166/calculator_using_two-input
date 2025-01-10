
// This is a decimal to binary converter javascript code 

function dividend(dividend) {
  let divisor = 2;
  let arr = [];

  if (dividend === 1) {
    arr.push(1);
  } else {
    while (dividend > 0) {
      let remainder = dividend % divisor;
      arr.push(remainder);
      dividend = Math.floor(dividend / divisor);
    }
  }

  return arr.reverse().join(""); // Return the binary value
}

// This is a decimal to binary converter code 
function get(binary) {
  let decimal = 0;
  let z = binary.length; // Length of the binary number
  console.log("The length of the binary number is:", z);

  // Loop through each bit of the binary string
  for (let i = 0; i < z; i++) {
    // Multiply the binary bit by 2 raised to the power of its position (counting from the right)
    decimal += binary[z - 1 - i] * Math.pow(2, i);
  }
  return decimal;
}

// THis is dom manipulation 
document.getElementById("find").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  let selector = document.getElementById("selector").value; // Dynamically fetch dropdown value
  let input = document.getElementById("digit").value; // Get the raw input

  if (selector === "Decimal to binary") {
    let number = parseInt(input); // Parse input as an integer
    if (isNaN(number)) {
      // here NaN is used to give valid answer f
      document.getElementById("answer").innerHTML =
        "Please enter a valid decimal number.";
    } else {
      let result = dividend(number); // Get the binary representation
      document.getElementById("answer").innerHTML =
        "The binary value is: " + result; // Display result
    }
  } else if (selector === "Binary to decimal") {
    if (/^[01]+$/.test(input)) {
      // Validate binary input (only 0s and 1s)
      let result = get(input); // Convert binary to decimal
      document.getElementById("answer").innerHTML =
        "The decimal value is: " + result; // Display result
    } else {
      document.getElementById("answer").innerHTML =
        "Please enter a valid binary number.";
    }
  }
});

document.getElementById("clear").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("digit").value = ""; // Clear input field
  document.getElementById("answer").innerHTML = ""; // Clear the output completely
});
