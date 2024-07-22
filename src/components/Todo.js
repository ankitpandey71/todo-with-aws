import React, { useState } from "react";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Data Here"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

        <div>
          {todoList.map((e, key) => (
            <ol>
              <li key={key}>{e}</li>
            </ol>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
