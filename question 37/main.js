"use strict";
// making a function 
function make_shirt(size = "large", printMessage = "i love typescript") {
    console.log(`\ncreating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// calling a function with by-default values
make_shirt();
// calling a function now with medium size and default message
make_shirt("medium");
// calling a function now with small size and also different print message
make_shirt("small", "i love javacript");
