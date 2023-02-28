const $inputField = document.querySelector("#password");
const $btnGenerate = document.querySelector("#btn-generate");
const $btnCopy = document.querySelector("#btn-copy");
let savedPassword;

function generatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let password = "";

  for (let i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

$btnGenerate.addEventListener("click", () => {
  savedPassword = generatePassword();
  $inputField.value = savedPassword;
});

$btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(savedPassword);
});
