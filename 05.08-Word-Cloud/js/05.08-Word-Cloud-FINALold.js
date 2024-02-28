// Word Frequency Map for a Word Cloud 
// A Word Cloud is a visual representation of the frequency of words in a string, 
// such as found in a blog post or other article; in a word cloud, the most frequently 
// occurring words appear in the largest font size in order to do this, the frequency of words // must be known. Therefore, before we can make a Word Cloud, we have to make what is called 
// a Word Frequency Map from of the words. This takes the form of an Object, where the keys
// are unique words and the value of each key is the number of times the word occurs.
// To make the Word Frequency Map, we have to convert the text to an array, with each item
// a word. Then we loop through the array of words. every time a unique word is found, 
/// the object is assigned that word as a new key with an initial value of 1.
// the next time the word is encounterd, no new key is made, but rather the value of the // ///// existing key is incremented by 1
// the resulting Word Frequency Map can then be used to make a Word Cloud by setting the font 
// size of each word based on the frequency, with most frequent words biggest
// also, since a Word Cloud only contains interesting, important keywords, there needs to be 
// a filter that prevents what are known as stopwords from being included in the Word
// Frequency Map. Stopwords include such common words as 'the', 'and', 'of', 'on', 'with', etc.

// let stopwords = ["foo", "bar"]; // for making Word Freq Map with no stopwords filtering

function makeWordFreqMap(str, stopwords) {
    str = str.trim().toLowerCase(); // lower case so that "Land" and "land" are not counted separately
    // remove punctuation so that "world." and "world" are not saved as separate keys
    // str = str.replace(",", "");
    // str = str.replace(".", "");
    // str = str.replace(";", "");
    // str = str.replace(":", "");
    // str = str.replace("?", "");
    // str = str.replace("!", "");
    // or use fancy RegEx move to strip all non-alphanumeric characters
    str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[0-9]/g, '');
    // RegEx gibberish decoded:
    // \w is any digit, letter, or underscore.
    // \s is any whitespace.
    // [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
    // [^\w\s]|_ is the same as #3 except with the underscores added back in.
    // [0-9] is all digits
    // /g is globally replace (everywhere)
    // str = str.trim(); // get rid of any extra whitespace that still may remain
    let arr = str.split(" "); // make an array of the words, each word an array item
    let obj = {}; // declare a new object
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(!stopwords.includes(word)) { // if the current word is NOT one of the stopwords // if the current word is not already an object key, make it a key w an initial value of 1, else increment the value of the word key by 1
            !obj[word] ? obj[word] = 1 : obj[word]++; 
        } // end if-else
    } // end for loop
    return obj; // output the function
} // end function 

let fairyTaleWordFreq = makeWordFreqMap(textPassage, stopwords);
console.log('fairyTaleWordFreq:', fairyTaleWordFreq);

let treehouseWordFreq = makeWordFreqMap(treehouse, stopwords);
console.log('treehouseWordFreq:', treehouseWordFreq);