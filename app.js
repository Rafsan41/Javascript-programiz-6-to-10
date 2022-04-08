

//problem 06 : kilometer to miles convert
const kilometers = 10;

const factor = 0.621371;

const miles = kilometers * factor
 
console.log(`${kilometers} kilometers is equal to ${miles} miles.`)

//problem 07:celsius to fahrenheit
const celsius = 38;

const fahrenheit = (celsius * 1.8) + 32;
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

//problem 08:Generate a Random Number
const randomNumber = Math.random()
console.log(randomNumber);

//problem 09:Check Number Type with if...else if...else

const number = parseInt(prompt('enter a number to check with if....else if... else'));

if (number > 0) {
    console.log('the number is positive')
}
else if(number == 0) {
    console.log('the number is Zero');
}
else {
    console.log('the number is Negetive')
}

//problem 10: Check if a Number is Odd or Even
const number2 = parseInt(prompt('enter a number check even or odd'))

if (number2 % 2 == 0) {
    console.log('the number is even')

}
else {
    console.log('the number is odd')
}
