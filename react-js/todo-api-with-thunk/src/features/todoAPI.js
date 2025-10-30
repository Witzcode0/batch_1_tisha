import axios from "axios";

const API_URL = "http://localhost:5000/todos";

// GET ALL DATA
export const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

// ADD NEW TODO
export const addTodoAPI = async (newTodo) => {
    const res = await axios.post(API_URL, newTodo);
    return res.data;
}

// TOGGLE todo completed
export const toggleTodoAPI = async (todo) => {
    const res = await axios.patch(`${API_URL}/${todo.id}`, {
        completed: !todo.completed,
    });
    return res.data;
}

// DELETE todo
export const deleteTodoAPI = async (id)=> {
    await axios.delete(`${API_URL}/${id}`);
    return id;
}