//RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length<=0){
        return `password length must be atleast 1`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of charecters need to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function handleGenerate(){

const passwordLength = 12;
const includeLowercase = document.getElementById("includeLowercase").checked;
const includeUppercase = document.getElementById("includeUppercase").checked;
const includeNumbers = document.getElementById("includeNumbers").checked;
const includeSymbols = document.getElementById("includeSymbols").checked;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

document.getElementById("output").textContent = `generated Password ${password}`;
}
