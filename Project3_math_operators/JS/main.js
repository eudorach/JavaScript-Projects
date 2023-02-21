function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math") .innerHTML="2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math_2") .innerHTML="5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("Math_3") .innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var division=48/6;
    document.getElementById("Math_4") .innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math2 = (1+2)*10/2-5;
    document.getElementById("Math_5") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+simple_Math2
}

function modulus_Operator() {
    var simple_Math3 = 25%6;
    document.getElementById("Math_6") .innerHTML = "When you divide 25 by 6 you have a remainer of: "+ simple_Math3;
}

function negation_Operator() {
    var x=10;
    document.getElementById("Math_7") .innerHTML = -x;
}

var X =5;
X++;
document.write(X);
document.write("<br>");
var Y=5.25;
Y--;
document.write(Y);

window.alert(Math.random()); //to return a random number between 0 and 1
//if want to display a random number in a range (ex. 0 and 100), (Math.random() *100);