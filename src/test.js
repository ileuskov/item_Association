/* 1 possible answer : ["Item1", "Item2", "Item7", "Item8"] */
const itemAssociation = [
    ['Item1', 'Item2'],
    ['Item3', 'Item4'],
    ['Item4', 'Item5'],
    ['Item2', 'Item8'],
    ['Item7', 'Item8'],
];
/*2 possible answers : ["Item1", "Item2", "Item7", "Item8"] and ["Item3", "Item4", "Item5", "Item9"]; 
The first one will be chosen since the lists are sorted in the alphabetical order */
const itemAssociation2 = [
    ['Item1', 'Item2'],
    ['Item3', 'Item4'],
    ['Item4', 'Item5'],
    ['Item2', 'Item8'],
    ['Item7', 'Item8'],
    ['Item4', 'Item9'],
];

/* 2 possible solutions: ["Drinks", "Food", "Glass", "Popcorn"] and ["Phone", "ScreenProtector", "Tissue", "Water"]. 
The first one will be chosen since the lists are sorted in the alphabetical order */
const itemAssociation3 = [

    ['Phone', 'ScreenProtector'],
    ['Food', 'Drinks'],
    ['Drinks', 'Glass'],
    ['ScreenProtector', 'Tissue'],
    ['Drinks', 'Popcorn'],
    ['Tissue', 'Water'],
];

console.log('This is the first list: ')
itemAssociation.forEach(el => console.log(el));

console.log('This is the second list: ')
itemAssociation2.forEach(el => console.log(el));

console.log('This is the third list: ')
itemAssociation3.forEach(el => console.log(el));

// Sorting function that return the single longest recommendation list
function sorting(arr) {
    // a temp variable to count the switch
    let count = 0;

    // Iterating through the whole list
    for (let i = 0; i < arr.length;) {

        // Iterating through every object after the one chosen before
        for (let j = i + 1; j < arr.length; j++) {

            // If there is at least 1 value in a different array, the whole array is going to be concatenated with the chosen array. Completely identical arrays are being ignored
            if (arr[j].some(element => arr[i].includes(element)) && !arr[j].every(element2 => arr[i].includes(element2))) {
                // concatenation of the arrays. In the end we get an array with unique values only
                let temp = _.uniq(arr[i].concat(arr[j]));
                arr[i] = temp;
                count = 1;
                break;

            }
            else {
                count = 0;
            }
        };

        // only if there are no new shared value we move to the next array
        if (count === 0) {
            i++;
        }
    };


    // Sorting the array alphabetically
    arr.sort();
    arr.forEach(el => el.sort());
    // The array is sorted alphabetically and we just get the longest one. If there more than 1 such arrays, the first in the alphabetical order will be chosen
    const longest = _.maxBy(arr, _.size);
    return longest;
}

const answer = sorting(itemAssociation);
const answer2 = sorting(itemAssociation2);
const answer3 = sorting(itemAssociation3);

console.log('The longest item association for the 1st list is ');
console.log(answer);

console.log('The longest item association for the 2nd list is ');
console.log(answer2);

console.log('The longest item association for the 3rd list is ');
console.log(answer3);
