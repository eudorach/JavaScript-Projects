function first_function () {
var str="This is the first button test";
document.getElementById("Button-test") .innterHTML=str;
}

function myFunction() { //identifying the function name
    var sentence="I am learning";
    sentence += " a lot from this book!"; //concatenating the string
    document.getElementById("Concatenate") .innerHTML=sentence; 
}