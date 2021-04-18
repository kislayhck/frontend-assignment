import {CREATE_TODO,GET_TODO,UPDATE_TODO,DELETE_TODO,
    GET_PERSONAL_TASK,GET_MISCELLANEOUS_TASK,GET_OFFICIAL_TASK} from '../constant/types'


export const addTask = (todo) => ({
    type:CREATE_TODO,
    payload: todo,
});

export const getTask = (id) => ({
    type: GET_TODO,
    payload:id
})

export const updatedTask = (todo) => ({
    type: UPDATE_TODO,
    payload:todo,
})

export const delteTask = (id) => ({
    type: DELETE_TODO,
    payload:id
})

export const getPersonalTask = (payload) => ({
    type: GET_PERSONAL_TASK,
    payload:payload
})
export const geMiscellaneousTask = (payload) => ({
    type: GET_MISCELLANEOUS_TASK,
    payload:payload
})
export const getofficialTask = (payload) => ({
    type: GET_OFFICIAL_TASK,
    payload:payload
})