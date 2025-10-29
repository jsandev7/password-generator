const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const MAX_LETTER_INDEX = 51
const LENGTH_OF_ARRAY_OF_CHARACTERS = characters.length
const DEFAULT_PASSWORD_LENGTH = 16

// Generar numeros aleatorios
function generateRandomIntNumber(minIntNumber, maxIntNumber) {
    let randomIntNumber = null

    randomIntNumber = Math.floor(Math.random() * (maxIntNumber - minIntNumber + 1) + minIntNumber);

    return randomIntNumber
}

// Funcion generar password
function generatePassword(arrayOfElements, sizeOfPassword = DEFAULT_PASSWORD_LENGTH, includeNumbersAndSymbols = true) {
    let generatedPassword = ""

    if (includeNumbersAndSymbols) {
        for (let i = 0; i < sizeOfPassword; i++) {
            generatedPassword += arrayOfElements[generateRandomIntNumber(0, LENGTH_OF_ARRAY_OF_CHARACTERS - 1)]
        }
    } else {
        for (let i = 0; i < sizeOfPassword; i++) {
            generatedPassword += arrayOfElements[generateRandomIntNumber(0, MAX_LETTER_INDEX)]
        }
    }
    return generatedPassword
}

const passwordButton = document.querySelector("#generate-passwords-button");


const checkboxInput = document.querySelector("#hide-numbers-and-symbols");

passwordButton.addEventListener("click", () => {
    let isChecked = checkboxInput.checked

    if (isChecked) {
        document.querySelectorAll(".password-result")[0].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH, false);
        document.querySelectorAll(".password-result")[1].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH, false);
    } else {
        document.querySelectorAll(".password-result")[0].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH);
        document.querySelectorAll(".password-result")[1].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH);
    }
});


let firstPassword = document.querySelectorAll(".password-result")[0];
let secondPassword = document.querySelectorAll(".password-result")[1];


const copyFirstPasswordButton = document.querySelectorAll(".copy-password")[0];

copyFirstPasswordButton.addEventListener("click", () => {
    navigator.clipboard.writeText(firstPassword.textContent);
    alert("Texto copiado en portapapeles");
});

const copySecondPasswordButton = document.querySelectorAll(".copy-password")[1];

copySecondPasswordButton.addEventListener("click", () => {
    navigator.clipboard.writeText(secondPassword.textContent);
    alert("Texto copiado en portapapeles");
});


let sliderValue = document.querySelector("#password-length-slider");
let passwordUserLength = document.querySelector("#number-of-characters");
passwordUserLength.value = sliderValue.value
console.log(sliderValue.value)

sliderValue.addEventListener("input", (event) => {
  passwordUserLength.value = event.target.value;
});


