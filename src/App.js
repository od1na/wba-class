import React from "react";
import { useState } from "react";

function HookReact() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1)
  };
  const tittle = () => {
    setTitle(title)
  }
  return (
    <div>
      
      <input
        onChange={({ target: { value } }) => setTitle(value)}
        type="text"
      />
      <h1>{ title}</h1>
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default HookReact;