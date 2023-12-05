// variables //




var passwordUppercase = "";
var passwordLowercase = "";
var passwordNumber = "";
var passwordSpecial = "";
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "-", "[", "]", "}", "{", ",", ".", "/", "?"]
var passwordLength  = "";











// Assignment code here
function generatePassword() {
  var password = "";
  var passwordChar = "";
 
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));
    
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    // Else, return this alert and loop back to the start so they can choose a valid number
    alert("Please select a number between 8 - 128");
  }

    
  // Once user has chosen a valid number, they will choose the rest of their criteria
  passwordUppercase = confirm("Select 'OK' if you would like to include special characters");
  passwordLowercase = confirm("Select 'OK' if you would like to include numbers");
  passwordNumber = confirm("Select 'OK' if you would like to include uppercase letters");
  passwordSpecial = confirm("Select 'OK' if you would like to include lowercase letters");
  
  if (passwordUppercase) {
    passwordChar = uppercase;
  } if (passwordLowercase) {
    passwordChar = lowercase;
  } if (passwordSpecial) {
    passwordChar = special;
  } if (passwordNumber) {
    passwordChar = number;
  } if (passwordUppercase && passwordLowercase) {
    passwordChar = uppercase += lowercase;
  } if (passwordUppercase && passwordNumber) {
    passwordChar = uppercase += number;
  } if (passwordUppercase && passwordSpecial) {
    passwordChar = uppercase += special;
  } if (passwordLowercase && passwordNumber) {
    passwordChar = lowercase += number;
  } if (passwordLowercase && passwordSpecial) {
    passwordChar = lowercase += special;
  } if (passwordSpecial && passwordNumber) {
    passwordChar = special += number;
  } if ( passwordUppercase && passwordLowercase && passwordNumber) {
    passwordChar = uppercase += lowercase += number;
  } if (passwordUppercase && passwordLowercase && passwordSpecial) {
    passwordChar = uppercase += lowercase += special;
  } if (passwordUppercase && passwordNumber && passwordSpecial) {
    passwordChar = uppercase += number += special;
  } if (passwordUppercase && passwordLowercase && passwordNumber && passwordSpecial) {
    passwordChar = uppercase += lowercase += number += special;
  } if (!passwordUppercase && !passwordLowercase && !passwordNumber && !passwordSpecial)
    alert("You must select at least one character type!")

    var password = ""

    for (var i = 0; i < passwordLength; i++) {
       password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
      console.log(password)
    }
  
  console.log("Button was clicked!");

  return (password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);