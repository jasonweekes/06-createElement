// Lesson 06.05 - FINAL

// 1. Start by declarings 3 arrays, each with 7 items.
const fNames = ['Pat', 'Jose', 'Ping', 'Amy', 'Shujia', 'Jed', 'Betty'];
const lNames = ['Hanson', 'Diaz', 'Liu', 'Smith', 'Guo', 'Martin', 'Jones'];
const ids = [7445, 1214, 748, 4545, 962, 53, 6342];

// A. sort arrays of strings vs. arrays of numbers

// 2. Let's review sorting arrays of strings, which we first looked at in Unit 4:
// lNames.sort();
console.log('lNames:', lNames);
// ['Diaz', 'Guo', 'Hanson', 'Jones', 'Liu', 'Martin', 'Smith']

// 3. What we haven't tried yet is to sort arrays of numbers. Let's try that now (it won't work):
// ids.sort();
console.log('ids:', ids);
// [1214, 4545, 53, 6342, 7445, 748, 962]

// 4. Call the sort method on the **ids** array, pass in the callback function:
// ids.sort(function(a,b) {
//     return a - b;
// });
console.log('ids:', ids);
// [53, 748, 962, 1214, 4545, 6342, 7445]

// B. combine multiple arrays into a single array of objects

// 5. Declare a new empty array, **team**, and loop the length of one of the 3 arrays to be combined:
const team = [];

for(let i = 0; i < ids.length; i++) {
    // 6. Declare an object called emp (employee), and assign it 3 properties, one per array. Push the completed emp object into the team array:
    let emp = {
        fName: fNames[i],
        lName: lNames[i],
        id: ids[i],
    };
    team.push(emp);
    // or: make and push the object all in one line:
    // team.push({ fName: fNames[i], lName: fNames[i], id: ids[i] });
}

// 7. Below the loop, log the array together with a sampling of its data:
console.log(team); // array of 7 objects of 3 properties each
console.log(team[0]); // {fName: 'Pat', lName: 'Hanson', id: 7445}
console.log(team[0].fName); // Pat

// C. sorting arrays of objects by number key

// 8. Call the sort method on the **team** array. It does nothing, because the array items are not strings or numbers, but objects:
team.sort();
console.log('team.sort():\n', team);

// 9. Calling the **sort()** method on the **team** array again, pass it the callback with arguments **a** and **b**:
// 10. Sort by **id** by returning **a.id - b.id**:
team.sort(function(a,b) {
    return a.id - b.id;
});

// 11. Log **team** again. The objects are sorted by **id**, ascending:
console.log('sort team objects by ID asc:\n', team);

/* 0: {fName: 'Jed', lName: 'Martin', id: 53}
    -- ETC --
6: {fName: 'Pat', lName: 'Hanson', id: 7445} */

// a primitive var, like a number, can be set equal to another number and they are still separate.. change one later without affecting the other:
let x = 5;
let y = x;
y = 8;
console.log(x, y); // ????

// BUT with an array, you cannot just set a new one equal to an existing one.. they become "data bound" to each other: change the new one, and the change propagates back to the old one:
const team2 = team; // changes to team2 will "back up" and hit team
// to make a fresh array from existing one and have it be its own entity separte from original, set new one equal to destructured old one using ... and then wrap that in fresh square brackets. Result is a new array that is a copy of old array BUT as distinct entity..
const teamCopy = [...team];

// 12. To sort in descending order call the **reverse()** method:
// But first copy the array so the orig doesn't pick up this 

// 13. Or sort in descending order 2 ways: by chaining **reverse()** onto the original sort OR by changing a.id - b.id to b.id - a.

teamCopy.sort(function(a,b) {
    return b.id - a.id;
});

console.log('sort teamCopy objects by ID desc:\n', teamCopy);

// D. sorting arrays of objects by string key

// 14. Sort the team array by last name:
const teamcopy = [...team];
teamcopy.sort(function(a,b) {
    // if(a.lName > b.lName) {
    //     return 1;
    // } else {
    //     return -1;
    // }
    return a.lName > b.lName ? 1 : -1;
});

console.log('sort teamcopy objects by lName A-Z:\n', teamcopy);

// 15. Sort by first name, *descending*, by switching to b > a:
const team_copy = [...team];
team_copy.sort(function(a,b) {
    return b.fName > a.fName ? 1 : -1;
});

console.log('sort team_copy objects by fName Z-A:\n', team_copy);

// E. randomize (shuffle) arrays of objects

// 16. Make an array of consecutive ints from 1-100:
const nums = [];
const nums2 = [];
for(let i = 1; i <= 100; i++) {
    nums.push(i);
    nums2.push(i);
}
console.log('nums:\n', nums);

// 17. Randomize the numbers: There are two ways to do this:

// A.) Fisher-Yates Shuffle Algorithm:
for(let i = 0; i < nums.length; i++) {
    let currentItem = nums[i];
    let r = Math.floor(Math.random() * nums.length);
    nums[i] = nums[r];
    nums[r] = currentItem;
}
console.log('\nFisher-Yates Shuffled nums:\n', nums);

// B.) The sort() method has a callback for randomizing the array:
nums2.sort(function(a,b) {
    return Math.random() - 0.5; // this returns a negative value 50% of the time, and a positive value the other 50% of the time, at random. This randomized the array items
})
console.log('\nsort(callback) randomized nums2:\n', nums2);

// The random sort / shuffle works with strings, too.

// 18. Declare two arrays of strings:
let fruits = ['apple', 'banana', 'cherry', 'grape', 'kiwi', 'mango', 'orange', 'papaya', 'peach', 'pear', 'tangerine'];

let froots = ['apple', 'banana', 'cherry', 'grape', 'kiwi', 'mango', 'orange', 'papaya', 'peach', 'pear', 'tangerine'];

// CHALLENGE: Randomize fruits array using Fisher-Yates Shuffle:
for(let i = 0; i < fruits.length; i++) {
    let currentItem = fruits[i];
    let r = Math.floor(Math.random() * fruits.length);
    fruits[i] = fruits[r];
    fruits[r] = currentItem;
}
console.log('\nFisher-Yates Shuffled fruits:\n', fruits);

// CHALLENGE: Randomize froots using array sort(callback):
froots.sort(function(a,b) {
    return Math.random() - 0.5; // this returns a negative value 50% of the time, and a positive value the other 50% of the time, at random. This randomized the array items
})
console.log('\nsort(callback) randomized froots:\n', froots);


// F. make an array from an object's keys

// Object.keys()

// 19. We just need one object to get the keys, so save the **team[0]** keys to a new array:
// 20. Save the first object in the array as its own variable and then save its values to a new aray:
const empObj = team[0]; // {fName: 'Pat', lName: 'Hanson', id: 7445}
const empKeysArr = Object.keys(empObj);
console.log('\nempKeysArr:', empKeysArr); // [fName, lName, id]

// Object.values()

// G. make an array from an object's values
const empValuesArr = Object.values(empObj);
console.log('\nempValuesArr:', empValuesArr); // ['Jed', 'Martin', 53]


// 21. Use **pop()** to remove the last item, the id:
empValuesArr.pop(); // 
console.log('\nempValuesArr:', empValuesArr); ['Jed', 'Martin']

// 22. Use **join()** to turn the **valuesArr** array into a string of first and last name:
let fullName = empValuesArr.join(' ');
console.log('Hello, ' + fullName); // Hello, Jed Martin