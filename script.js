// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var passwordLength = 8;
  var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "?", ":", "£", "#", ";", "%", "~"];
  // adding lowercase characters
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // adding uppercase characters
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // using alert to prompt User

  var requireNum = window.confirm("Does your password require numbers?");
  var requireLowerCase = window.confirm(
    "Does your password require lower case?"
  );
  var requireUpperCase = window.confirm(
    "Does your password require upper case?"
  );
  var requireSymbols = window.confirm("Does your password require symbols?");

  var requiredChars = [];

  // if-else logic assess user input if they input yes then the password generator will include those selected characters in the final password

  if (requireNum) {
    requiredChars = requiredChars.concat(integers);
  }

  if (requireLowerCase) {
    requiredChars = requiredChars.concat(lowerCase);
  }

  if (requireUpperCase) {
    requiredChars = requiredChars.concat(upperCase);
  }

  if (requireSymbols) {
    requiredChars = requiredChars.concat(symbols);
  }

  // Generating the password using the requiredChars array
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * requiredChars.length);
    password += requiredChars[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
