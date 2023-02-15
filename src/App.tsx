import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import {useAppSelector} from "./hooks";

function App() {
    const {todos : todos} = useAppSelector(state => state.todos)
    const todoStatus = useAppSelector(state => state.todos.statusTodo)

    const filteredTodos = () => {
        if (todoStatus === 'completed') return todos.filter(todo => todo.completed === true)
        if (todoStatus === 'uncompleted') return todos.filter(todo => todo.completed === false)

        return todos
    }

    return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
        <TodoForm/>
        <TodoList filteredTodos={filteredTodos()}/>
        <TotalCompleteItems/>
    </div>
  );
}

export default App;
