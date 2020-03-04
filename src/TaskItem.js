import React, { useState, useContext, useReducer } from "react";
import { Context } from "./context";

export default function TaskItem({ id, title, checked }) {
  const { dispatch } = useContext(Context);

  return (
    <li className="task collection-item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id
            })
          }
        />
        <span className={`${checked ? "checked" : ""}`}>{title}</span>
        <a
          href="#"
          className="remove-task"
          onClick={() =>
            dispatch({
              type: "remove",
              payload: id
            })
          }
        >
          remove task
        </a>
      </label>
    </li>
  );
}
