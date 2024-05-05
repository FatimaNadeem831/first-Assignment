// define the make_album function 
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating 3 variable with different values 
var album1 = make_album("fatima", "album title 1");
var album2 = make_album("hamza", "album title 2");
// calling a make album function with third parameter
var album3 = make_album("ali", "album title 3", 10);
// print values of our object created my function
// printing the variables 
console.log(album1);
console.log(album2);
console.log(album3);
