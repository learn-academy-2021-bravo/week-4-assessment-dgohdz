// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { nodeInternals } = require("stack-utils")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED

// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:

// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// describe the name of the function and use variables provided.
/*describe("shuffleArray", () => {
    let colors1 = ["purple", "blue", "green", "yellow", "pink"]
    let outPut1 = ["yellow", "blue", "pink", "green"]
    let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    let outPut2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    // describe what the function does.
    test("returns first item from the array and shuffles the remaining content.", () => {
  
      //check the expected outputs
      expect(shuffleArray(colors1)).toEqual(outPut1)
      expect(shuffleArray(colors2)).toEqual(outPut2)
    })
  })

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

//declare a function named shuffleArray
//place a parameter names array
const shuffleArray = (array) => {
    //at this point I had trouble remembering how to use higher order functions so I had to go back and review the syllabus.
    //create a variable that maps through the array
       let eachString = array.map(value => {
           //access the the first item in the array and use .shift() to remove it from the array then use sort() to shuffle the array except I'm stuck and not exactly sure how to make it work.
           return value[0].shift() + value.sort()
       })
       return eachString
   }
   
   console.log(shuffleArray(colors1, colors2));
   
*/


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

/*describe("orderNumbers", () => {
    let nums1 = [3, 56, 90, -8, 0, 23, 6]
    let outPut1 = [-8, 90]
    let nums2 = [109, 5, 9, -59, 8, 24]
    let outPut2 = [-59, 109]
    // describe what the function does.
    test("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
  
      //check the expected outputs
      expect(shuffleArray(nums1)).toEqual(outPut1)
      expect(shuffleArray(nums2)).toEqual(outPut2)
    })
  })

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]





// b) Create the function that makes the test pass.

//declare function named orderNumbers that takes in an array
const orderNumbers = (array) => {
    //use .map() and sort() to return the array in order.
    return array.map(value.sort())
}
//log the function with the variables num1 and num2
console.log(orderNumbers(nums1, nums2));
*/



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//describe the name of the function and use variables provided.
describe("noDuplicates", () => {
    let testArray1 = [3, 7, 10, 5, 4, 3, 3]
    let testArray2 = [7, 8, 2, 3, 1, 5, 4]
    let outPut = [3, 7, 10, 5, 4, 8, 2, 1]
    // describe what the function does.
    test("returns one array with no duplicate values.", () => {
  
      //check the expected outputs
      expect(noDuplicates(testArray1)).toEqual(outPut)
      expect(noDuplicates(testArray2)).toEqual(outPut)
    })
  })

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]





// b) Create the function that makes the test pass.

//I'm completely lost on this one so I'll pseudocode what I think I need to do.

//Declare a function named no Duplicates that takes in two arrays
//assigned a variable named joinedArr
//access the values that are duplicates
//use .split() to take out those values
//use .concat() to merge the arrays
//return the joinedArr variable
//log the function and testArray1 & trestArray2
const noDuplicates = (arrays) => {
    let joinedArr = arrays.split()
}