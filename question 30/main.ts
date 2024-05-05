// creating a array
let userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];

// using foreach loop on array

userNames.forEach(oneUser => {
    if (oneUser === "admin"){
       console.log(`hello ${oneUser}, whould you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again.`)
    } 
} )