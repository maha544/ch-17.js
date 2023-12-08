//chap.1

alert("Hello");

//chap.2 V ariables for Strings

var myName = "Komal";
myName = "Maha";

var myCountryName = "Pakistan";

console.log (myName , myCountryName);

//chap.3 Variables for Numbers

var amount = 500;

//for addition

var plus = amount + 10;
console.log(plus);

//for subtraction

var sub = amount - 100;
console.log(sub);

//chap. 4 Variable Names Legal and Illegal

// var name_2 (legal)
// var @name  (illegal)
//var name22   (legal)
// var 2name  (illegal)
// var myName  (legal)

//chap.5 Math expressions: Familiar operators

var num = 5+5;
console.log (num);
alert (2+2);

var marks = 50-25;
var totalMarks = marks * 3 ;
console.log (totalMarks);


//chap. 6 Math expressions: Unfamiliar operators

var a = 2;
a = a++; //post-incriment
console.log (a);

var b= 3;
b = ++ b ;  //pri-incriment
console.log(b);

var c=2;
c= c--; //post-decriment
console.log (c);

var d= 6;
d= --d ; //pri-decriment
console.log(d);

//chap. 7 Math expressions: Eliminating ambiguity

var totalAmount = 1+3 *4;
console.log (totalAmount);

var totalCost = (1+3) * 4 ;
console.log (totalCost);

//chap. 8 Concatenating text strings

var announce = "Welcome";
var person = ".Jack";

alert(announce + person + "!" );

//chap. 9 Prompts

var question = "Your species?";
var defaultAnswer = "human";
//var spec = prompt(question, defaultAnswer);

//var numberOfCats = prompt("How many cats?");
//var tooManyCats = numberOfCats + 1;

//chap. 10 if statement

var x =prompt("Where do you live?");
if (x == "karachi"){
    alert("correct");
}

//chap. 11 comparison operators

var firstName =prompt ("what's your first name?");

if (firstName !== "maha"){
    alert("invalid");
}

var lastName =prompt ("what's your last name?")

if (lastName == "javed"){
    alert("valid");
}


//chap. 12 if...else & else if statement

if (firstName == "maha"){
    console.log("valid");
}else {
    console.log("invalid");
}

var game =prompt ("what's your favourite game?");

if (game == "basketball"){
    console.log("good");
}else if (game == "cricket"){
    console.log("good");
}else {
    console.log("not good");
}


//chap. 13 testing sets of conditions


var age = 20;
var cnic = true;

if (age == 20 && cnic ==true ){
    console.log("allow");
}else {
    console.log("not allow");
}


if (age >=20 || cnic == true ){
    console.log("allow");
}else {
    console.log("not allow");
}

//chap. 14 if statement nested

if (age >=18){
    if (cnic == true){
        console.log("allow");
    }else {
        console.log("not allow");
    }
}


//chap. 15 Arrays

var arr =["a", "b", "c", "d", "e"];

//console.log(arr);

//arr[2] = 12;
//console.log(arr);


//chap. 16 Arrays {adding & removing arrays}

//arr.push("10");

//console.log(arr);

//arr.pop("e");
//console.log(arr);


//chap. 17 arrays{removing,inserting & extracting elements}


//arr.shift("a");
//console.log(arr);

//arr.unshift("35");
//console.log(arr);



//var a = arr.slice(1 , 4);
//console.log(a);


var a = arr.splice(0, 3);
console.log(a);



