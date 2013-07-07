/**
 * Node.JS HW1 submission for Cousera Startup Engineering course.
 *
 * Writes the first 100 prime numbers to a CSV file
 *
 * @author Minh Nguyen @ www.minh.io
 */

var fs = require('fs');
var outfile = "primes.csv";
var primesToWrite = 100;

function isPrime(number) {
        var numFactors = 1;
        var isPrime = false;
        for (var i = 2; i <= number; i++) {       
                if (number % i == 0) {
                        numFactors++;
                }
        }
        
        if (numFactors == 2) {
                isPrime = true;
        }
        return isPrime;
}


numPrimes = 0;
number = 2;
while(numPrimes <= primesToWrite) {
        if (isPrime(number)) {
                var output = number;
                if (numPrimes < 100) {
                        output += ",";
                }
                fs.appendFile(outfile,output);  
                numPrimes++;
        }
        number++;
}


console.log("Script: " + __filename + "\nWrote to: " + outfile);
