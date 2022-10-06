// Assignment code here
const alphaLowerChars = "abcdefghijklmnopqrstuvwxyz";
const alphaUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeralChars = "1234567890";
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function isNumber(s)
{
  return /^\d+$/.test(s);
}

function generatePassword()
{
  var pw = "";
  var selectedChars = "";

  let pwLen = parseInt(window.prompt("Enter desired password length between 8 and 128"), 10);
  if (!isNumber(pwLen)) return "Error: Length must be a number";
  if (pwLen < 8 || pwLen > 128) return "Error: Length must be between 8 and 180";
  let useLower = window.confirm("Use lowercase characters?");
  if (useLower) selectedChars += alphaLowerChars;
  let useUpper = window.confirm("Use uppercase characters?");
  if (useUpper) selectedChars += alphaUpperChars;
  let useNumeral = window.confirm("Use numeric characters?");
  if (useNumeral) selectedChars += numeralChars;
  let useSpecial = window.confirm("Use special characters?");
  if (useSpecial) selectedChars += specialChars;

  for (var i = 0; i < pwLen; i++)
  {
    pw += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
  }

  return pw;
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
