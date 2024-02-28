// Lesson 05.08 - Word Frequency Map for a Word Cloud - PROG

// A Word Cloud is a visual representation of the frequency of words in a string, 
// such as found in a blog post or other article; in a word cloud, the most frequently 
// occurring words appear in the largest font size. In order to do this, the frequency of words 
// must be known. Therefore, before we can make a Word Cloud, we have to make what is called 
// a Word Frequency Map from of the words. This takes the form of an Object, where the keys
// are unique keywords and the value of each key is the number of times the word occurs.
// To make the Word Frequency Map, we have to convert the text to an array, with each item
// a word. Then we loop through the array of words. every time a unique word is found, 
// the object is assigned that word as a new key with an initial value of 1.
// the next time the word is encounterd, no new key is made, but rather the value of the 
// existing key is incremented by 1
// the resulting Word Frequency Map can then be used to make a Word Cloud by setting the font 
// size of each word based on the frequency, with most frequent words biggest
// also, since a Word Cloud only contains interesting, important keywords, there needs to be 
// a filter that prevents what are known as stopwords from being included in the Word
// Frequency Map. Stopwords include such common words as 'the', 'and', 'of', 'on', 'with', etc.

// let stopwords = ["the", "and", etc.]; 
// for making Word Freq Map with no stopwords filtering
// declare the function:
function makeWordCloud(str, minFreq=5, cloudElem="word-cloud") {
    // CLEAN STRING: make all lowercase, remove extra spaces, remove punctuation
    // lower case so that "Land" and "land" are not counted separately
    str = str.toLowerCase().trim(); // trim() removes extra whitespace
    // Regex Expression to replace all punctuation, digits and special characters:
    str = str.replaceAll(/[^\w\s]|_/g, "").replaceAll(/\s+/g, " ").replaceAll(/[0-9]/g, ''); 
    const wordsArr = str.split(" "); // make array of words, split on space " "
    const wordFreqObj = {}; // new object to store word frequency key-value pairs
    for(let i = 0; i < wordsArr.length; i++) { // loop the array of words
        let word = wordsArr[i];  // save current word to a variable
        if(!STOPWORDS.includes(word)) { // if word is NOT one a stopword 
            if(!wordFreqObj[word]) { // if word is NOT already an object key
                wordFreqObj[word] = 1; // make word a key with initial value of 1, 
            } else { // else the key already exists 
                wordFreqObj[word]++; // so increment the value of the word key by 1
            } // end inner if-else
        } // end outer if
    } // end for loop

    const minFreqObj = {}; // a new object to store only keys w min frequency
    // loop the object, key by key:
    for(key in wordFreqObj) {
        // if the current key value is greater than or equal to the min frequency
        if(wordFreqObj[key] >= minFreq) {
            minFreqObj[key] = wordFreqObj[key]; // save that key-value to new obj
        }
    }

    // output the word cloud to the DOM
    const cloudElement = document.getElementById(cloudElem);
    for(k in minFreqObj) {
        const divvy = document.createElement('div');
        divvy.textContent = k;
        let freq =  minFreqObj[k];
        let fontSz = freq * 3;
        let colr = "";
        if(fontSz < 16) {
            colr = "white";
        } else if(fontSz < 21) {
            colr = "tan";
        } else if(fontSz < 27) {
            colr = "pink";
        } else if(fontSz < 33) {
            colr = "yellow";
        } else if(fontSz < 39) {
            colr = "orange";
        } else if(fontSz < 48) {
            colr = "aqua";
        } else if(fontSz < 54) {
            colr = "forestgreen";
        } else if(fontSz < 60) {
            colr = "yellowgreen";
        } else if(fontSz < 70) {
            colr = "cornflowerblue";
        } else {
            colr = "lime";
        }
        divvy.style.fontSize = fontSz + 'px';
        let r = Math.floor(Math.random() * 20);
        let zeroOne = Math.round(Math.random()); // gives 0, 1 50-50 ratio
        if(zeroOne == 1) r *= -1; // make r negative half the time
        divvy.style.transform = `rotate(${r}deg)`;
        divvy.style.color = colr;
        cloudElement.appendChild(divvy);
    }
    
    // return wordFreqObj; // return the wordFreqObj, which is our result
    return minFreqObj; // return objMin5x which only has keywords of 5+ occurrences

} // end function 

// call function, passing in Chinese Fairy Tale and specifying min 5 occurrences
// let fairyTaleWordFreqObj = makeWordCloud(chineseFairyTale, 5, "word-cloud");
// console.log('fairyTaleWordFreqObj:', fairyTaleWordFreqObj);

// call function, passing in Treehouse and specifying min 7 occurrences

let treehouseWordFreqObj = makeWordCloud(treehouse, 5, "word-cloud");
console.log('treehouseWordFreqObj:', treehouseWordFreqObj);

// or use fancy RegEx move to strip all non-alphanumeric characters
// RegEx gibberish decoded:
// \w is any digit, letter, or underscore.
// \s is any whitespace.
// [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
// [^\w\s]|_ is the same as #3 except with the underscores added back in.
// [0-9] is all digits
// /g is globally replace (everywhere)
// str = str.trim(); // get rid of any extra whitespace that still may remain

// instead of a lot of replaceAll:
// str = str.replaceAll(",", "").replaceAll(".", "").replaceAll(";", "").replaceAll(":", "").replaceAll("?", "").replaceAll("!", "").replaceAll("*", "");
// str = str.replaceAll("-", "").replaceAll("'", "").replaceAll('"', "").replaceAll("&", "").replaceAll("#", "").replaceAll("(", "").replaceAll("$", "");
// str = str.replaceAll(")", "").replaceAll("[", "").replaceAll("]", "").replaceAll("/", "").replaceAll("+", "").replaceAll("=", "").replaceAll("@", "");
    