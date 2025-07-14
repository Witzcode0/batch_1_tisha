// Syntax:

// object_name = {
//     'key1':value1,
//     'key2':value2,
//     ...,
//     'keyn':valuen,
// methodName: function() {
    // code to execute
// }

// }


user = {
    'first_name': "Brijesh",
    'last_name': "Gondaliya",
    'age': 29,
    'weight': 67.89
}
// Access whole object
// console.log(user)

// Access specific element
// console.log(user.first_name)
// console.log(user.last_name)
// console.log(user.age)
// console.log(user.weight)

// console.log(user["first_name"])
// console.log(user["last_name"])
// console.log(user["age"])
// console.log(user["weight"])

// objects methods

let bill = {
    'tomato':50,
    'potato':28,
    // total: () => {
    //     console.log(this.tomato + this.potato)
    // }
}
// console.log(bill.total())

// Object destucturing

// console.log(bill)
// const {tomato, potato} = bill;

// console.log(tomato)
// console.log(potato)


const car = {
    "name": "BMW",
    "price": "25L",
    "color":"red"
}

// console.log(car)
// console.log(Object.keys(car))
// console.log(Object.values(car))
// console.log(Object.entries(car))

car_array = Object.entries(car)
// // console.log(car_array[0])
// console.log(car_array[0][0])
// console.log(car_array[0][1])
// console.log(car_array.length)

// for (let row = 0; row < car_array.length; row++){
//     for(let col = 0; col < car_array[row].length; col++){
//         console.log(car_array[row][col]);
//     }
// }
