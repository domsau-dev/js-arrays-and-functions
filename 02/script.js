"use strict";

let numbers = [25, 9, 4, 6, 8, 18];
squareRoot(numbers);

function squareRoot(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Square root of " + array[i] + " is " + array[i] ** 0.5)
    }
}