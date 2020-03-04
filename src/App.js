import React, { useState, useEffect, useReducer } from "react";
import TasksList from "./TasksList";
import { Context } from "./context";
import reducer from "./reducer";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("tasks", JSON.stringify(state)))
  );
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const addTask = target => {
    if (event.key === "Enter") {
      dispatch({
        type: "add",
        payload: taskTitle
      });
      setTaskTitle("");
    }
  };

  return (
    <Context.Provider
      value={{
        dispatch
      }}
    >
      <div className="container">
        <h1>Tasks List</h1>
        <div className="input-field col s6">
          <input
            placeholder="Create task"
            type="text"
            value={taskTitle}
            onChange={event => setTaskTitle(event.target.value)}
            onKeyPress={addTask}
          />
        </div>
        <TasksList tasks={state} />
      </div>
    </Context.Provider>
  );
}
