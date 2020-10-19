let input   = document.querySelector('.inp');
let button  = document.querySelector('.btn');



let randomNumber  = Math.floor(Math.random() * 1001);
let tries         = 0;
let chosenNumber;

function Check(number){

    let instruction = document.createElement('div');

    if(number < randomNumber){
        instruction.textContent = "#" + tries + " ( " + number + " ) " + "it's higher !";
        instruction.className   = "instruction plus"
    }
    else if(number > randomNumber){
        instruction.textContent = "#" + tries + " ( " + number + " ) " + "it's lower !";
        instruction.className   = "instruction minus";
    }
    else{
        instruction.textContent = "#" + tries + " ( " + number + " ) " + "congratulations you found the right price !";
        instruction.className   = "instruction final";
        input.disabled = true;
    }
    document.querySelector('.last').prepend(instruction);
}

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        alert("input should be a number");
    }
})



button.addEventListener('click', () => {
    if(isNaN(input.value) || input.value == ''){
        input.style.borderColor = "red";
    }
    else{
        tries++;
        input.style.borderColor = 'silver';
        chosenNumber = input.value;
        input.value  = '';
        Check(chosenNumber);
    }
});

window.addEventListener('keydown',(e)=>{ 
    if (e.keyCode === 13) {
        if(isNaN(input.value) || input.value == ''){
            input.style.borderColor = "red";
        }
        else{
            tries++;
            input.style.borderColor = 'silver';
            chosenNumber = input.value;
            input.value = '';
            Check(chosenNumber);
        }
    }
});