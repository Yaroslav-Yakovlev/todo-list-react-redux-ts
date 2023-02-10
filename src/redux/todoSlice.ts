import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

type Todo = {
    id: string,
    title: string,
    completed: boolean,
}

type TodosState = {
    todos: Todo[],
    statusTodo: string,
    statusLoading: string,
    error: string | null,
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState: <TodosState> {
        todos: [],
        statusTodo: 'all',
        statusLoading: '',
        error: null,
    },

    reducers: {
        addTodo:(state, action: PayloadAction<string>) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },

        toggleComplete: (state, action:PayloadAction<string | boolean>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload)
            state.todos[index].completed = action.payload.completed
        },

        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions

export default todoSlice.reducer