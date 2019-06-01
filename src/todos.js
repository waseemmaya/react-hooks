import React, { useState } from "react";

// separate component for rendering todo
// { todo, index } destructing

function Todo({ todo, index }) {
  console.log("todo: ", todo);

  return <div className="todo">{todo.text}</div>;
}

function App() {
  let todos = [
    { text: "Learn React", isCompleted: false },
    { text: "Learn React Native", isCompleted: false },
    { text: "NodeJS", isCompleted: false }
  ];

  useState(todos);

  return (
    <div className="app">
      <div className="todolist">
        <h1>Todos</h1>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
