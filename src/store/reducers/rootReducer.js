// This file handles all the reducer
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
// combine reducer is a function that will combine all our reducers
import { firestoreReducer } from 'redux-firestore';  //this reducer is made for syncing our firestore data with our state in the background,
// this reducer will know about our firebase project online and how to access it bcos we already passed in our firebase config to our store in the index file
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,  // The firestoreReducer sinks the property on the state object to our data in the database.
    //  The data is going to be dependent on which component is currently active at that time and what data that component needs.
    // That's the data that that will be sinked in the state by this reducer. And we need to tell this reducer what data we want to sink, but the data will be placed on this firestore property on the state object which will be sinked
    firebase: firebaseReducer

    
});

export default rootReducer