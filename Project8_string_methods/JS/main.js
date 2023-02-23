function sentence() {
    var w_1 = "My name";
    var w_2 = " is Rachel. ";
    var w_3 = "Nice to ";
    var w_4 = "meet you!";
    var all_w = w_1.concat(w_2, w_3, w_4);
    document.getElementById("concat") .innerHTML=all_w;
}

function slice_method() {
    var sentence="I am really glad to be studying coding to make a career change."
    var position=sentence.search("coding");
    var section=sentence.slice(23,39);
    document.getElementById("slice") .innerHTML=section + position;
}