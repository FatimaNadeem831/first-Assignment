"use strict";
// making a array of countries and print its orignal order
let countriesTovisit = ["korea", "china", "japan", "greenland"];
console.log("orignal order", countriesTovisit);
//print the arrya in alphabetical order without modifying the actual array list
console.log("Alphabetical order:", [...countriesTovisit].sort());
// show that tha array is still in its orginal order
console.log("still in orginal order:", countriesTovisit);
// print the array in reverse order without modifying the actual array list
console.log("reverse order:", [...countriesTovisit].reverse());
//show that tha array is still in its orginal order
console.log("still in orginal order:", countriesTovisit);
// we have changed the orginal array order now
console.log("orginal array reversed:", countriesTovisit.reverse());
// print the array to show that its back to its orignal order
console.log("back to orignal order:", countriesTovisit.reverse());
// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesTovisit.sort());
// we have changed again the orginal array order again
console.log("orginal array reversed again:", countriesTovisit.reverse());
