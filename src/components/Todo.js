import React, { useState } from "react";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Data Here"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={() => setTodoList([todoInput, ...todoList])}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Todo;
