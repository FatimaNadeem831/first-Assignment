// define a function to print each magician name from an array
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// define an array containing magician name
let magician_names = ["harry poter" , "fatima" , "hamza"];

// call the function to print each magician name
show_magician(magician_names);
