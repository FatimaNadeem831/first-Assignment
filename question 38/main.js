"use strict";
// describe a function
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country} `);
}
// calling a function 
describe_city("karachi");
describe_city("lahore");
describe_city("berlin", "germany");
