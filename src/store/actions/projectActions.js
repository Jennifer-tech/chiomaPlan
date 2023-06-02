// This file contains diff actions that can be done in a project such as del, adding etc of a project
// Dispatch: it dispatches an action to the reducer
import {collection, doc, updateDoc} from 'firebase/firestore'

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        // getState returns the state object
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').setDoc({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
        // dispatch({ type: 'CREATE_PROJECT', project })
        // our actions were passed as a parameter in the dispatch function
        // project: project {from ES6 bcos it's the same it's just project}
    }
}