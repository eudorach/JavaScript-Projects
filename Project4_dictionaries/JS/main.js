function my_Dictionary() {
    var pet_1 = {
        species:"cat",
        breed:"grey longhair",
        name:"Nyang",
        age:"15"
    };
delete pet_1.name;
    document.getElementById("Dictionary") .innerHTML = pet_1.name;
}