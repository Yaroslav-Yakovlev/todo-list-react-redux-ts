import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
        <TodoForm/>
        <TodoList/>
        <TotalCompleteItems/>
    </div>
  );
}

export default App;
