class User{
    constructor (name){
        // data member
        this.name_ = name
    }
    // member function
    user_info(){
        return `My name is ${this.name_}.`
    }
}

class Employee extends User{
    constructor(name_, EmpID){
        super(name_)
        this.employee_id = EmpID;
    }

    emp_info(){
        return `Employee Id :${this.employee_id}\nName : ${this.name_}`
    }
}

// obj = new Employee("Brijesh Gondaliya", "#111")
// // console.log(obj.name_);
// console.log(obj.emp_info());

class Address extends Employee{
    constructor(name_, EmpID, add){
        super(name_, EmpID)
        this.address_ = add;
    }

    emp_full_info(){
        return `Employee Id :${this.employee_id}\nName : ${this.name_}\nAddress : ${this.address_}`
    }
}

obj = new Address("Brijesh Gondaliya", "#111", "Surat")

console.log(obj.emp_full_info())