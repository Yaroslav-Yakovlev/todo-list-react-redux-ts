import React from 'react';
import TodoItem from "./TodoItem";
import {Todo} from "../redux/todoSlice";
import {useAppSelector} from "../hooks";
import {RotatingLines} from "react-loader-spinner";

interface TodoListProps {
    filteredTodos: Todo[],
}

const TodoList: React.FC<TodoListProps> = ({filteredTodos}) => {
    const {statusLoading, error} = useAppSelector(state => state.todos)
    console.log(error)

    if (error) {
        return (
            <div className='todo-container'>
                <h1> Error {error}</h1>
            </div>
        )
    }

    const renderTodos = () =>
        (
            <ul className='todo-list'>
                {filteredTodos.length
                    ? filteredTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        )
                    )
                    : <h1>Please, add todos...</h1>
                }
            </ul>
        )

    return (
        <div className='todo-container'>
            {statusLoading
                ? <RotatingLines/>
                : renderTodos()}
        </div>
    );
};

export default TodoList;