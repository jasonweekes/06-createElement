// Lesson 06.03 - FINAL

// 7. Declare consts for the letters of the alphabet, the digits 0-9 and some special character symbols:

const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBRS = "0123456789";
const SYMBLS = "@#$%^&*_+?!";

// 8. Get the select menu
const selectPswdLen = document.getElementById("select-pswd-len");

// 9. Get the four checkboxes
const lowcaseCB = document.getElementById("lowcase-cb");
const uprcaseCB = document.getElementById("upcase-cb");
const numbersCB = document.getElementById("num-cb");
const symbolsCB = document.getElementById("symbol-cb");

// Get the two buttons:
/*
- one button calls the function that generates the password
- the other button calls the function that copies the password
*/
const genPswdBtn = document.getElementById("gen-pswd-btn");
const copyBtn = document.getElementById("copy-btn");

// 11. Have the buttons call their respective functions on click:
genPswdBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// 12. Get the text input element for displaying the new password:
const newPswdOutput = document.getElementById("new-pswd-output");

// 13. Run a loop that makes an **option** tag with each iteration of the loop. The loop counter, **i**, runs from 8 to 25:

for (let i = 8; i <= 25; i++) {

  // 14. Inside the loop, make the option tags:
  // - Use **createElement()** to make the option. 
  // - Assign **value** and **text** properties equal to the counter. 
  // - Use **appendChild()** to add the option to the menu:
  const option = document.createElement('option');
  option.text = i;
  option.value = i;

  // 16. Set the default choice to 15 using conditional logic: if the value of the counter is 15, add a selected property to the option object:
  if(i == 15) option.selected = 'selected';

  selectPswdLen.appendChild(option);

} // end loop

// 16. Run the page. The menu should be populated with choices from 8-25.

// 17. Define the function and declare two string variables: 
/*
- **charSet** stores the eligible characters, per the checkboxes
- **randomPswd** stores the generated password.
*/

function generatePassword() {

  let charSet = ""; // the eligible characters
  let randPswd = ""; // the random password

  // 18. Concatenate the **charSet** variable:
  if(lowcaseCB.checked)charSet += LOWERS;
  if(uprcaseCB.checked) charSet += UPPERS;
  if(numbersCB.checked) charSet += NUMBRS;
  if(symbolsCB.checked) charSet += SYMBLS;

  // 19. Still in the function, run a for loop that iterates once for each character of the password:
  for (let i = 0; i < selectPswdLen.value; i++) {

    // 20. Generate a random integer in the range of the charSet string and then get the character at the random index using **charSet()** method:
    let r = Math.floor(Math.random() * charSet.length);

    // 21. Look up that character at that index using **charAt(index)** and concatenate that character onto the **randPswe** string. Finally, output the password:
    randPswd += charSet.charAt(r);

  } // end loop
  
  newPswdOutput.value = randPswd;

} // end function generatePassword()

// 22. Define the **copyPassword** function:
function copyPassword() {

  // 23. Use the **select()** and **navigator.clipboard.writeText()** methods to copy the password from the output field:
  /*
  - **select()** method selects (highlights) the text in the target element
  - **navigator.clipboard.writeText(text)** copies its argument text to the clipboard
  */
  newPswdOutput.select();
  navigator.clipboard.writeText(newPswdOutput.value);

  // 24. Provide feedback that the password has been copied:
  document.querySelector(".tooltiptext").innerHTML = "Password copied: " + newPswdOutput.value;

} // end function copyPassword()

/*
25. Save all and run the page. The application should work. 

26. Choose a password length from the menu and click the GENERATE PASSWORD button. A random password should appear in the output box.

27. Click the **copy** button, the password in the box is highlighted (selected) and also copied to the clipboaard.

Some nifty css makes the cartoon speech balloon-like tooltip. You can check out the css on your own, although it is outside the scope of this lesson.
*/

