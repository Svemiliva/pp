/*Write a function that checks if a given string is a valid hexadecimal color.*/

function isHexa(string) {
  var validHex = false;
  var numLength = string.length;
  var parsedNum = parseInt(string, 16);
  console.log(parsedNum);
  if (!isNaN(parsedNum)) {
    validHex = true;
  }
  return validHex;
}

console.log(isHexa("CD5C5C"));

/* Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/

function validator(
  stringValidator,
  passwordValidator,
  colorValidator,
  yearValidator
) {
  var newobject = {};
  newobject.stringvalidator = stringValidator;
  newobject.passwordValidator = passwordValidator;
  newobject.colorValidator = colorValidator;
  newobject.yearValidator = yearValidator;
  return newobject;
}
//////////////////////////////
function checkIfStringIsWrittenInCapitals(string) {
  var string1 = string.toUpperCase();
  if (string == string1) {
    return true;
  }
}
function checkIfStringContainsDigits(string) {
  var result;
  for (var i = 0; i < string.length; i++) {
    if (isFinite(parseInt(string[i]))) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

function checkIfInInterval(year) {
  var result;
  if (year >= 1900 && year <= 2018) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function checkIfStringIsValidHexadecimalColor(string) {
  var result = true;
  if (string[0] != "#") {
    result = false;
    return result;
  }
  if (string.length < 4 || string.length > 7) {
    result = false;
    return result;
  }

  var listOfValid = ["a", "b", "c", "d", "e", "f", "1", "2"];

  var stringWithoutHashTag = string.split("#")[1];
  if (!isFinite(Number("0x" + stringWithoutHashTag))) {
    result = false;
  }

  return result;
}

var nekiobjekat = validator(
  checkIfStringIsWrittenInCapitals("BHBHJ"),
  checkIfStringContainsDigits("number3"),
  checkIfStringIsValidHexadecimalColor("#AACCFF"),
  checkIfInInterval(2018)
);
