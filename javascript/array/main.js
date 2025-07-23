// data collection
// - liner, non-liner

// [1,2,3,4,5]

// object_name = {
//     'key':value
// }

// Syntax
// let array_name = [val1, val2, val3,...valn];
// let array_name = new array(val1, val2, val3,...valn);
// let emptyArray = [];

// let name = ["brijesh", "jay", "vivek"];
// console.log(name)

// let mix_types = ["Text", 100, true, null];
// console.log(mix_types)

// Access elements from the array
let nums = [1,2,3,4,5];

// console.log(nums)

// indexing [indexing start by defualt 0]
// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[3]);
// console.log(nums[4]);
// console.log(nums[5]);

// console.log(nums[-1]); # undefined

// for(let start = 0; start < nums.length; start++){
//     console.log(nums[start] * nums[start]);
// }

// maping array's elements
// let multi = nums.map(num => num * num)
// console.log(multi)

// function checkOdd(num){
//     if (num % 2 != 0){
//         return num
//     }
// }

// let odd = nums.filter(num => checkOdd(num));
// console.log(odd);

// let total = 0;

// for(let start = 0; start < nums.length; start++){
//     total +=  nums[start];
// }

// console.log(total);

// let total = [1, 2, 3, 4, 5].reduce((sum, val) => sum + val, 0);
// console.log(total);

// Array methods
names = ["jay", "raj", "vivek", "ravi"];
// push()
// names.push("eric");
// new_names = ["divyesh", 'kevin'];
// names.push(new_names)

// pop()
// names.pop()
// console.log(names);

// shift()
// names.shift()
// console.log(names);

// unshift()
// names.unshift(new_names)
// console.log(names)

// splice()
// Add elements on specific position
// names.splice(1, 0, "Ram", "jhon")
// console.log(names)

// Remove elements from the array
// remove from specific index
// console.log(names)
// names.splice(1, 2);
// console.log(names)
// add value to specific index

// slice()
// Slicing
// let new_array = names.slice(1, 2); // [start, end-1]
// console.log(new_array);

// indexOf()
// console.log(names.indexOf("vivek"))

// includes()
// console.log(names.includes("vivek")) // return bool val




const vehicles = ['mustang', 'f-150', 'expedition']; 
const [car,, suv] = vehicles;
console.log(car, suv)