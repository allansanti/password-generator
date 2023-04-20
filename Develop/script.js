// Assignment code here
//TODO
//Create a button to generate a new password.
//Set up a series of prompts for password criteria.
//Prompt the user for password length.
//Validate that password length is between 8 and 128 characters.
//Prompt the user for which character types to include in the password.
//Confirm if user wants to include lowercase, uppercase, numeric, and/or special characters.
//Validate that at least one character type is selected.
//Generate a password that matches the selected criteria.
//Display the generated password in an alert or write it to the page.

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
