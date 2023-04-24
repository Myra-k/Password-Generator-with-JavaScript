
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// below is the function
function generatePassword() {
  const otherchars ="#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const numbers ="0123456789";
  const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWUXWZ";
  const lowercase ="abcdefghijklmnopqrstuvwuxyz";

// below are the variables for the preferences 
var passlength = 0;
var passothers = false;
var passUpper = false;
var passLower = false;
var passNumbers = false;

// below are the conirm pop ups for the user
passothers = window.confirm("click OK to confirm to include special characters");
passUpper = window.confirm("click OK to confirm to include uppercase characters");
passLower = window.confirm("click OK to confirm to include lowercase characters");
passNumbers = window.confirm("click OK to confirm to include numbers");


// below is the prompt regarding the password length and alert
passlength = window.prompt("how many characters would you like your password to include?");
if (passlength < 8 || passlength > 128) {
  window.alert("password must only be between 8 and 128");
  return;
}

if (passLower === false && passNumbers === false && passUpper === false && passothers === false) {
  window.alert("please choose atleast one character option");
  return;
}

//below are the "if" statments to generate password according to users preferences
var password = "";
const availablecharacters = [];

if (passothers) {
  availablecharacters.push(otherchars.split(""));
}

if (passLower) {
  availablecharacters.push(lowercase.split(""));
}

if (passUpper) {
  availablecharacters.push(upperCase.split(""));

}if (passNumbers) {
  availablecharacters.push(numbers.split(""));
}

for (var i=0; i < passlength; i++) {
  var diffcharacters = availablecharacters[Math.floor(Math.random() * availablecharacters.length)];
password += diffcharacters[Math.floor(Math.random() * diffcharacters.length)];
}


return (password)

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
