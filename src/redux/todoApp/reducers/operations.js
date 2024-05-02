//In this page we are defining how to perform an action


//Importing all the actions
import { ADD_TODO, DELETE_ALL, DELETE_TODO, HANDLE_CHECKED, UPDATE_TODO } from "../actions";


//Defining initial state
const initialState = [
    {id:1, todo: 'learn react', completed: false},
    {id:2, todo: 'learn HTML', completed: false},
    {id:3, todo: 'learn CSS', completed: true},
];

//Defining action reducers basically defining what actions need to perform when a particular action is called 
export const operationReducers = (state=initialState, action) => {
    switch (action.type) {
        
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        case DELETE_TODO:
            const filteredTodo = state.filter((todo)=> todo.id !== action.payload);
            return filteredTodo;
            
        case UPDATE_TODO:
            const data = action.payload;
            const updatedArray = [];
            
            state.map((item)=>{
                if (item.id===data.id) {
                    item.todo = data.todo;
                    item.completed =  data.completed;
                }

                return updatedArray.push(item);
            });

            return updatedArray;

        case HANDLE_CHECKED:
            let todoArray = [];

            state.map((item)=>{
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                return todoArray.push(item);
            });

            return todoArray;

        default: return state;
    }
};

