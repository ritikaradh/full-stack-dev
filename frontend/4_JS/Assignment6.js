//1.    Write a JavaScript function that returns array elements larger than a number.

function largerElements(arr, num){
    returnArr = [];
    for (let i of arr){
        if (i > num){
            returnArr.push(i);
        }
    }
    return returnArr;
}

let arr = [21, 32, 65, 44, 12, 54, 145, 45, 86, 31];

console.log(largerElements(arr, 54));


//2.    Write a JS function to extract unique characters from a string.
        //e.g.,     str = "abcdabcdefgggh"
        //          ans = "abcdefgh"

function uniqueCharacters(str){
    returnStr = "";
    for (let i of str){
        if(returnStr.indexOf(i) == -1){
            returnStr += i;
        }
    }
    return returnStr;
}

let str = "abcdabcdefgggh"

console.log(uniqueCharacters(str));


//3.    Write a JS function that accepts a list of country names as input and returns the longest country name as output.
        //e.g.,
            //  country = ["Australia", "Germany", "United States of America"]
            //  output = "United States of America"

function longestCountryName(arr){
    let longestCountryName = "";
    for (let country of arr){
        if (longestCountryName.length < country.length){
            longestCountryName = country;
        }
    }
    return longestCountryName;
}

let country = ["Australia", "Germany", "United States of America"];
console.log(longestCountryName(country));


//4.    Write a JS function to count the number of vowels in a string arguement.

function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let character of str){
        if (vowels.indexOf(character.toLowerCase()) != -1){
            count += 1;
        }
    }
    return count;
}

let testString = "Ritika Upadhyay";
console.log(countVowels(testString));


//5.    Write a JS function to generate a random number within a range (start, end).

function generateRandomNumber(start, end){
    randomNumber = Math.floor(Math.random() * (end - start)) + start;
    return randomNumber;
}

console.log(generateRandomNumber(4,10));