var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {


  chocolateBars = ["Baby Ruth", ...chocolateBars]
  return chocolateBars

}

function destructivelyAddElementToBeginningOfArray() {

  chocolateBars.unshift("Baby Ruth")
  return chocolateBars

}

function addElementToEndOfArray() {

  chocolateBars = [...chocolateBars, "milkyway"]
  return chocolateBars

}

function destructivelyAddElementToEndOfArray() {

  chocolateBars.push("milkyway")
  return chocolateBars

}

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray() {

}
