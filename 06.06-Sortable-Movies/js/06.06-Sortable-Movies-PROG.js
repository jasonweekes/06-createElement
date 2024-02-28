// Lesson 06.06 - PROG

// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder');

// 8. Set up a loop to iterate the **movies** array:
for(let i = 0; i < movies.length; i++) {

    // 9. Inside the loop, start by simplifying the current movie object:
    let movie = movies[i];

    // 10. Next, get the **mins** property, and simplifiy it as a variable:
    let totMins = movie.mins;

    // 11. Calc the **hours** by dividing **mins** by **60** and rounding down:
    let hrs = Math.floor(totMins / 60);

    // 12. Use modulo **%** to get the remainder minutes:
    let mins = totMins % 60;

    // 13. SKIP: Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.

    // 14. Add a key, **hrMin**, to the object, the value of which is in **IMDB movie** format:
    movie.hrMin = `${hrs}h ${mins}m`;

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:
    let imgFile = movie.name.toLowerCase();

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words:
    imgFile = imgFile.replaceAll(' ', '-');

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.
    // imgFile = imgFile.replaceAll("'", "");
    // imgFile = imgFile.replaceAll(":", "");
    // imgFile = imgFile.replaceAll(",", "");
    // imgFile = imgFile.replaceAll(".", "");

    // ReGex version of the above replaceAll's
    // replace specific punctuation : ' , . with nothing:
    imgFile = imgFile.replace(/[.,':!?]/g, "");
    // Regex strip punctuation syntax demystified:
    // wrap the punc marks in /[ .,:.?! ]/
    // myStr = myStr.replace(/[/.,':]/g, "");
    // replace( /[ punc_symbols ]/g, '')  (g is for global)
    // myStr = myStr.replace( /[ /.,': ]/g, "");

    // 18. Complete the file name by tacking on '.jpg' at the end:
    imgFile = imgFile + '.jpg';

    // 19. Add the **imgFile** property to the object:
    movie.imgFile = imgFile;

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // Instead of steps 20-24, just do a replaceAll on "The " and "A ". These will only occur as the first word of a movie name:
    let noAThe = movie.name.replaceAll("The ", "");
    noAThe = noAThe.replaceAll("A ", "");

    // make the property for the No The No A title:
    movie.noAThe = noAThe;

    // 20. Still in the loop, get the movie's first two and first four characters:

    // 21. If the first two characters are "A ", make a new property **noAThe**, set equal to the full name, starting at the third character and going to the end: 

    // 22. Else if the first four characters are "The ", make a new property **noAThe**, set equal to the full name, starting at the fifth character and going to the end: 

    // 23. Else, the movie does not start with "A" or "The", so just set **noAThe** to equal the original name:

    // 24. Add one more line before closing the loop: a call to the **renderMovies()** function. This function runs on page load when the loop ends, and also whenever a choice is made to the **Sort by..** menu.
    
} // end loop
    
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:
console.log(movies);

// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 26. Define the **renderMovies()** function. 
function renderMovies() {

    // First thing to do is clear the **movieHolder** of any existing content:
    movieHolder.innerHTML = "";

    // 27. Set up a loop to iterate the movies array and simplify
    //     the current movie by passing it to a variable:
    for(let i = 0; i < movies.length; i++) {

        const movie = movies[i];

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the imgFile property, and output the image to the div:
        let moviePoster = new Image();
        moviePoster.src = 'images/' + movie.imgFile;
        divvy.appendChild(moviePoster);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += `${movie.name}<br>${movie.year} - ${movie.hrMin}`;

    } // end loop

} // end renderMovies()    

// 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.
renderMovies();

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:
const sortMenu = document.querySelector('select');
sortMenu.addEventListener('change', sortMovies);

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline anonymous callback function that reverses the order of the movies and calls renderMovies() to refresh the display:
const cb = document.querySelector('input');
cb.addEventListener('change', function() {
    movies.reverse();
    renderMovies();
});

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies() {

    let sortKey = this.value; // name, mins, year

    // 35. If sortKey == "name", do the string sort on the noAThe key, which is the name of the movie with no leading "A" or "The":
    if(sortKey == 'name') {
        movies.sort(function(a,b) {
            return a.noAThe > b.noAThe ? 1 : -1;
        });
    } else { // sortKey must be either year or mins--both numbers, so use number sort algo no matter which it is
        movies.sort(function(a,b) {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });
    }

    // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":

    // 36. If the Duration checkbox is checked, reverse the sort:
    if(cb.checked) movies.reverse();

    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:
    renderMovies();

} // end sortMovies()

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

// NEXT: Lesson 06.06
// Next: Lesson 06.07