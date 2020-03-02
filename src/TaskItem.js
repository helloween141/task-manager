import React, { useState } from "react";

export default function TaskItem({ id, title, completed }) {
  const [checked, setChecked] = useState(completed);

  return (
    <li className="task collection-item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className={`${checked ? "checked" : ""}`}>{title}</span>

      </label>
    </li>
  );
}
