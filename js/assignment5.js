/*
Date: 2/23/2020
Author: Anthony Machniak
Class: CITW - 165
Exercise: Assignment 5 - If statements
*/

function calc(){
        var entry = $("#score").val();
        var entryAsInt = parseInt(entry);
        var alertText = "";

        if (isNaN(entryAsInt) || entryAsInt < 0 || entryAsInt > 100) {
                alertText = "You entered: " + entry + ". Please enter a number between 0 and 100";
        }
        else if (entryAsInt < 60) {
                alertText = concatAlertText(entryAsInt, "F");
        }
        else if (entryAsInt <= 67) {
                alertText = concatAlertText(entryAsInt, "D");
        }
        else if (entryAsInt <= 79) {
                alertText = concatAlertText(entryAsInt, "C");
        }
        else if (entryAsInt <= 89) {
                alertText = concatAlertText(entryAsInt, "B");
        }
        else if (entryAsInt <= 100) {
                alertText = concatAlertText(entryAsInt, "A");
        }

        alert(alertText);
}

function concatAlertText(entry, letter) {
        var numberGrade = "Number grade = " + entry;
        var letterGrade = "Letter grade = " + letter;

        return numberGrade + "\r\n" + letterGrade;
}
