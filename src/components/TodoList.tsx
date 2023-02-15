import React from 'react';
import TodoItem from "./TodoItem";
import {Todo} from "../redux/todoSlice";

interface TodoListProps {
    filteredTodos: Todo[],
}

const TodoList: React.FC<TodoListProps> = ({filteredTodos}) => {


    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;