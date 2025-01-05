"use strict";
//document.write ( "<div style = background-color:pink;height:500px;width:500px;></div> " );

let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');

alert(Number (num1) + Number (num2)); 

let side = prompt('Enter side length');
alert (`Area = ${Number (side) * Number (side)}`);

let length_rectangle = prompt('Enter the length of the rectangle ');
let width_rectangle = prompt ('Enter the width of the rectangle');

alert (`Perimeter = ${Number(2 * length_rectangle) + Number (2 * width_rectangle)}`);