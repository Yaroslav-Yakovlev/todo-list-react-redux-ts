import React from 'react';
import TodoItem from "./TodoItem";
import {Todo} from "../redux/todoSlice";
import {useAppSelector} from "../hooks";
import {RotatingLines} from "react-loader-spinner";

interface TodoListProps {
    filteredTodos: Todo[],
}

const TodoList: React.FC<TodoListProps> = ({filteredTodos}) => {
    const statusLoading = useAppSelector(state => state.todos.statusLoading)


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