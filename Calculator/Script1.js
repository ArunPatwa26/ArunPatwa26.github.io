
var input = document.getElementById("inputvalue")

function addtodisplay(value) {
    input.value += value
    console.log("value" + value)
}

function Cancel() {
    input.value = "";
}
function symbols(value) {
    input.value += value

}
function Delete() {
    input.value = input.value.slice(0, -1)
}

function result1() {


    input.value = eval(input.value);
    
    
    // eval("console.log('text)");
}
