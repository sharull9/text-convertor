function url(){
    const main = document.querySelector('#url')
    const input = main.children[0];
    const output = main.children[1].children[0];
    const button = main.children[1].children[1];

    console.log(input)
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
}

url()

function upper(){
    const main = document.querySelector('#upper')
    const input = main.children[0];
    const output = main.children[1].children[0];
    const button = main.children[1].children[1];

    console.log(input)
    input.addEventListener('focus', ()=>{
        input.select();
    })
    
    input.addEventListener('input', ()=> {
        let str = input.value;
        let upperCase = str.toUpperCase()
        output.innerText = upperCase;
    })
    
    button.addEventListener('click', ()=> {
        let copyText = output.innerText;
        // copyText.select();
        navigator.clipboard.writeText(copyText);
        console.log(copyText)
    })
}

upper()
