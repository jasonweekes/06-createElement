// Lesson 06.03 - FINAL

// 7. Declare consts for the letters of the alphabet, the digits 0-9 and some special character symbols:

const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBRS = "0123456789";
const SYMBLS = "@#$%^&*_+?!";

// 8. Get the select menu


// 9. Get the four checkboxes


// Get the two buttons:
/*
- one button calls the function that generates the password
- the other button calls the function that copies the password
*/


// 11. Have the buttons call their respective functions on click:


// 12. Get the text input element for displaying the new password:


// 13. Run a loop that makes an **option** tag with each iteration of the loop. The loop counter, **i**, runs from 8 to 25:


  // 14. Inside the loop, make the option tags:
  // - Use **createElement()** to make the option. 
  // - Assign **value** and **text** properties equal to the counter. 
  // - Use **appendChild()** to add the option to the menu:

  // 16. Set the default choice to 15 using conditional logic: if the value of the counter is 15, add a selected property to the option object:


// end loop

// 16. Run the page. The menu should be populated with choices from 8-25.

// 17. Define the function and declare two string variables: 
/*
- **charSet** stores the eligible characters, per the checkboxes
- **randomPswd** stores the generated password.
*/


  // 18. Concatenate the **charSet** variable:


  // 19. Still in the function, run a for loop that iterates once for each character of the password:

    // 20. Generate a random integer in the range of the charSet string and then get the character at the random index using **charSet()** method:

    // 21. Look up that character at that index using **charAt(index)** and concatenate that character onto the **randPswe** string. Finally, output the password:

// end loop
  

// end function generatePassword()

// 22. Define the **copyPassword** function:

  // 23. Use the **select()** and **navigator.clipboard.writeText()** methods to copy the password from the output field:
  /*
  - **select()** method selects (highlights) the text in the target element
  - **navigator.clipboard.writeText(text)** copies its argument text to the clipboard
  */


  // 24. Provide feedback that the password has been copied:


// end function copyPassword()

/*
25. Save all and run the page. The application should work. 

26. Choose a password length from the menu and click the GENERATE PASSWORD button. A random password should appear in the output box.

27. Click the **copy** button, the password in the box is highlighted (selected) and also copied to the clipboaard.

Some nifty css makes the cartoon speech balloon-like tooltip. You can check out the css on your own, although it is outside the scope of this lesson.
*/

