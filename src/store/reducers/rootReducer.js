// This file handles all the reducer
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
// import { firestoreReducer } from 'redux-firestore';
// combine reducer is a function that will combine all our reducers
// import { Reducerscombined }from redux

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer