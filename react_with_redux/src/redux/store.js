// import createStore
import {createStore, applyMiddleware, combineReducers} from "redux";
// import count reducer
import countReducer from './reducers/count'
// import redux-thunk
import thunk from "redux-thunk";
// import person reducer
import personReducer from "./reducers/person";
const reducer = combineReducers({count:countReducer, people: personReducer})
const store = createStore(reducer,applyMiddleware(thunk))

export default store