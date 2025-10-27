const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const MAX_LETTER_INDEX = 51
const LENGTH_OF_ARRAY_OF_CHARACTERS = characters.length
const DEFAULT_PASSWORD_LENGTH = 32

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


const generatePasswordButton = document.querySelector("#generate-passwords-button");
const checkBoxButton = document.querySelector("#hide-numbers-and-symbols");


// console.log(checkBoxButton.ATTRIBUTE_NODE.valueOf())

// generatePasswordButton.addEventListener("click", generatePassword(characters, DEFAULT_PASSWORD_LENGTH))

document.querySelectorAll(".password-result")[0].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH)


document.querySelectorAll(".password-result")[1].textContent = generatePassword(characters, DEFAULT_PASSWORD_LENGTH)









