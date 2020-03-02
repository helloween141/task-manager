import React from "react";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks }) {
  return (
    <ul className="collection">
      {tasks.map(item => (
        <TaskItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
