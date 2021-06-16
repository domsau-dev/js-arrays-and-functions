"use strict";

let arr = [];

function addArrayElement(array) {
    array[array.length] = document.getElementById("input").value;
    console.log(array); 
}