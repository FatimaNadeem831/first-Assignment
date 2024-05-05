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

// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

// call show_magicians that show modifed list ofmagicians
show_magician(great_magicians);
