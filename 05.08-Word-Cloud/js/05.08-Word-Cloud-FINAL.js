// Lesson 05.08 - Word Frequency Map for a Word Cloud - PROG

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

// html file already imports stopwords.js as well as two big strings containing text passages (chineseFairyTales, treehouse)

// 1. Define mapWordFrequency function w 2 parameters: a passage string
// and an array of stopwords
function mapWordFrequency(passageStr) {
    // 2. Trim away leading and trailing spaces and lowercase all
    passageStr = passageStr.trim().toLowerCase();
    // 3. remove punctuation so that "treehouse" and "treehouse," are not separate keys
    // passageStr = passageStr.replace(",", "");
    // passageStr = passageStr.replace(".", "");
    // 4. Or use RegEx* to strip all non-letters (punctuation and numbers):
    passageStr = passageStr.replaceAll(/[^\w\s]|_/g, "").replaceAll(/\s+/g, " ")
                            .replaceAll(/[0-9]/g, '');                     
    // 5. Make an array from the words, each word an array item:
    const wordsArr = passageStr.split(" ");
    // console.log(wordsArr.slice(0,3)); // ['sports', 'and', 'games']
    // 6. Declare a new object for storing key-value pairs of word frequencies
    let wordFreqObj = {};
    for(let i = 0; i < wordsArr.length; i++) { // 7. Loop the words array:
        let word = wordsArr[i]; // 8. Save the current word to a variable:
        // 9. Check if the current word is not a stopword
        if(!stopwords.includes(word)) {
            // 10. Check if the current word is already an object key. 
            //    If word is already a key, increment value by 1
            if(wordFreqObj[word]) { 
                wordFreqObj[word]++; 
            // 12. word is NOT already a key, so make a key 
            //    for that word w an initial value of 1
            } else {
                wordFreqObj[word] = 1;
            }
        } // end if-else
    } // end for loop
    return wordFreqObj; // 13. Return the word frequency object
} // end function 

let fairyTaleWordFreq = mapWordFrequency(chineseFairyTale);
console.log('fairyTaleWordFreq:', fairyTaleWordFreq);

let treehouseWordFreq = mapWordFrequency(treehouse);
console.log('treehouseWordFreq:', treehouseWordFreq);

// *RegEx gibberish decoded:
// \w is any digit, letter, or underscore.
// \s is any whitespace.
// [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
// [^\w\s]|_ is the same as #3 except with the underscores added back in.
// [0-9] is all digits
// /g is globally replace (everywhere)
// str = str.trim(); // get rid of any extra whitespace that still may remain
    