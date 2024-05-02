//In this file we are defining all the actions wee need to perform basically type of action and payload

export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const HANDLE_CHECKED = 'HANDLE_CHECKED';


//Add New task
export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload
    }
}

//Delete all task
export const deleteAll = () =>{
    return {
        type: DELETE_ALL,
    }
}

//Delete a particular task
export const deleteTodo = (payload) =>{
    return {
        type: DELETE_TODO,
        payload
    }
}

//Edit a particular task

export const updateTodo = (payload) =>{
    return {
        type: UPDATE_TODO,
        payload
    }
}

//Handle Check icon

export const handleChecked = (payload) =>{
    return {
        type: HANDLE_CHECKED,
        payload
    }
}
