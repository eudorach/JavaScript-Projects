function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack=new Vehicle("Dodge","Viper",2020,"Red"); //the Vehicle() is the constructor
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML=
    "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " +Erik.Vehicle_Year;
}

function Family(Name, Age, Role) {
    this.Family_Name=Name;
    this.Family_Age=Age;
    this.Family_Role=Role;
}

var Yang=new Family("Yang Jo", 55, "Dad");
var Rebekah=new Family("Rebekah", 57, "Mom");
var Gideon=new Family("Gideon", 31, "Brother");
var Rachel=new Family("Rachel", 29, "Self/Daughter");

function myFamily() {
    document.getElementById("New_and_This") .innerHTML="My mother's name is " +Rebekah.Family_Name +" and she is "+Rebekah.Family_Age+" years old.";
}

function count_Fxn() {
    document.getElementById("Nested_Function") .innerHTML=count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1};
        plus_one();
        return starting_point;
    }
}