const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let temp;

function convert(){
    
    temp = Number(textBox.value);
    if(toFahrenheit.checked){
        result.textContent = (temp*1.8)+32;;
    }else if(toCelsius.checked){
        result.textContent = 1.8*(temp-32);
    }else{
        result.textContent = "select the unit"
    }

}