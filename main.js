let screen = document.getElementById('screen');
let preview = document.getElementById('preview');
buttons = document.querySelectorAll('button');
let screenValue = "";
let previewValue = "";
 for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText)
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '2x'){
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '='){
          screen.value = eval(screenValue);
        }
        else if (buttonText == 'del'){
            screenValue = screen.value.slice(0, - 1);
            screen.value = screenValue;
        }
        else if (buttonText == '+/-'){
            document.getElementById("screen").value *= (-1);
             screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;   
        }

        if(screenValue.length > 12){
            document.getElementById('screen').style.fontSize = "35px";
        }
        else{
            document.getElementById('screen').style.fontSize = "50px";
        }

        if (screenValue.length > 20){
            alert("max number reached")
            screenValue = "e";
        }
    })
 }
 previewValue = preview.value;
 