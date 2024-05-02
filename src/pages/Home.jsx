import React from 'react';
import TodoInput from '../components/TodoInput/TodoInput';
import TodoList from '../components/TodoList/TodoList';
import { useState } from 'react';

const Home = () => {

    const [editFormVisibility, setEditFormVisibility] = useState(false);
    const [editTodo,setEditTodo] = useState('');

    const handleEdit = (todo) => {
        setEditFormVisibility(true);
        setEditTodo(todo);
    }

    const cancelUpdate = () => {
        setEditFormVisibility(false);
    }

    return (
    <div>
        <TodoInput editFormVisibility= {editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
        <TodoList handleEdit= {handleEdit} editFormVisibility= {editFormVisibility}/>
    </div>
)
}

export default Home;
