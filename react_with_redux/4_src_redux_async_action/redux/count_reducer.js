import {DECREMENT, INCREMENT} from "./constant";


function countReduer(preState= 0, action){


    const {type,data} = action
    console.log(type,data)
    switch (type) {
        case INCREMENT:

            return preState + data

        case DECREMENT:

            return preState - data


        default:

            return preState
    }
}

export default countReduer