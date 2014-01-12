// INCHES TO CENTIMETERS CALCULATOR

	//Introduce the number of inches
	//Convert the inches into centimeters
	//Print centimeters



function ConvertInchesToCentimeters(){
	var inches = parseInt(document.calculator.setInches.value);
	var inchesPerCentimeters= 2.54;

		centimeters = inches * inchesPerCentimeters;
		document.calculator.getCentimeters.value = centimeters;
}



