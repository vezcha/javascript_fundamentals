
//Single line comment

/*
	BLOCK
			COMMENT

*/

//One statement, multiple declarations
var person = "John Doe", carName = "Volvo", price = 200;

//javascript data types
var length = 16; //Number
var lastName = "Johnson" //String
var cars = ["Saab", "Volvo", "BMW"] //Array
var isTall = false; //Boolean
var x = {
	firstName: "John",
	lastName: "Doe"
	};	//Object

//finding the type of Javascript variable
typeof "John" //returns String
typeof 3.14 //returns Number
typeof false //returns boolean
typeof [1,2,3,4] //returns object
typeof {name:'John', age:34} //returns object

var z;
typeof z //returns un	

typeof "" //returns string	
typeof null //returns object

null === undefined //returns false
null == undefined //returns true
	
//Create function
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

//returns function definition not the result!
document.getElementById("demo").innerHTML = toCelsius;

//returns function result
document.getElementById("demo").innerHTML = toCelsius(4);


function displayData(){
	window.alert("Data displayed through window alert");
	document.write("Writing directly to HTML document");
	
	var demo = document.getElementById("demo");
	demo.innerHTML = "write to HTML element";
	
	console.log("Display data in browser console log");
	
}

//JavaScript Objects
var person = {
	firstName: "John",
	lastName: "Smith",
	age: 24,
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
};

//accessing properties or methods
person.lastname;
person[lastname];
person.fullname();


//DO NOT DEClARE DATA TYPES AS OBJECTS, BAD CODE BELOW
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       //	Declares z as a Boolean object



//JavaScript string operations

var testString = "apple"
var sentence = "The dog ran away";

testString.length; //gets size of string

testString.indexOf("ppl"); //returns index of first occurence of text in string
testString.lastIndexOf("p"); //returns the index of LAST occurence of text
testString.search("pple") //same as indexOf but can take more powerful search values

sentence.slice(5,8); //returns 'dog'
sentence.slice(-5, -1) //returns away
sentence.slice(5); //returns 'dog ran away'

sentence.substring(5,8) //returns 'dog' same as slice except can't accept negative values
sentence.substr(5,3) //returns 'dog' but second parameter deteremines the LENGTH

sentence.replace("dog", "cat");

var text3 = sentence.concat(testString, sentence); //concatenates two strings

sentence.charAt(0); //returns 'T'
sentence[0] //returns 'T'

sentence.split(" "); //returns array with delimiter of space




//Javascript AJAX
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}





//Array operations
