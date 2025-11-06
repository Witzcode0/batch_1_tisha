import axios from "axios";

export const graphQuery = async (query) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/graphql",
      { query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Axios Response:", res);

    const json = res.data;
    console.log("GraphQL JSON Response:", json);

    // ✅ Handle GraphQL errors
    if (json.errors) {
      throw new Error(json.errors.map((e) => e.message).join(", "));
    }

    // ✅ Return data
    return json.data;
  } catch (err) {
    console.error("GraphQL fetch error (axios):", err);
    throw err;
  }
};

export const getStudents = async () => {
  const query = `
    {
      students {
        id
        name
        age
      }
    }
  `;

  const data = await graphQuery(query);
  return data.students;
};
