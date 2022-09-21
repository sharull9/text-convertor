
const input = document.querySelector('#value');
const output = document.querySelector('#output');
const button = document.querySelector('#copyToClipboard');


input.addEventListener('focus', ()=>{
    input.select();
})

input.addEventListener('input', ()=> {
    let str = input.value;
    let lowerCase = str.toLowerCase().replaceAll('.', '')
    let removeComma = lowerCase.replaceAll("'", '-')
    let finalValue = removeComma.split(" ").join("-");
    output.innerText = finalValue;
})

button.addEventListener('click', ()=> {
    let copyText = output.innerText;
    // copyText.select();
    navigator.clipboard.writeText(copyText);
    console.log(copyText)
})
