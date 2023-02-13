import React from 'react';
import {useAppSelector} from '../hooks'
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
    const {todos} = useAppSelector(state => state.todos)

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map((todo) => (
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