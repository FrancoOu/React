import {ADD_PERSON} from "../constant";


export default function personReducer(preState=[{id:'1',name:'franco',age:'12'}],action){
    const {type,data} = action
    console.log('person reducer')
    switch (type) {
        case ADD_PERSON:

            return [data, ...preState]

        default:

            return preState
    }
}