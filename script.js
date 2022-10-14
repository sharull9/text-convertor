function url(){
    const main = document.querySelector('#url')
    const input = main.children[0];
    const output = main.children[1].children[0];
    const button = main.children[1].children[1];

    input.addEventListener('focus', ()=>{
        input.select();
    })
    
    input.addEventListener('input', ()=> {
        let str = input.value;
        let lowerCase = str.toLowerCase().replaceAll('.', '')
        let removeComma = lowerCase.replaceAll("'", '-')
        let removeAnd = removeComma.replaceAll(" & ", '-')
        let removeA1 = removeAnd.replaceAll("à", 'a')
        let removeA2 = removeA1.replaceAll("á", 'a')
        let removeE1 = removeA2.replaceAll("è", 'e')
        let removeE2 = removeE1.replaceAll("é", 'e')
        let removeU1 = removeE2.replaceAll("ù", 'u')
        let removeC1 = removeU1.replaceAll("ç", 'c')
        let finalValue = removeC1.split(" ").join("-");
        output.innerText = finalValue;
    })
    
    button.addEventListener('click', ()=> {
        let copyText = output.innerText;
        // copyText.select();
        navigator.clipboard.writeText(copyText);
        let icon = button.children[0]
        icon.innerText = 'done';
        const back = () => {

            icon.innerText = "content_copy"
        }
        setTimeout(function(){back()}, 1000)
    })
}

url()

function upper(){
    const main = document.querySelector('#upper')
    const input = main.children[0];
    const output = main.children[1].children[0];
    const button = main.children[1].children[1];

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
        let icon = button.children[0]
        icon.innerText = 'done';
        const back = () => {

            icon.innerText = "content_copy"
        }
        setTimeout(function(){back()}, 1000)
    })
}

upper()
