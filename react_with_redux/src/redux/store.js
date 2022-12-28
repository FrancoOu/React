// import createStore
import {createStore} from "redux";
// import reducer
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store