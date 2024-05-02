import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import './todoList.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteAll, deleteTodo, handleChecked } from '../../redux/todoApp/actions';

const TodoList = ({ handleEdit, editFormVisibility }) => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.operationReducers);



    return (
        <main>
            <div className="heading"><h2>Todo List</h2></div>


            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo, i) => {
                    const labelId = `checkbox-list-label-${i}`;

                    return (
                        <ListItem
                            key={i}
                            disablePadding
                            className='list'
                        >
                            <ListItemButton role={undefined} dense >
                                {
                                    editFormVisibility === false &&
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={todo.completed}
                                            onChange={()=>dispatch(handleChecked(todo.id))}                                    
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                }

                                <ListItemText
                                    id={labelId} primary={todo.todo}
                                    style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} />
                                {
                                    editFormVisibility === false &&
                                    <ListItemIcon>
                                        <CreateIcon onClick={() => handleEdit(todo)} />
                                        <DeleteIcon onClick={() => dispatch(deleteTodo(todo.id))} />
                                    </ListItemIcon>
                                }

                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            {todos.length > 1 && <Button variant="contained" color="error" onClick={() => dispatch(deleteAll())}>
                Delete All
            </Button>}
        </main>
    )
}

export default TodoList;
