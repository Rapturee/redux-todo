import { addTodo, removeTodo, toggleComplete } from "@/redux/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [allGoalsAchieved, setAllGoalsAchieved] = useState(false);

  function handleOnChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }

  function handleToggleComplete(id) {
    dispatch(toggleComplete(id));
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodo(id));
  }

  function handleDoneButtonClick() {
    const allCompleted = todos.every((todo) => todo.done);
    setAllGoalsAchieved(allCompleted);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Todo List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          style={{ padding: "10px", fontSize: "1.2rem", marginRight: "10px", borderRadius: "5px", border: "2px solid #ccc" }}
          type="text"
          value={newTodo}
          placeholder="Make a note"
          onChange={handleOnChange}
        />
        <button
          style={{ padding: "10px 20px", fontSize: "1.2rem", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ 
              fontSize: "1.2rem",
              textDecoration: todo.done ? "line-through" : "none",
              marginBottom: "10px",
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px"
            }}
          >
            {todo.todoTitle}
            <button
              style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "1rem", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              Complete
            </button>
            <button
              style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "1rem", borderRadius: "5px", border: "none", backgroundColor: "#dc3545", color: "#fff", cursor: "pointer" }}
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ padding: "10px 20px", fontSize: "1.2rem", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}
          onClick={handleDoneButtonClick}
        >
          Done?
        </button>
        {allGoalsAchieved && (
          <p style={{ marginTop: "10px", fontSize: "1.2rem", color: "#28a745" }}>
            Congratz, all your goals today have been achieved!
          </p>
        )}
      </div>
    </div>
  );
}