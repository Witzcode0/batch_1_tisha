import { useSelector } from "react-redux"

import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="todo-container">
        <div className="todo-box">
          <h1>Redux Todo App</h1>

          <div className="todo-input-section">
            <input type="text" placeholder="Enter a task..." />
            <button>Add Task</button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span style={{textDecoration:(todo.completed)?"line-through":"none"}}>{todo.text}</span>
                <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
