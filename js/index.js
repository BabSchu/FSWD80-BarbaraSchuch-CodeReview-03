//version 1:

/*function calculateInsurance() {
	var name1 = document.getElementById("name").value; //fetches name from input 
	var name = name1[0].toUpperCase() + name1.slice(1); //converts first charakter to uppercase
	var age = Number(document.getElementById("age").value); //fetches age from input and converts it to number
	var horse_power = Number(document.getElementById("horsepower").value); //fetches horsepower from input and converts it to number
	var selCountry = document.getElementById("country"); //fetches selection country and saves it in a var
	var country = selCountry.options[selCountry.selectedIndex].text; //fetches option from selection country as text

	switch (country) {
		case "Austria":
			insuranceAustria = horse_power * 100 / age + 50;
			document.getElementById("textCalc").innerHTML = 
			name + ", your insurance costs "+ Math.round(insuranceAustria) + " Euro";
			break;
		case "Hungary":
			insuranceHungary = horse_power * 120 / age + 100;
			document.getElementById("textCalc").innerHTML = 
			name + ", your insurance costs "+ Math.round(insuranceHungary) + " Euro";
			break;
		case "Greece":
			insuranceGreece = horse_power * 150 / (age + 3) + 50;
			document.getElementById("textCalc").innerHTML = 
			name + ", your insurance costs "+ Math.round(insuranceGreece) + " Euro";
			break;
		default:
			document.getElementById('textCalc').innerHTML= "Please select a country!";
			break;
}	
};

document.getElementById("calcBtn").onclick = calculateInsurance;
*/

//version 2:

function calculateInsurance () {
    var selCountry = document.getElementById("country");
    var country = selCountry.options[selCountry.selectedIndex].text;
    switch (country) {
		case "Austria":
			a = 100;
			b = 50;
			c = 0;
			break;
		case "Hungary":
			a = 120;
			b = 100;
			c = 0;
			break;
		case "Greece":
			a = 150;
			b = 50;
			c = 3;
			break;
		default:
			document.getElementById("textCalc").innerHTML= "Please select a country!";
			break;}

    var x = Number(document.getElementById("horsepower").value);
    var y = Number(document.getElementById("age").value);
    var result = x * a / (y + c) + b;
    var name1 = document.getElementById("name").value;
	var name = name1[0].toUpperCase() + name1.slice(1);
    text = name + ", your insurance costs "+ Math.round(result) + " Euro";
	document.getElementById("textCalc").innerHTML = text;
  }

//traditional DOM eventhandler:

// document.getElementById("calcBtn").onclick = calculateInsurance; 

//DO2 Eventhandler aka Eventlistener:

//var clickbutton = document.getElementById("calcBtn"); // fetches button("Id=calcBtn") from the html and saves in a var
//clickbutton.addEventListener("click",calculateInsurance); // fires function on button click

//same only in one line

document.getElementById("calcBtn").addEventListener("click",calculateInsurance);


//Version 3:

/*function CalcConstructor (parameter1,parameter2,parameter3) {

	this.parameter1 = parameter1;
	this.parameter2 = parameter2;
	this.parameter3 = parameter3;

	this.mes = function (){
		this.age = document.getElementById("age").value;
		this.horsepower = document.getElementById("horsepower").value;
		this.name = document.getElementById("name").value;
		result = Number(this.horsepower) * parameter1 / (Number(this.age) + parameter3) + parameter2;
		resultRounded = Math.round(result);
		document.getElementById("textCalc").innerHTML = this.name + ", your insurance costs " + resultRounded + " €.";
		console.log(result);
	}
}

option1 = new CalcConstructor (100,50,0);
option2 = new CalcConstructor (120,100,0);
option3 = new CalcConstructor (150,50,3);

function choose() {

	var selCountry = document.getElementById("country"); 
	var country = selCountry.options[selCountry.selectedIndex].text;

	if (country == "Austria"){
		option1.mes();
	}
	else if (country == "Hungary"){
		option2.mes();
	}
	else {option3.mes();
	}
}

var clickbutton = document.getElementById("calcBtn");
clickbutton.addEventListener("click", choose);*/