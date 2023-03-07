# Validating User Input

* `.value` -> retrieves the input value
* `.trim()` -> will get rid of any extra white space in an input value. 
* `.splice(index, numofitemsdeleted)` -> deletes a/multiple items from an array. 
* `replace()` -> returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or RegExp, and the replacement can be a string or function called for each match. If the pattern is a string, only the first occurance will be replaced. 
* `.replaceWith()` -> replaces this element in the children list of its parent with a set of node or string objects. 

> BEWARE: Click handler's persist, so if you click the same button multiple times on different objects.. your browser will try to execute those functions attached to the click handler. 


# Arrays & Iterables

An **Iterable** is an Object that implements the iterable protocol and has an @@iterable method. Iterables are objects that you can use the for-of loop. 

> Not every iterable is an array! Some other examples of iterables are NodeList, String, Map, & Set.

An **Array-Like** Objects are Objects that have a length property and use indicies to access items. 

> Not every array-like object is an array! Other array-like objects are NodeList & String.

## Creating Arrays

```
const arr = [1];
const arr = Array(1);
const arr = new Array(1);

const arr = Array.of(1);
const arr = Array.of("Hi");
const arr = Array.from("Hi");

const arr = Array.from(1);
```

### Adding & Removing Elements

* `push()` -> adds an element to the end of the array and returns a number which is the new length of the array.
* `unshift()` -> adds an element to the beginning of the array and returns a number which is the new length of the array.
* `pop()` -> removes the last element in the array and returns the value of the last element. 
* `shift()` -> removes the first element of the array and shifts the elements one element to the left.


#### The Splice() Method

`splice(startingIndex, numberOfIndicesDeleted, itemsAddedIntoArray);`

or 

`splice(startingIndex, numberOfIndicesDeleted);`

StartingIndex and NumberOfIndicesDeleted are both inclusive. So when you splice() an array it will include that array index. 

> `splice()` returns your removed elements from the array. You can store them into another variable. If you enter negative parameters into splice you start from the end of the array rather than the beginning. 

#### The Slice() Method

The `slice()` method returns a brand new array. Can be used to copy an array. Array's are reference objects so if you compare two arrays they would return false unless they are the exact same object. 

> Can include parameters which are a start (inclusive) and end (exclusive) value. You can have negative values but then both parameters have to be negative. 

You can specify only one parameter which will return an array starting from the specified index and the remaining elements of the array. 

#### The Concat() Method

The concat() method takes an array as its argument and will add the array elements to the first array and return a new array with the new elements. 

#### IndexOf() vs. LastIndexOf()

* `indexOf()` -> returns the first index of the element you are passing into the method. Comes with an optional second argument where you can specify which index you want to start searching. 

* `lastIndexOf()` -> does the same thing as indexOf() except it returns the index of the last occurence of the parameter specified. 

> Both methods return -1 if the argument is not found in the array. Does not work with Reference Values so it will not work with objects. 