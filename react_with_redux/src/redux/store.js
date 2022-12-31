// import createStore
import {createStore, applyMiddleware, combineReducers} from "redux";
// import count reducer
import countReducer from './reducers/count'
// import person reducer
import personReducer from "./reducers/person";
// import redux-thunk
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = combineReducers({count:countReducer, people: personReducer})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store