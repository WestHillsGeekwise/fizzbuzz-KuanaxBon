// Write a program that will output all the numbers from 1 to 100 in HTML.
// If a number is divisible by 3, instead of the number, output "Fizz".
// If a number is divisible by 5, output "Buzz".
// If a number is divisible by both 3 and 5, output "FizzBuzz".

var numberButton = document.getElementById("numberButton");
var numberButton = document.getElementById("numberButton");
var FizzBuzzButton = document.getElementById("FizzBuzzButton");

var allNumbers = document.getElementById("allNumbers");
var numberToHundred = new Array(100);

function addNumbers()
{
  for (var i=0; i<numberToHundred.length; i++)
  {
    numberToHundred[i] = i + 1 + " " ;
  }
  allNumbers.innerHTML += numberToHundred;
}

function addFizzBuzz()
{
	for (var i=1; i<numberToHundred.length+1; i++)
  {
		if( i % 3 === 0 && i % 5 === 0)
		{
			allNumbers.innerHTML += "FizzBuzz, ";
		}

if(i % 3 === 0)
		{
			allNumbers.innerHTML += "Fizz, ";
		}
	if(i % 5 === 0)
		{
			allNumbers.innerHTML += "Buzz, ";
		}
		else
		{
			allNumbers.innerHTML += i + ", ";
		}
	}
}


numberButton.addEventListener("click", addNumbers);
FizzBuzzButton.addEventListener("click", addFizzBuzz);
