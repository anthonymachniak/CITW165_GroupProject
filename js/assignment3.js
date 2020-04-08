/*
Date: 1/31/2020
Author: Anthony Machniak
Class: CITW 165
Exercise: Exercise 3
*/

var welcome = 'Welcome back Jonathon. Please confirm your order.';

var letters = 'Montague House';
var numberOfTiles = letters.length;
var costPerTile = 5;
var subTotal = numberOfTiles * costPerTile;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Condensed documentId declarations into jQuery calls.
$('#greeting').text(welcome);
$('#userSign').text(letters);
$('#costPerTile').text('$' + costPerTile);
$('#tiles').text(numberOfTiles);
$('#subTotal').text('$' + subTotal);
$('#shipping').text('$' + shipping);
$('#grandTotal').text('$' + grandTotal);
