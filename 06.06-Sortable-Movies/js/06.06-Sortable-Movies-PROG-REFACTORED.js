// Lesson 06.06 - PROG REFACTORED

// RegEx test: removing all punctuation from a string
let str = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
let noPunc = str.replace(/[.,':\/#!$%\^&\*;{}=\-_`~()]/g, "")
                .replace(/\s{2,}/g, " ")
                .replace("punc", "no punc");
;
console.log('noPunc', noPunc);
// \s means "match whitespace"
// \s{2,} means match 2 or more spaces together (because you do not want to remove single spaces)
// /g means global (do all instances)

// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder');

// 8. Set up a loop to iterate the **movies** array:
// for(let i = 0; i < movies.length; i++) {
// refactor for loop using forEach()
movies.forEach(movie => {
    // 9. Inside the loop, start by simplifying the current movie object:
    // refactor: get rid of this line cuz forEach does not use movies[i]
    // const movie = movies[i];

    // 10. Next, get the **mins** property, and simplifiy it as a variable:
    let mins = movie.mins;

    // 11. Get the **hours** by dividing **mins** by **60** and rounding down:
    let hours = Math.floor(mins / 60); // Math.floor(131 / 60) = 2

    // 12. Use modulo **%** to get the remainder minutes:
    mins = mins % 60; // 131 % 60 = 11

    // 13. Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.

    // 14. Add a key, **hrMin**, to the object. The value is the **hours:mins** format:
    movie.hm = `${hours}h ${mins}m`;

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:
    let imgFile = movie.name.toLowerCase();

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words:
    // imgFile = imgFile.replaceAll(" ", "-");
    // imgFile = imgFile.replaceAll(" ", "-");
    // '2001 -a-space-odyssey.jpg'

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.
    // imgFile = imgFile.replaceAll(",", "");
    // imgFile = imgFile.replaceAll("'", "");
    // imgFile = imgFile.replaceAll(":", "");
    // imgFile = imgFile.replaceAll(".", "");
    // imgFile = imgFile.replace(/[,':.&#@$*]/g, "").replace(/\s{2,}/g, " ");
    imgFile = imgFile.replace(/[,':.&#@$*]/g, "");
    imgFile = imgFile.replaceAll(" ", "-");

    // refactor: punctuation replacement using ReGex

    // 18. Complete the file name by tacking on '.jpg' at the end:
    imgFile += '.jpg';

    // 19. Add the **imgFile** property to the object:
    movie.image = imgFile;

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // make a new name where "A " and "The " are replaced with ""
    let name2 = movie.name.replace("A ", "");
    name2 = name2.replace("The ", "");
    // add name2 as a new propertie of movies
    movie.name2 = name2; // the name without a leading "A" or "The"

    // 20. Still in the loop, get the movie's first two and first four characters:

    // 21. If the first two characters are "A ", make a new property **noAThe**, set equal to the full name, starting at the third character and going to the end: 

    // 22. Else if the first four characters are "The ", make a new property **noAThe**, set equal to the full name, starting at the fifth character and going to the end: 

    // 23. Else, the movie does not start with "A" or "The", so just set **noAThe** to equal the original name:

// refactor: close forEach
});
//} // end loop

// 24. Call the **renderMovies()** function. This function runs on page load when the loop ends, and also whenever a choice is made to the **Sort by..** menu.

console.log(movies);
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:

renderMovies(); 
// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 22. Define the **renderMovies()** function. First thing to do is clear the **movieHolder** of any existing content:
function renderMovies() {
    // alert("renderMovies says Hola!");
    movieHolder.innerHTML = ""; // empty out the movie holder to make way for a fresh rendering of the movies

    // for(let i = 0; i < movies.length; i++) {
    // refactor for loop as forEach()
    movies.forEach(movie => {
        // 27. Set up a loop to iterate the movies array and simplify the current movie by passing it to a variable:
        // const movie = movies[i];
        
        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        const moviePoster = new Image();
        moviePoster.src = `images/${movie.image}`;
        divvy.appendChild(moviePoster);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += `${movie.name}<br>${movie.year} - ${movie.hm}`;

    // 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.
    // } // end loop
    // refactor: close forEach() instead of for loop
    });

} // end renderMovies()

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:
const sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', sortMovies);

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display:
const descCB = document.getElementById('desc');

// refactor callback using => instead of regular function
// descCB.addEventListener('change', function() {
descCB.addEventListener('change', () => {
    movies.reverse();
    renderMovies();
});
// console.log(movies);
// if(descCB.checked) {
//     alert("You checked the checkbox!");
// } else {
//     alert("You unchecked the checkbox!");


// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies() { 

    let sortKey = this.value; // this is the sort menu

    // 35. If sortKey == "name", do the string sort on the noAThe key, which is the name of the movie with no leading "A" or "The":

    // refactor: sort using => and if else using ternary -- new version should be ONE liner
    if(sortKey == "name") {
        // movies.sort(function(a,b) {
        //     if(a.name2 > b.name2) {
        //         return 1;
        //     } else {
        //         return -1;
        //     }
        //     // return a.name2 > b.name2 ? 1 : -1; // above if else as ternary
        // });
        // refactor the above w => and ternary, reducing 8 lines down to just ONE
        movies.sort((a,b) => a.name2 > b.name2 ? 1 : -1);
    // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":
    } else {
        // implement sort by year as a test
        // refactor: sort using => -- new version should be ONE liner
        // movies.sort(function(a,b) {
        //     return a[sortKey] - b[sortKey];
        // });
        movies.sort((a,b) => a[sortKey] - b[sortKey]);
    }
    // 36. If the Duration checkbox is checked, reverse the sort:
    if(descCB.checked) movies.reverse();
    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:
    renderMovies();
} // end sortMovies()

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

// NEXT: Lesson 06.06
// Next: Lesson 06.07