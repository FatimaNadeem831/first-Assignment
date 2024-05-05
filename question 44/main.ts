// define a function with a rest parameter that accept item arugments representing our sandwich
function makeSandwich(...items : string[] ) {
    console.log("\nmaking a sandwich with the following items:\n");
    
    items.forEach(singleItem => console.log(singleItem));

    console.log("\nnow enjoy sandwich");
};

// call the function 3 times with 3 different numbers of argument
makeSandwich("chicken" , "cheese" , "mayo" , "egg");

makeSandwich("bread" , "butter");

makeSandwich("bread" , "butter" , "mayo" , "egg" , "cheese" , "chicken" , "lettuce" , "tomato");


