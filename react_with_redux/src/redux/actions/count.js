
import {INCREMENT, DECREMENT} from '../constant'
// for creating action object

export function createIncrementAction(data){

    return {type:INCREMENT, data}
}

export function createDecrementAction(data){

    return {type:DECREMENT, data}
}
//async increment
export const createAsyncIncrementAction = (data,time) =>{
    return (dispatch) =>{
        setTimeout(() =>{
            dispatch(createIncrementAction(data))
        },time)
    }
}