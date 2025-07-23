// ClassName - PascalCase
// className - camelCase

// syntax
// class className{
    // data member [attributes or property]
    // member functions [method or behaviour]
// }

// class Person{
//     // construtor
//     constructor(name, age){
//         this.n = name;
//         this.a = age;
//         // console.log(`Your name is ${this.n}. And, your age is ${this.a}`);
//     };

//     display_info(){
//         console.log(`Your name is ${this.n}. And, your age is ${this.a}`);
//     };
// };

// syntax of object:
// let obj_name = new ClassName(); 

// let b_obj = new Person("Brijesh", 29);
// b_obj.display_info();


class SahpeArea{
    PI = 3.14;

    constructor(r){
        this.r_ = r
    }

    circle_area(){
        return this.PI * this.r_ * this.r_
    }
};

// let obj1 = new SahpeArea(10);
// console.log(obj1.circle_area());

// let obj2 = new SahpeArea(20);
// console.log(obj2.circle_area());

// while (true){
//     // let radious = prompt("Please enter your radious:");
//     let obj = new SahpeArea(Math.floor(Math.random() * 10) + 1);
//     console.log(obj.circle_area());
// }
