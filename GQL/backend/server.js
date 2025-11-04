const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Schema
const schema = buildSchema(`
    type Query{
        hello: String
        student(id: Int!) : Student
        students : [Student]
    }

    type Student {
        id: Int
        name: String
        age: Int
    }

    type Mutation {
        createStudent(id: Int!, name: String, age: Int): String
        updateStudent(id: Int!, name: String, age: Int): Student
        deleteStudent(id: Int!): String
    }
`);

// Fake Data
const studentData = [
    {id: 1, name: "Brijesh", age: 29},
    {id: 2, name: "Raj", age: 49},
    {id: 3, name: "Jay", age: 23},
    {id: 4, name: "Bob", age: 27},
    {id: 5, name: "Aman", age: 89},
]


// Resolover
const root = {
    hello: () => "Welcome to GRAPHQL api.",
    student: ({id}) => studentData.find(student => student.id === id),
    students: () => studentData,
    createStudent: ({ id, name, age }) => {
    studentData.push({ id, name, age });
    return "Student added successfully";
    },
    updateStudent: ({id, name, age}) => {
        const student = studentData.find(s => s.id === id);
        console.log(student);
        
        if (!student) {
            throw new Error("Student Not Found");
        }

        if (name) {
            student.name = name
        }

        if (age) {
            student.age = age
        }

        return student;
    },
    deleteStudent: ({id}) => {
        const student = studentData.find(s => s.id === id);
        if (!student) {
            throw new Error("Student Not Found");
        }

        studentData.splice(student, 1);

        return "Student Deleted Successfully";
    }
}

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(5000, () => {
    console.log("GraphQL Server running at http:/localhost:5000/graphql");
});