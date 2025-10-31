import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createTodo, deleteTodo, getTodos, toggleTodo } from "./features/todoSlice";

function App() {
  const dispatch = useDispatch()
  const { items: todos, loading, error } = useSelector((state) => state.todos);

  console.log("-----", todos)
  const [task, setTask] = useState("")

  const handleAdd = () => {
    console.log(task)
    if (task.trim()) {
      dispatch(createTodo(task));
      setTask("")
    }
  }

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch])

  return (
    <>
      <h1>Redux Thunk todo app</h1>
      <input type="text" onChange={(e) => setTask(e.target.value)} value={task} placeholder="Enter text: " />
      <button onClick={handleAdd}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                onClick={() => dispatch(toggleTodo(todo))}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          );
        })}

      </ul>


    </>
  )
}

export default App
