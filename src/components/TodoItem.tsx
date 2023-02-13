import React from 'react';
import {useAppDispatch} from "../hooks";
import {deleteTodo, toggleComplete} from "../redux/todoSlice";

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()

    const handleCompleteClick = () => {
        dispatch(toggleComplete(id))

    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <div className='todo-item'>
            <li className={`todo-item ${completed ? 'complete' : ''}`} key={title}>{title}</li>
            <button onClick={handleCompleteClick} className='complete-button'>
                <i className="material-symbols-outlined">done</i>
            </button>
            <button onClick={handleDeleteClick} className='delete-button'>
                <i className="material-symbols-outlined">delete</i>
            </button>
        </div>
    )
};

export default TodoItem;