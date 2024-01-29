import React, {useState} from 'react';
import {useAppDispatch} from "../hooks";
import {addTodo, filterTodos} from '../redux/todoSlice'


const  TodoForm: React.FC = () => {
    const [value, setValue] = useState('')

    const dispatch = useAppDispatch()

    const addTodosHandler = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!value) return

        dispatch(addTodo(value))

        setValue('')
    }

    const changesTodoFilter = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        dispatch(filterTodos(value))
    }


    return (
        <div className='form'>
            <form onSubmit={addTodosHandler}>
                <input
                    className='input'
                    type='text'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder='Add Todo...'
                />
                <button className='input-button' type='submit' >Add</button>

                <div className='select'>
                    <select onChange={changesTodoFilter} name='todos' className='filter-todo'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;