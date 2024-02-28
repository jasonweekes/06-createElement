// Lesson 06.06

// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder');
const container = document.querySelector('.container');
// <select>
// <option value="choose">Sort by..</option>
// <option value="name" selected>By Name..</option>
// <option value="year">By Year..</option>
// <option value="mins">By Duration..</option>
// </select>
// make a select menu
const sortMenu = document.createElement('select');
// make options, starting by making an array from one object
let keysArr = Object.keys(movies[0]); // ['name', 'year', 'mins', 'genre']
for(let i = 0; i < keysArr.length; i++) {
    let key = keysArr[i];
    const opt = document.createElement('option');
    opt.value = key;
    opt.text = key == "mins" ? "Duration" : key[0].toUpperCase() + key.slice(1);
    sortMenu.appendChild(opt);
}

container.children[0].insertAdjacentElement("afterEnd", sortMenu);

sortMenu.addEventListener('change', sortMovies);


// 8. Set up a loop to iterate the **movies** array:
for(let i = 0; i < movies.length; i++) {

    // 9. Inside the loop, start by simplifying the current movie object:
    let movie = movies[i];

    // 10. Next, get the **mins** property, and simplifiy it as a variable:
    let mins = movie.mins; // 150

    // 11. Get the **hours** by dividing **mins** by **60** and rounding down:
    let hours = Math.floor(mins/60); // 150/60 = 2.5 => 2

    // 12. Use modulo **%** to get the remainder minutes:
    mins = mins % 60; // 150 % 60 = 30

    // 13. Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.

    // 14. Add a key, **hrMin**, to the object. The value is the **hours:mins** format:
    movie.hrMin = `${hours}h ${mins}m`; // IMDB style: 2h 30m

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:
    let imgFile = movie.name.toLowerCase();

    // Use replaceAll() to replace the spaces in the movie names with hyphens:
    imgFile = imgFile.replaceAll(' ', '-');

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.
    imgFile = imgFile.replaceAll("'", "");
    imgFile = imgFile.replaceAll(":", "");
    imgFile = imgFile.replaceAll(",", "");
    imgFile = imgFile.replaceAll(".", "");

    // 18. Complete the file name by tacking on '.jpg' at the end:
    imgFile += '.jpg';

    // 19. Add the **imgFile** property to the object:
    movie.imgFile = imgFile;

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // 20. Still in the loop, using Regex, replace "a" and "the" with empty string ""
    let noAThe = movie.name.replace(/^(a|the)\s/i, '');

    // 21. Add the noAThe property to the movie object:
    movie.noAThe = noAThe;

} // end loop
    
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:
console.log(movies);

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 22. Define the **renderMovies()** function. 
function renderMovies() {

    // First thing to do is clear the **movieHolder** of any existing content:
    movieHolder.innerHTML = '';

    // 27. Set up a loop to iterate the movies array, and..
    for(let i = 0; i < movies.length; i++) {

        // ..simplify the current movie by passing it to a variable:
        let movie = movies[i];

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        const pic = new Image();
        pic.src = `images/${movie.imgFile}`;
        divvy.appendChild(pic);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += `${movie.name}<br>${movie.year} - ${movie.hrMin}`;

        // 31. Close the loop, close the function and Reload the page. The grid of movies 
        //     should be back, although the sort feature doesn't work yet. That's next.

    } // end loop

} // end renderMovies()

// sorting movies

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display:
const checkbox = document.getElementById('cb');
checkbox.addEventListener('change', reverseSort);

// 34. Define the sortMovies() function and .. 
function sortMovies() {
    // alert('sortMovies');
    // ..get the menu choice, which is the sort key:
    let sortKey = sortMenu.value;
    // sortKey could be name, year, mins

    // 35. If sortKey == "name", the movies are to be sorted from A-Z by name key; for this, do the string sort on the name key, while ignoring any leading "A" or "The":
    if(sortKey == 'name' || sortKey == 'choose') {
        movies.sort(function(a,b) {
            if(a.name.replace(/^(a|the)\s/i,'') > b.name.replace(/^(a|the)\s/i,'')) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":
    movies.sort(function(a,b) {
        return a[sortKey] - b[sortKey];
    });
    // arrow function version of the above:
    // movies.sort((a,b) => a[sortKey] - b[sortKey]);

    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:

    // 36. If the Descending checkbox is checked, reverse the sort:
    if(checkbox.checked) {
        movies.reverse();
    }

    renderMovies();

} // end sortMovies()

// 36. Whenever the Descending checkbox is checked or unchecked, reverse the sort:
function reverseSort() {
    movies.reverse();
    renderMovies();
}

// 24. Add one more line before closing the loop: a call to the **renderMovies()** function. This function runs on page load when the loop ends, and also whenever a choice is made to the **Sort by..** menu.
// renderMovies();
sortMovies();

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 


// BONUS: map(), sort(), => 
// const titles = ["The Godfather", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", "Fight Club"];
// movies.sort((a, b) => {
//     const titleA = a.replace(/^(a|an|the)\s/i, '');
//     const titleB = b.replace(/^(a|an|the)\s/i, '');
//     return titleA.localeCompare(titleB);
// });
// console.log(movies);

// making the divs and images dynamically
// map() is an array method that takes a callback as its argument
const movieTitles = movies.map(function(e) {
    return e.name;
});
console.log('movieTitles:', movieTitles);

const flix = movies.map(e => e.name);
console.log('flix:', flix); // ['2001: A Space Odyssey', 'Ali', "Singin' in the Rain", 'Apocalypse Now', 'Avengers: Endgame', 'The Ballad of Buster Scruggs', etc.]
// let desc = false;
// desc = !desc;
// sort but ignore leading articles ('A', 'The', 'An')
// movieNames.sort((a, b) => {
//     const titleA = a.replace(/^(a|an|the)\s/i, '');
//     const titleB = b.replace(/^(a|an|the)\s/i, '');
//     return desc ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
// });
flix.sort((a,b) => a.replace(/^(a|the)\s/i,'') > b.replace(/^(a|the)\s/i,'') ? 1 : -1);
// flix.sort(function(a,b) {
//     if(a.replace(/^(a|the)\s/i,'') > b.replace(/^(a|the)\s/i,'')) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
console.log('sorted flix, ignore article:', flix, flix.length);
// console.log(movies);