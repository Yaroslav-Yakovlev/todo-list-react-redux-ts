import React from 'react';
import {useAppSelector} from "../hooks";

const TotalCompleteItems: React.FC = () => {
    const completeTodos = useAppSelector((state) => state.todos.todos.filter(todo => todo.completed))

    return (
        <div className='completed-items'>
            <span>Total Complete Items: {completeTodos.length}</span>
        </div>
    );
};

export default TotalCompleteItems;