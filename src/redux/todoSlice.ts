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
            const toggledTodo = state.todos.find((todo) => todo.id === action.payload)
            if (toggledTodo) {
            toggledTodo.completed = !toggledTodo.completed
            }
        },

        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        filterTodos: (state, action:PayloadAction<string>) => {
            state.statusTodo = action.payload
        }
    },
})

export const { addTodo, toggleComplete, deleteTodo, filterTodos } = todoSlice.actions

export default todoSlice.reducer