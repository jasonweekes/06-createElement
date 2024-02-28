// Lesson 06.06 - START

// 7. Start by getting the **movie-holder** div, for displaying the movies:

// 8. Set up a loop to iterate the **movies** array:

    // 9. Inside the loop, start by simplifying the current movie object:

    // 10. Next, get the **mins** property, and simplifiy it as a variable:

    // 11. Get the **hours** by dividing **mins** by **60** and rounding down:

    // 12. Use modulo **%** to get the remainder minutes:

    // 13. Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.

    // 14. Add a key, **hrMin**, to the object. The value is the **hours:mins** format:

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words::

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.

    // 18. Complete the file name by tacking on '.jpg' at the end:

    // 19. Add the **imgFile** property to the object:

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // 20. Still in the loop, get the movie's first two and first four characters:

    // 21. If the first two characters are "A ", make a new property **noAThe**, set equal to the full name, starting at the third character and going to the end: 

    // 22. Else if the first four characters are "The ", make a new property **noAThe**, set equal to the full name, starting at the fifth character and going to the end: 

    // 23. Else, the movie does not start with "A" or "The", so just set **noAThe** to equal the original name:

    // 24. Add one more line before closing the loop: a call to the **renderMovies()** function. This function runs on page load when the loop ends, and also whenever a choice is made to the **Sort by..** menu.
    
// end loop
    
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:

// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 22. Define the **renderMovies()** function. First thing to do is clear the **movieHolder** of any existing content:

    // 27. Set up a loop to iterate the movies array and simplify the current movie by passing it to a variable:

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:

        // 30. Below the image, output the text info for the movie:

// 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.
    // end loop

// end renderMovies()

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display::

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:

    // 35. If sortKey == "name", do the string sort on the noAThe key, which is the name of the movie with no leading "A" or "The":

    // 35. Else the key is not "name", so do the number sort. Use the dynamic property access syntax, the square bracket, with **sortKey**, which is either "year" or "mins":

    // 36. If the Duration checkbox is checked, reverse the sort:

    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:

// end sortMovies()

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

// NEXT: Lesson 06.06
// Next: Lesson 06.07