import React, { useState, useEffect } from "react"
import TasksList from "./TasksList"

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([])

  const [taskTitle, setTaskTitle] = useState("")

  useEffect(() => {
    const raw = localStorage.getItem('tasks', JSON.stringify(tasks)) || []
    setTasks(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = target => {
    if (event.key === "Enter") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: taskTitle
        }
      ]);

      setTaskTitle("");
    }
  };

  return (
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
      <TasksList tasks={tasks} />
    </div>
  );
}
