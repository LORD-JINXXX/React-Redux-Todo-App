import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import InputLabel from '@mui/material/InputLabel';
import './todoInput.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,updateTodo } from '../../redux/todoApp/actions';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoInput = ({ editFormVisibility, editTodo, cancelUpdate }) => {
    const [todoValue, setTodoValue] = useState("");
    const dispatch = useDispatch();

    const [editValue, setEditValue] = useState('');
    
    useEffect(()=>{
        setEditValue(editTodo.todo);
    },[editTodo])


    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();

        let todoObject = {
            id: time,
            todo: todoValue,
            completed: false
        };

        setTodoValue('');
        dispatch(addTodo(todoObject));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let updatedTodoObject = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        };
        setEditValue("");
        dispatch(updateTodo(updatedTodoObject));
    }


    return (

        <main>

            {
                editFormVisibility === false ?
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='box'
                    >
                        <div className="label">
                            <InputLabel
                                children='Enter your task'
                                className='inputLabel' />
                        </div>
                        <div className='container'>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder='Enter your task'
                                className='textField'
                                value={todoValue}
                                onChange={(e) => setTodoValue(e.target.value)}
                            />
                            <div className="iconContainer" onClick={handleSubmit}>
                                <AddIcon className='icon' />
                            </div>
                        </div>
                    </Box> :

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        className='box'
                    >
                        <div className="label">
                            <InputLabel
                                children='update your task'
                                className='inputLabel' />
                        </div>
                        <div className='container'>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder='Update your task'
                                className='textField'
                                value={editValue || ""}
                                onChange={(e)=>setEditValue(e.target.value)}
                                
                            />
                            <div className="iconContainer" onClick={handleUpdate}>
                                <UpdateIcon className='icon' />
                            </div>
                            <div className="cancelIconContainer" onClick={cancelUpdate}>
                                <CancelIcon className='cancelIcon'  />
                            </div>
                        </div>
                    </Box>
            }

        </main>
    )
}

export default TodoInput;
