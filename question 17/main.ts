// Q16
// Creating a Guest List Array
let guestList = ["hamza", "usman", "ayesha", "areeba"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amirr");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner.");

// Adding a new value at staring index of array 
guestList.unshift("ali");

// Adding a new value at endex of array
guestList.push("Zain");

// Get a middle index of our guest list array
let middleIndex : number = Math.floor(guestList.length / 2 );

//Adding a new uest to middle index of array
guestList.splice(middleIndex, 0, "osama");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest},whould you loke to dinner with me`));

// Q17

// inform that only two guests can be invited for dinner
console.log("unfortunately , the new dinner table wont arive on time, so I can only invite two guests to dinner with me " );

// using while-lop remove guests from the array until only two names remain 
while(guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`sorry, ${removedGuest} I cant  invite you to dinner `);
}
// sending a invitation to the last two guest on the list
console.log("Invitation to last 2Guests");

guestList.forEach(Lasttwo => console.log(`Luckly ${Lasttwo},you are still invited to dinner`));

// removing last two guest on the list
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);

