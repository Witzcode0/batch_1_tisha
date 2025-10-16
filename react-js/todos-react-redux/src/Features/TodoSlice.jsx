import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState: [
        {id:1, text:"learn react", completed:false},
        {id:2, text:"learn redux", completed:true}
    ],
    reducers : {
        addTodo:(state, action) =>{
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodo:(state, action) =>{
            console.log("------------",);

            const todo = state.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo:(state, action) =>{
            return state.filter((t)=> t.id !== action.payload)
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
