var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {


  chocolateBars = ["Baby Ruth", ...chocolateBars]

}

function destructivelyAddElementToBeginningOfArray() {

  chocolateBars.unshift("Baby Ruth")

}

function addElementToEndOfArray() {

  [...chocolateBars, "milkyway"]

}

function destructivelyAddElementToEndOfArray() {

  chocolateBars.push("milkyway")

}

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray() {

}
