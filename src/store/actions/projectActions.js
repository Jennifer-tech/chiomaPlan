// This file contains diff actions that can be done in a project such as del, adding etc of a project
// Dispatch: it dispatches an action to the reducer

export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Chioma',
            authorLastName: 'Muofunanya',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
        dispatch({ type: 'CREATE_PROJECT', project })
        // our actions were passed as a parameter in the dispatch function
        // project: project {from ES6 bcos it's the same it's just project}
    }
}