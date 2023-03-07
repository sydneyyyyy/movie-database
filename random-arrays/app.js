// const numbers = [1, 2, 3];
// console.log(numbers);

// // uses a constructor function
// // const moreNumbers = new Array("Hi", "Welcome");
// // console.log(moreNumbers);

// // // slower than the first option. 
// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// // Array.from() allows you to take an array-like object and turn it into an array.
// const moreNumbers = Array.from('Hi!')
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "sports"];
// // multiple datatypes
// const personalData = [30, "max", {moreDetail: []}];

// // nested arrays
// const analyticsData = [[1, 1.6], [0, -5, 1.2]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);


// hobbies.push('Reading');
// hobbies.unshift('Coding');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies, hobbies[4]);

// hobbies.splice(0, 0, 'Good Food');
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// console.log(removedElements);


// Selecting Ranges and Creating Copies
const testResults = [1, 34, 1.5, 3.5, -5, 1.5, 8];
// const storedResults = testResults.slice(0, 2); // returns [1, 34];
const storedResults = testResults.concat([3, 2.99]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

const personData = [{name: 'max'}, {name: 'manuel'}];
console.log(personData.indexOf({name: 'manuel'}));



