import { useDispatch, useSelector } from "react-redux"

import "./App.css";
import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "./Features/TodoSlice";


function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  const handleAdd = () => {
    if(task.trim()){
      dispatch(addTodo(task));
      setTask("")
    }
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-box">
          <h1>Redux Todo App</h1>

          <div className="todo-input-section">
            <input type="text" value={task} placeholder="Enter a task..." onChange={(e)=>setTask(e.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span style={{textDecoration:(todo.completed)?"line-through":"none"}}  onClick={() => dispatch(toggleTodo(todo))}>{todo.text}</span>
                <button onClick={() => dispatch(toggleTodo(todo))}>task status</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
