// syntax: ...iterable

// const arr1 = [1,2,3];
// const arr2 = [...arr1];

// console.log(arr2)

// const a = [1,2];
// const b = [3,4];

// const c = [...a, ...b];
// console.log(c);

const user = {
    name: "Brijesh", 
    age:25
}
const copyUser = {...user};

// console.log(copyUser);

// const nums = [5, 10, 15, 20, 25];
// const maxNum = Math.max(...nums);
// console.log(maxNum);

// Rest : It collects multiple elemenst into a single array or object.

// function bill(a, b){
//     return a + b;
// }

// console.log(bill(10, 20));

// function bill(...items){
//     return items.reduce((total, item) => total + item, 0);
// }

// console.log(bill(10, 20, 100, 789))

const [first, second, ...rest] = [10, 20, 30, 40, 50]
console.log(first)
console.log(second)
console.log(rest)