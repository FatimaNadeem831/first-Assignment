// define a function to print each magician name from an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function make to make magicians great through map.() it will modify array 
function make_great(magacians: string[]){
    return magacians.map(name => `The Great ${name}`); 
}

// define an array containing magician name
let magician_names = ["harry poter" , "fatima" , "hamza"];

// making a copy of original array through .slice() funcion
let copy_magician_names = magician_names.slice();

// modify the copied array to include "the great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays originals and copied

// original
console.log("original array\n");
show_magician(magician_names);

// copied
console.log("\ncopied array\n");
show_magician(copy_great_magicians);
