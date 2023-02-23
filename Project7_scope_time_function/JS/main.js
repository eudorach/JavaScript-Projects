var x=15;

function add() {
    document.write(x+15);
}

function subtract() {
    document.write(x-7);
}

add();
document.write("<br>");
subtract();

function multiply() {
    var y=2;
    document.write(y*9);
}

function divide() {
    console.log(document.write(y/10));
}

document.write("<br>");
multiply();
document.write("<br>");
divide();

function greetings() {
    if (new Date().getHours()<12) {
        document.getElementById("Date") .innerHTML="Good morning!";
    }
    if (new Date().getHours()>12) {
        document.getElementById("Date") .innerHTML="Good afternoon!";
    }
}

function greeting() {
    Time = document.getElementById("time").value;
    if (Time >= 12) {
        greet = "Good afternoon";
    }
        else {
            greet = "Good morning";
        }
    document.getElementById("Greeting") .innerHTML = greet;
}

function time_function() {
    var time=new Date().getHours();
    var Reply;
    if (time<12==time>0){
        Reply="It is morning";
    }
    else if(time>= 12==time<18){
        Reply="It is the afternoon";
    }
    else {
        Reply="It is evening";
    }
    document.getElementById("time_of_day") .innerHTML=Reply;
}