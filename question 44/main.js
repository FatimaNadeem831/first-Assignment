// define a function with a rest parameter that accept item arugments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log("_" + singleItem); });
    console.log("\nnow enjoy sandwich");
}
;
// call the function 3 times with 3 different numbers of argument
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
