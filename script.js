
const input = document.querySelector('#value');
const output = document.querySelector('#output');
const button = document.querySelector('#button');

button.addEventListener('click', ()=> {
    let str = input.value;
    let lowerCase = str.toLowerCase().replaceAll('.', '')
    let removeComma = lowerCase.replaceAll("'", '-')
    let finalValue = removeComma.split(" ").join("-");
    output.innerText = finalValue;
})