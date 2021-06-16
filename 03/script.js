"use strict";

let arrayOfDivs = [];

function createDivElements(array) {
    array[array.length] = document.createElement("div");
    array[array.length - 1].className = "elementas-" + (array.length - 1);
    document.getElementById("container").appendChild(array[array.length - 1]);
}