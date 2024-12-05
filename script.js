const input = document.querySelector("#inputText");
const buttons = document.querySelectorAll("button");
const storeValue = document.querySelector("#store-value");


function calculate(experssion) {
    console.log(experssion);

    try{
        return new Function ('return ' + experssion)();
    } catch (error){
        return 'Malformed Operation'
    }
}

function operation (buttonValue){
    if(buttonValue === 'C'){
        input.value = '';
        storeValue.innerText ='';
    }else if (buttonValue === 'DEL'){
        input.value = input.value.slice(0, -1)
    }else if (buttonValue === '='){
        input.value = calculate(input.value)
        storeValue.innerText = "Prev \n"+ input.value;
        storeValue.addEventListener("click", () =>{
            storeValue.innerText = '';
        })
    }else{
        input.value += buttonValue;
    }
    
}

buttons.forEach((button) =>{
 let buttonValue = button.innerText;
 button.addEventListener("click", () => {
    operation(buttonValue)
 });
});
