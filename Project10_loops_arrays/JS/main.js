function call_loop() {
    let i=0;
    let text="";
    while (i<11) {
        text += "<br> Counting from " + i;
        i++;
    }
    document.getElementById("loop").innerHTML= text;
}

function length_fxn () {
    x="What is the number of characters in this sentence?";
    document.write(x.length);
}

var pets = ["Cat","Dog","Lizard","Ferret","Snake","Squirrel","Chinchilla"];
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y<pets.length;Y++) {
        content += pets[Y] + "<br>";
    }
    document.getElementById("for_loops").innerHTML=content;
}

function array_function() {
    var cat_behavior = [];
    cat_behavior [0] = "sleeping";
    cat_behavior [1] = "eating";
    cat_behavior [2] = "playing";
    cat_behavior [3] = "biting";
    cat_behavior [4] = "grooming";
    document.getElementById("array").innerHTML= "One of the most mysterious behaviors of cats is " + cat_behavior[3] +" because they do it out of nowhere.";
}

function constant_fxn() {
    const my_cat = {name: "Nyang", age: "15", breed: "longhair"};
    my_cat.name = "Nyangi";
    my_cat.color = "grey";
    document.getElementById("constant").innerHTML="My cat's name is " + my_cat.name + " and the color of her hair is " + my_cat.color + ".";
}

var x=10;
document.write(x);
{let x=15;
document.write("<br>" + x)}

let Rachel = {
    age: "29",
    occupation: "physician assistant",
    hobby: "Brazillian jiu jitsu",
    introduction:function () {
        return "Rachel is a " + this.age + " year-old who is currently working as a " +this.occupation+ ". In her free time she likes to practice " +this.hobby+".";
    }
};
document.getElementById("rachel").innerHTML = Rachel.introduction();