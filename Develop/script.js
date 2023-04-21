// Assignment code here
var generateBtn = document.querySelector("#generate");

function getRandomNumber (min, max){
  var randomNumber= Math.random();
  var randomNumberUpToMax= randomNumber*max;
  var randomNumberInRange= min+randomNumberUpToMax;
  return Math.floor(randomNumberInRange)
}

function getRandomValueFromArray(array) {
  var randomArrayPosition= getRandomNumber(0, array.length)
  return array[randomArrayPosition]
}

var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var special= ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",];

function generatePassword() {
  var password= ""
  var passwordLength= prompt("How many characters would you like the password to have? Select a number between 8 and 128")
  console.log("passwordlength", passwordLength)

//Validation, so it doesn't drop an error
  while (passwordLength<8 || passwordLength>128) {
    passwordLength= prompt("Enter a number between 8 and 128")
  }

  var includeLowercase= confirm("Would you like to include lowercase characters?")
  console.log("Include lowercase: " + includeLowercase)
  var includeUppercase= confirm("Would you like to include uppercase characters?")
  console.log("Include uppercase" + includeUppercase)
  var includeNumeric= confirm("Would you like to include numeric characters?")
  console.log("Include numeric" + includeNumeric)
  var includeSpecial= confirm("Would you like to include special characters?")
  console.log("Include special" + includeSpecial)

while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
  alert("Select at least one character type");
  var includeLowercase = confirm("Would you like to include lowercase characters?");
  var includeUppercase = confirm("Would you like to include uppercase characters?");
  var includeNumeric = confirm("Would you like to include numeric characters?");   
  var includeSpecial = confirm("Would you like to include special characters?");
}
  var characterset= ""; 
  if (includeLowercase) {
    characterset+=lowerCase;
  }
  if (includeUppercase) {
    characterset+=upperCase;
  }
  if(includeNumeric) {
    characterset+=numeric;
  }
  if (includeSpecial) {
    characterset+=special;
  }
  
  var password= "";
  for (var i=0;i<passwordLength; i++) {
    password+=characterset.charAt(Math.floor(Math.random()*characterset.length));
  }
  return password
  console.log("Generated password: "+ password);
  
  
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
