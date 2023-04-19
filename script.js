// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const otherchars ="!@£$%^&*()+?:{}|/][.,=";
  const numbers ="0123456789";
  const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWUXWZ";
  const lowercase ="abcdefghijklmnopqrstuvwuxyz";


var passlength = 0;
var passothers = false;
var passUpper = false;
var passLower = false;
var passNumbers = false;

passothers = window.confirm("click OK to confirm to include special characters");
passUpper = window.confirm("click OK to confirm to include uppercase characters");
passLower = window.confirm("click OK to confirm to include lowercase characters");
passNumbers = window.confirm("click OK to confirm to include numbers");



passlength = window.prompt("how many characters would you like your password to include?");
if (passlength < 8 || passlength > 128) {
  window.alert("password must only be between 8 and 128");
  return;
}

var password = "";
const availablecharacters = [];

if (passothers) {
  availablecharacters.push(otherchars.split(""))
}

if (passLower) {
  availablecharacters.push(lowercase.split(""))
}

if (passUpper) {
  availablecharacters.push(upperCase.split(""))

}if (passNumbers) {
  availablecharacters.push(numbers.split(""))
}

for (var i=0; i < passlength; i++) {

}








return('kdjhsuifgidsfgiydgf');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
