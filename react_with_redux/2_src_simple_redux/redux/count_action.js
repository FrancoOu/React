
import {INCREMENT, DECREMENT} from './constant'
// for creating action object

export function createIncrementAction(data){

    return {type:INCREMENT, data}
}

export function createDecrementAction(data){

    return {type:DECREMENT, data}
}
