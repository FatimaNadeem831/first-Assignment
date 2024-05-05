"use strict";
let userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
userName = [];
if (userName.length === 0) {
    console.log("your array in empty we need to find some users!");
}
else {
    // using foreach loop on array
    userName.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`hello ${oneUser}, whould you like to see a status report?`);
        }
        else {
            console.log(`hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
