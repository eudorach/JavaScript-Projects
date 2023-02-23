document.write(typeof "Rachel");
document.write("<br>");
document.write("15"+25);
document.write("<br>");
document.write(10>5);
document.write("<br>");
document.write(10<5);
console.log(4*4);
console.log(10>20);
document.write("<br>");
document.write(10==2*5);
document.write("<br>");
document.write(15==10+4);
document.write("<br>");
var x = 10;
    y = 10;
    document.write(x===y);

document.write("<br>");

var a = "ten";
    b = 10;
    document.write(a===b);

document.write("<br>");

var r = 10;
    s = "10";
    document.write(r===s);

document.write("<br>");

var t = "word";
    w = "tree";
    document.write(t===w);

document.write("<br>");

document.write(10>5 && 4<5);
document.write("<br>");
document.write(10>5 && 15<10);
document.write("<br>");
document.write(15<20 || 20>10);
document.write("<br>");
document.write(10>10 || 20>30);

function test() {
    document.getElementById("test") .innerHTML=-10/0; //10/0 gives infinity, -10/0 gives -infinity
}

function test_2() {
    document.getElementById("test") .innerHTML= isNaN('-2'); //'this' gives true, -2 gives false
}

function not_Function() {
    document.getElementById("Not") .innerHTML = !(20>10);
}

function not_Function2() {
    document.getElementById("Not2") .innerHTML = !(10==3);
}