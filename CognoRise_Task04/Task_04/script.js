const display=document.getElementById("display")
// const clear=document.getElementById("clr")

function displayTo(input){
    display.value +=input;
}
function allClear(){
    display.value="";
}
function calc(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value="Error"
    }
}

function del(){
    display.value=display.value.slice(0,-1)
}