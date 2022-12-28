


function countReduer(preState= 0, action){


    const {type,data} = action
    console.log(type,data)
    switch (type) {
        case 'increment':

            return preState + data

        case 'decrement':

            return preState - data


        default:

            return preState
    }
}

export default countReduer