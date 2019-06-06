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
    var splitString = str.split(' ');
    // console.log(splitString)
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        // console.log(splitString)
    } 
    return splitString.join(' ');
}
console.log(LetterCapitalize("hello today is a good day"));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr) { 
    let min = Math.min(arr[0], arr[1]), max = Math.max(arr[0], arr[1]);
    //th
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
/*  A=65
    a=97
    Z=90
    z=122
*/

function missingLetter(str) {
    for (var i = 0; i < str.length -1; i++) {
        if(str.charCodeAt(i+1) - str.charCodeAt(i) !== 1) {
            return String.fromCharCode(str.charCodeAt(i)+1)
        }
    }
}

console.log(missingLetter("abce"));

// function missingLetter(str) {
//     var i, j = 0, m = 122;
//     if (str) {
//         i = str.charCodeAt(0);
//         while (i <= m && j < str.length) {
//             if (String.fromCharCode(i) !== str.charAt(j)) {
//                 return String.fromCharCode(i);
//             }
//             i++; j++;
//         }
//     }
//     return undefined;
// }

// console.log(missingLetter("abcdf"))



// function missingLetter(str) { 
//     // let newArr = [];
//     function startLoop(num) {
//         for (var i = num; i <= 122; i++) {
//         }
//     }
//             // let convertToLetter = String.fromCharCode(i)
//             // console.log(convertToLetter);
//             // newArr.push(convertToLetter);
//             // console.log(newArr)
//             // for (var x = 0; x < str.length; x++) {
//                 // console.log(x)
//                 //  console.log(str.charAt(x))
//                 let x = 65; y = '';
//                 while(startLoop(str.charCodeAt(0)) <= 122 && x <= str.length) {
//                     if (str.charCodeAt(0) !== startLoop(str.charCodeAt(0))) {
//                         = String.fromCharCode(startLoop(str.charCodeAt(0)));
//                     }
//                 x++;
//                 }
//                 // return undefined;
//             // } 
// }


// console.log(missingLetter("abd"))
// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

//Original code didnt account for bigger numbers
// function hailCaesar(num) {
//     let romanNum = [0, "I","II","III","IV","V","VI","VII","VIII","IX","X"]
//     return romanNum[num];
// }
// console.log(hailCaesar(5))



//help from calvin
function hailCaesar(num){
    var answer = '';
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    debugger;
    for(var key in roman){
        while(num >= roman[key]) {
            answer += key;
            num -= roman[key];
        }
    }
    return answer;
 }
console.log(hailCaesar(999))
// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str) {
    let lowercase = str.toLowerCase();
    let spinalCase = lowercase.replace(/ /g, "-"); //when using replace looking for the variable goes between / /g and g means global, second parameter is what it will be replaced with
    return spinalCase;
}

console.log(spinalTap("hello world, How are you doIng?"))

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.

function sumbFibs(num) {
    var start = 0;
    var next = 1;
    var current;
    var sumOdd = 0;
    for(var i = 0; i <= num; i++) {
        current = start + next;
        start = next;
        next = current;
        if (current % 2 !== 0 && current <= num) {
            sumOdd = current + sumOdd;
        }
    }
    return sumOdd + 1;
}
console.log(sumbFibs(4));