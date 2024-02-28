// Lesson 06.06 - START

// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder');
let movie;

// 8. Set up a loop to iterate the **movies** array:
for(let i = 0; i < movies.length; i++) {
    // 9. Inside the loop, start by simplifying the current movie object:
    movie = movies[i];
    // 10. Next, get the **mins** property, 
    // and simplifiy it as a variable:
    let mins = movie.mins;
    // 11. Get the **hours** by dividing **mins** 
    // by **60** and rounding down:
    let h = Math.floor(mins / 60);
    // 12. Use modulo **%** to get the 
    // remainder minutes:
    let m = mins % 60; // 134 / 60 = R 14
    // 13. Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.
    // 14. Add a key, **hrMin**, to the object. The value is the **hours:mins** format:
    movie.hm = `${h}h ${m}m`; // better than 00:00

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:
    let imgFile = movie.name.toLowerCase();

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words:
    imgFile = imgFile.replaceAll(' ', '-');

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.
    // imgFile = imgFile.replaceAll(',', '');
    // imgFile = imgFile.replaceAll(':', '');
    // imgFile = imgFile.replaceAll("'", '');
    // imgFile = imgFile.replaceAll('.', '');

    imgFile = imgFile.replaceAll(/[.,\/#!$%\^&\*;:{'}=\_`~()]/g,""); // remove hyphen / dash character

    // 18. Complete the file name by tacking on '.jpg' at the end:
    imgFile += '.jpg';

    // 19. Add the **imgFile** property to the object:
    movie.imgFile = imgFile;

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.
    let noAThe = movie.name;

    // 20. Replace "The " and "A " with ""
    noAThe = noAThe.replace("The ", ""); // no leading "The"
    noAThe = noAThe.replace("A ", ""); // no leading "A "

    // add the new property:
    movie.noAThe = noAThe;

    // 21. Make two more properties: thUp and thDown 
    // for keeping track of likes and dislikes
    // every time user clicks a thumb
    movie._likes = 0;
    movie._dislikes = 0;

    renderMovies();

} // end loop

console.log(movies);

// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:

// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 22. Define the **renderMovies()** function. First thing to do is clear the **movieHolder** of any existing content:
function renderMovies() {

    movieHolder.innerHTML = ""; // empty movie holder of all content

    // 27. Set up a loop to iterate the movies array and simplify the current movie by passing it to a variable:
    for(let i = 0; i < movies.length; i++) {

        let movie = movies[i];

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        let divvy = document.createElement('div');
        divvy.className = "divvy";
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        let pic = new Image();
        pic.src = './images/' + movie.imgFile;
        // pic.title = movie.name;
        // pic.mins = movie.mins;
        // pic.hm = movie.hm;
        // pic.year = movie.year;
        let id = 'movie-'+i;
        pic.id = id;
        pic.addEventListener('click', onMovieClick);
        pic.onclick = function() {
            alert('movie ' + movie.name + ' clicked');
        };

        divvy.appendChild(pic);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += `<p id="movie-name">${movie.name}<br>
        <span id="year-hm">${movie.year} - ${movie.hm}</span></p>`;
        divvy.innerHTML += `<p style="font-size:0.9rem;"><span id="th-up-${i}" class="thumb" onclick="like('th-up-${i}')">&#128077;</span> <span id="tot-th-up-${i}">0</span> &nbsp; &nbsp; <span id="th-down-${i}" class="thumb" onclick="dislike('th-down-${i}')">&#128078;</span> <span id="tot-th-down-${i}">0</span> </p>`;
        // 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.

    } // end loop

} // end renderMovies()

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:
const sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', sortMovies);

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display:
const descCB = document.getElementById('desc');
descCB.addEventListener('change', function() {
    movies.reverse(); // reverse the order of the movies
    renderMovies(); // re-render the movies
});

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies() {
    let sortKey = this.value;
    if(sortKey == "name") {
        movies.sort(function(a,b) {
            // ternary alternative to if-else
            return a.name > b.name ? 1 : -1;
        });
    } else {
        movies.sort(function(a,b) {
            return a[sortKey] - b[sortKey];
        });
    }
    // if checkbox is checked, reverse sort:
    // NEED THIS TOO:
    if(descCB.checked) {
        movies.reverse();
    }

     // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":
    // 36. If the Duration checkbox is checked, reverse the sort:
    // 35. If sortKey == "name", do the string sort on the noAThe key, which is the name of the movie with no leading "A" or "The":
    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:
    renderMovies();

} // end sortMovies()

function onMovieClick() {
    alert('hola');
    // console.log(this.name, this.year, this.hm, this.mins);
}
// onMovieClick();

const mainMovie = document.getElementById('main-movie');
mainMovie.onclick = function() {
    alert('main movie clicked');
}

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

let totLikes = 0;
let totDislikes = 0;

function like(id) {
    console.log("like", id);
    let num = Number(id.slice(-1));
    console.log('num:', num);
    let movie = movies[num];
    movie._likes++;
    let thTot = document.getElementById('tot-'+id);thTot.textContent = movie._likes;
    totLikes++;
    // log all movies every 10 thumbs up clicks
    if(totLikes % 10 == 0) {
        console.log(movies);
    }
}

function dislike(id) {
    console.log("dislike", id);
    let num = Number(id.slice(-1));
    console.log('num:', num);
    let movie = movies[num];
    movie._dislikes++;
    let thTot = document.getElementById('tot-'+id);thTot.textContent = movie._dislikes;
    totDislikes++;
    // log all movies every 10 thumbs up clicks
    if(totDislikes % 10 == 0) {
        console.log(movies);
    }
}

// NEXT: Lesson 06.06
// Next: Lesson 06.07