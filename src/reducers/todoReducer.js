import {CREATE_TODO,GET_TODO,UPDATE_TODO,DELETE_TODO,
    GET_PERSONAL_TASK,GET_OFFICIAL_TASK,GET_MISCELLANEOUS_TASK} from '../constant/types'

const initialState = {
    totalTask : [],
    updatedTask:null,
}

export const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_TODO: 
        return {
            ...state,
            totalTask:[action.payload,...state.totalTask]
        }
        case GET_TODO: 
        let editArr = state.totalTask.filter(totalTask => totalTask.id == action.payload);
        editArr = editArr.values();
        for(let val of editArr){
            editArr = val;
        }
        return {
            ...state,
            updatedTask: editArr, 
        }
        case UPDATE_TODO:
            return {
                ...state,
                totalTask: state.totalTask.map(totalTask => totalTask.id === action.payload.id ? action.payload : totalTask),
            }

        case DELETE_TODO:
            return {
                ...state,
                totalTask: state.totalTask.filter(totalTask => totalTask.id !== action.payload),
            }    
        case GET_PERSONAL_TASK:
            return {
                ...state,
                totalTask: state.totalTask.filter(totalTask => totalTask.tag === action.payload),
            }  
        case GET_OFFICIAL_TASK:
            return {
                ...state,
                totalTask: state.totalTask.filter(totalTask => totalTask.tag === action.payload),
            }   
        case GET_MISCELLANEOUS_TASK: 
            return {
                ...state,
                totalTask: state.totalTask.filter(totalTask => totalTask.tag === action.payload),
            }     
            
        default:
        return state;
    }
}