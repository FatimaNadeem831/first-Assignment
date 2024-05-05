// define a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function make to make magicians great through map.() it will modify array 
function make_great(magacians) {
    return magacians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containing magician name
var magician_names = ["harry poter", "fatima", "hamza"];
// making a copy of original array through .slice() funcion
var copy_magician_names = magician_names.slice();
// modify the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays originals and copied
// original
console.log("original array\n");
show_magician(magician_names);
// copied
console.log("\ncopied array\n");
show_magician(copy_great_magicians);
