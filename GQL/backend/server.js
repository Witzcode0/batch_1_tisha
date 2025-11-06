const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

// ✅ 1. Schema
const schema = buildSchema(`
  type Query {
    hello: String
    student(id: Int!): Student
    students: [Student]
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

// ✅ 2. Fake Data
const studentData = [
  { id: 1, name: "Brijesh", age: 29 },
  { id: 2, name: "Raj", age: 49 },
  { id: 3, name: "Jay", age: 23 },
  { id: 4, name: "Bob", age: 27 },
  { id: 5, name: "Aman", age: 89 },
];

// ✅ 3. Resolver
const root = {
  hello: () => "Welcome to GraphQL API.",
  student: ({ id }) => studentData.find((s) => s.id === id),
  students: () => studentData,

  createStudent: ({ id, name, age }) => {
    studentData.push({ id, name, age });
    return "Student added successfully";
  },

  updateStudent: ({ id, name, age }) => {
    const student = studentData.find((s) => s.id === id);
    if (!student) {
      throw new Error("Student Not Found");
    }

    if (name !== undefined) student.name = name;
    if (age !== undefined) student.age = age;

    return student;
  },

  deleteStudent: ({ id }) => {
    const index = studentData.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error("Student Not Found");
    }

    studentData.splice(index, 1);
    return "Student deleted successfully";
  },
};

// ✅ 4. Initialize Express
const app = express();

// ✅ 5. Fix CORS (No trailing slash!)
app.use(
  cors({
    origin: "http://localhost:5173", // must exactly match frontend origin
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ 6. GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

// ✅ 7. Start server (fixed typo: http:// not http:/)
app.listen(5000, () => {
  console.log("🚀 GraphQL Server running at http://localhost:5000/graphql");
});
