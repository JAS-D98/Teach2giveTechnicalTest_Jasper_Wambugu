//  QUESTION 1: FizzBuzz

/*Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
"FizzBuzz". */

for(let i=1; i<=100; i++){
        if (i%5==0 && i%3==0) {
            console.log("FizzBuzz");
        }else if(i%5==0){
            console.log("Buzz");
        }else if(i%3==0 ){
            console.log("Fizz")
        }
}
/* Answer to Question 1; */
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz


// QUESTION 2: Fibonacci Sequence
/* Write a program to generate the Fibonacci sequence up to 100. */

const Fibonacci=(limit)=>{
    let array=[0,1];
    let sum = array[array.length - 1] + array[array.length - 2];
    while (sum < limit) {
        array.push(sum);
        sum = array[array.length - 1] + array[array.length - 2]
        console.log(sum)
    } 
    return array;  
}
console.log(Fibonacci(100))

Fibonacci(100);

// Answer to Question 2
// [
//     0,  1,  1,  2,  3,
//     5,  8, 13, 21, 34,
//    55, 89
//  ]



// QUESTION 3: Power of Two
/* Write a program that takes an integer as input and returns true if the input is a power of two. */
const powerOfTwo = (input) =>{
  let powerValue=Math.log(input)/ Math.log(2);

  if(powerValue-Math.floor(powerValue)>0){
    return false;
  }else{
    return true;
  }

}
console.log(powerOfTwo(45))
powerOfTwo(45);

// Answer to Question 3
// true


// // Question 4: Capitalize Words
// /* Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string. */

const wordCapitalizer=(input)=>{
    let sentence=input;
    let stringCapitalization =(string)=> string[0].toUpperCase()+string.slice(1).toLowerCase();
    let capitalizeWords=(string)=>string.split(' ').map(stringCapitalization).join(' ');
    console.log(capitalizeWords(sentence));
    return (capitalizeWords(sentence));
}
wordCapitalizer("hi bill How Are you doing?");

// // Answer to Question 4;
// // Hi Bill How Are You Doing?


// // Question 5: Reverse Integer
// /* Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering. */

const Reversal=(input)=>{
    let num=input;
    let convertedNumber=num.toString();
    
    let numCountArray=[];
    
    console.log(convertedNumber);
    
    
    for (let i = convertedNumber.length-1; i >=0; i--) {
        
        numCountArray.push(convertedNumber[i]);
    }
    console.log(numCountArray.join(""));
}
Reversal(50)
// // Answer to Question 5
// 50
// 05
// 106
// 601


// // QUESTION 6: Count Vowels
// /* Write a program that counts the number of vowels in a sentence. */

const sentenceVowel =(input)=>{
    let word =input;
    let converter = word.toLowerCase();
    
    const vowelArray = ["a", "e", "i", "o", "u"];
    let count=[];
    
    let vowelCount = 0;
    
    for (let i = 0; i < converter.length; i++) {
      if (vowelArray.includes(converter[i])) {
        vowelCount++;
        if (!count.includes(converter[i])) {
            count.push(converter[i])   
        }
      }
    }
    
    console.log(`Total number of vowels that appear: ${vowelCount} with ${vowelCount-count.length} repeated vowels.`);
    console.log(`Vowels displayed on (${word}) are: ${count} equal ${count.length}`);
    return (`Total number of vowels that appear: ${vowelCount} with ${vowelCount-count.length} repeated vowels. Vowels displayed on (${word}) are: ${count} equal ${count.length}`);
}

sentenceVowel("Hello World");

// // Answer to Question 6;
// /* Total number of vowels that appear: 3 with 1 repeated vowels.
// Vowels displayed on (Hello World) are: e,o equal 2 */