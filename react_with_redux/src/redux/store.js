// import count reducer
import countReducer from './reducers/count'
// import person reducer
import personReducer from "./reducers/person";
// import redux-thunk
import thunk from "redux-thunk";
// import redux dev tools
import {configureStore} from "@reduxjs/toolkit";

// const reducer = combineReducers({count:countReducer, people: personReducer})
// const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default configureStore({
    reducer:{count:countReducer, people: personReducer},
    middleware:[thunk]
})