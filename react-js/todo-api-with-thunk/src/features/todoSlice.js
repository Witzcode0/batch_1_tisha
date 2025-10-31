import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoAPI, fetchTodos, toggleTodoAPI } from "./todoAPI";

export const getTodos =  createAsyncThunk("todos/getTodos", async () => {
    return await fetchTodos();
})

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
    const newTodo = {
        text, completed: false
    }
    console.log(newTodo, "-------")
    return await addTodoAPI(newTodo);
})

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {    
    return await toggleTodoAPI(todo);
})

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
    return await deleteTodoAPI(id);
})

const todoSlice = createSlice({
    name:"todos",
    initialState: {
        items:[],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
        // fetch todos
        .addCase(getTodos.pending, (state) => {
            state.loading = true;
        })
        .addCase(getTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(getTodos.rejected, (state, action) => {
            state.loading =  false;
            state.error = action.error.message;
        })
        .addCase(createTodo.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(toggleTodo.fulfilled, (state, action) => {
            const index = state.items.findIndex((t) => t.id == action.payload.id);
            state.items[index] = action.payload;
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
        })
    }
})

export default todoSlice.reducer;