// array of current user 
let current_user = ["Usman", "ali", "Areeba", "Zain", "Osama"]

// array of new user
let new_user = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// loop through new_users to check for userName avaibility   
new_user.forEach(new_one_user => {
    // making a condition for username already exist and save in our_condition variable 
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // print different messages using if_else statements
     if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
     }else {
        console.log(`this Username ${new_one_user} is available`)
     }
})