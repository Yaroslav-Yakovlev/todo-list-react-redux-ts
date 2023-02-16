import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";


export type Todo = {
    id: string,
    title: string,
    completed: boolean,
}

export type TodosState = {
    todos: Todo[],
    statusTodo: string,
    statusLoading: boolean,
    error: string | null,
}


export const getTodosAsync = createAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'todos/TodosAsync',
    async function (_, {rejectWithValue}) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

            if (!response.ok) {
                return rejectWithValue ('Error!')
            }

            return await response.json()
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: <TodosState> {
        todos: [],
        statusTodo: 'all',
        statusLoading: false,
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

        toggleComplete: (state, action:PayloadAction<string>) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload)
            if (toggledTodo) {
            toggledTodo.completed = !toggledTodo.completed
            }
        },

        deleteTodo: (state, action:PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        filterTodos: (state, action:PayloadAction<string>) => {
            state.statusTodo = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTodosAsync.pending, (state) => {
                state.statusLoading = true
                state.error = null
            })

            .addCase(getTodosAsync.fulfilled, (state, action) => {
                state.todos = action.payload
                state.statusLoading = false
            })

            .addCase(getTodosAsync.rejected, (state) => {
                state.statusLoading = false
            })
    }
})

export const { addTodo, toggleComplete, deleteTodo, filterTodos } = todoSlice.actions

export default todoSlice.reducer