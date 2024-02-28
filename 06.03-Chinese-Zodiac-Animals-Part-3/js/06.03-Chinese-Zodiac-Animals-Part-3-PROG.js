// L@@K CHALLENGE !!: SORTING ARRAY of OBJECTS by NUM and STR KEYS
// Provide the missing code in the 3 spots that say "L@@K CHALLENGE !!"

// get the section (red box) which holds all the animals:
const section = document.querySelector('section');
// get the select menu and have it call sortAnimals function
const sortMenu = document.querySelector('select');
sortMenu.addEventListener('change', sortAnimals);

// L@@K CHALLENGE !!
//  write function that runs when checkbox is checked or unchecked
// get the checkbox menu and have it run inline anon func:
// - this code is very short, so rather than declare a function for this
// - write an anonymous inline callback function right inside the addEventListener
// - function calls reverse() method on the array to reverse the order of objects
// - function ends by calling the renderAnimals() function
const descendCB = document.getElementById('cb');
descendCB.addEventListener('change', function() {
    // reverse order of animals whenever CB is checked-unchecked
    animals.reverse();
    renderAnimals();
});

const sound = new Audio(); // make ONE sound obj only so as not to play multiple sounds at same time

document.addEventListener('DOMContentLoaded', renderAnimals); // runs once on pg load

function renderAnimals() { // output the 12 animals to the section

    section.innerHTML = ""; // clear section to make way for fresh output

    for(let i = 0; i < animals.length; i++) { // loop the array of animal objects

        const animal = animals[i];

        const divvy = document.createElement('div'); // make a div
        divvy.className = 'divvy'; // assign class to div
        section.appendChild(divvy); // output div to section

        const animalImg = new Image(); // make an image
        animalImg.src = `images/animals/${animal.eng}.jpg`; // concat path to jpg
        animalImg.className = 'animal-pic'; // assign class to animal img
        divvy.appendChild(animalImg); // output the image inside the div:

        const charImg = new Image(); // make image to hold Chinese character
        charImg.src = `images/chars/char-${animal.chr}.jpg`; // concat path to char jpg:
        charImg.className = 'chinese-char'; // assign class to character img
        divvy.appendChild(charImg);

        // make sound icon image
        const soundIcon = new Image();
        soundIcon.src = 'images/sound-icon.png';
        soundIcon.className = 'sound-icon';
        divvy.appendChild(soundIcon);
        // make sound icon play animal sound mp3:
        soundIcon.addEventListener('click', function() {
            sound.src = `audio/${animal.chr}.mp3`;
            sound.play();
        });

        // make a span tag to hold English name of animal
        const engSpan = document.createElement('span');
        engSpan.className = 'english';
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output Eng name to divvy

        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span');
        pinSpan.className = 'pinyin';
        pinSpan.innerHTML = animal.pin; // can't use textContent, due to HTML entities
        divvy.appendChild(pinSpan); // output Pin name to divvy

        // make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p');
        yearsP.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(yearsP); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = `<span style="background-color:#C21;padding:3px 5px;color:#fff;">
                        ${animal.yr}</span><br><br>`;
       
        // L@@K CHALLENGE !! -- write the for loop that concats the yearsStr
        // there should be a total of 12 years: 2020 2008 1996 1984 1972 1960
        for(let y = animal.yr-12; y >= animal.yr-120; y-=12) {
            yearsStr += y + " ";
        }
        yearsP.innerHTML = yearsStr; // put animal yr string in p-tag
    } // end loop
} // end renderAnimals() function

// sortAnimals() runs on change to select menu:
function sortAnimals() {
    // sort animal by chosen key
    // save chosen key to a var:
    let key = this.value; // 'eng', 'chi', 'yr'
    //  { eng: "dog", chi: "gou", yr: 2030 }
    // sort by object key in ascending order usingcallback(a,b) algo:
    animals.sort(function(a,b) {
        return a[key] > b[key] ? 1 : -1;
    });
    // if checkbox is checked, reverse the sort order from ascending to descending order
    if(descendCB.checked) animals.reverse();
    renderAnimals();  // render a freshly sorted animals DOM
}

// L@@K CHALLENGE !! Make the wheel spin !
// setInterval takes two args: a callback and a time delay in ms
// setInterval(callback, milisec)
const wheel = document.querySelector('.wheel');
let angle = 0;
let wheelSpeed = 0.5;
// get the slider (id="slider") and have it call 
// a func on 'change'
const slider = document.getElementById('slider');
slider.addEventListener('change', function() {
    wheelSpeed = this.value / 100;
})

window.setInterval(function() {
    angle += wheelSpeed;
    wheel.style.transform = `rotate(${angle}deg)`;
}, 25); // 25 ms = 40x per sec

