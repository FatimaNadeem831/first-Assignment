// define a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magacians) {
    return magacians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containing magician name
var magician_names = ["harry poter", "fatima", "hamza"];
var great_magicians = make_great(magician_names);
// call the function to print each magician name
show_magician(great_magicians);
// console.log(great_magicians)
