// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.
function FirstFactorial(num) {
    if(num==1){
        return 1;
    } else {
        return num * FirstFactorial(num - 1);
    }

}
console.log(FirstFactorial(10));

// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
    if(num==1){
        return 1;
    } else {
        return num + SimpleAdding(num -1);
    }
        
}
console.log(SimpleAdding(10));

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function LetterCapitalize(str) {
    var firstLetter = str.charAt(0).toUpperCase();
    var remainingWord = str.slice(1,100);
    var fullWord = firstLetter + remainingWord; 
    return fullWord;
}
console.log(LetterCapitalize("hello today is a good day"));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr) { 
    let min = Math.min(arr[0], arr[1]), max = Math.max(arr[0], arr[1]);
    // let emptyArr = [];
    // return (max - min +1) * (max + min)/2;
    let sum = max;
    for (var i = min; i < max; i++) {
        sum += i;
    }
    return sum;
}

console.log(rangeRover([1,5]))

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

function missingLetter(str) {
    let letters = /^[A-Za-z]+$/;
    return letters;
}

console.log(missingLetter())
// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

function hailCaesar(num) {
    let romanNum = [0, "I","II","III","IV","V","VI","VII","VIII","IX","X"]
    return romanNum[num];
}
console.log(hailCaesar(5))

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str) {
    let lowercase = str.toLowerCase();
    let spinalCase = lowercase.replace(/ /g, "-");
    return spinalCase;
}

console.log(spinalTap("hello world, How are you doIng?"))

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.

