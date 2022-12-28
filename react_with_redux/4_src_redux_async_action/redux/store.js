// import createStore
import {createStore,applyMiddleware} from "redux";
// import reducer
import countReducer from './count_reducer'
// import redux-thunk
import thunk from "redux-thunk";

const store = createStore(countReducer,applyMiddleware(thunk))

export default store