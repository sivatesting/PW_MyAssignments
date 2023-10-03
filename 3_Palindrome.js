//Write a program to find out if a given number is palindrome or not.

//let number = 45

let number = prompt(`Enter a number`)
var remainder, temp, reversedNumber = 0;
temp = number;

// our reverse logic for numbers
while(number > 0)
{
    remainder = number % 10;
    number = parseInt(number / 10);
    reversedNumber = reversedNumber*10 + remainder;
}
//check whether the number is palindrome
if(reversedNumber == temp)
{
    console.log(`The given number ${temp} is Palindrome`);
}
else
{
    console.log(`The given number ${temp} is not palindrome`);
}