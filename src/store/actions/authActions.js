//  inorder to use the email and password to log a user inside our application, authActions are created for that
// credentials are the email and password
export const signIn = (credentials) => {
    // getFirebase is used to communicate with the firebase and sign user in
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
            // the two checks if email and password is correct and if correct it signs the user in 
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
}

// nothing was passed in the signout function because we don't need credentials to sign out
// getFirebase is needed to logOut
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        // signOut is an auth service. Because it's asynchronous, a .then method is used
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }

}

export const signUp = (newUser) => {
    // getFirebase is used to sign a ne user up using the authentication service by firebase\
    // getFirestore is used to communicate with our firestore database
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // to sign the user up using auth service, we do
        const firebase = getFirebase();
        const firestore = getFirestore();
    
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            // resp contains the information about the user that was just signed in
            // we are creating a record in firestore for the user that just signed up
            // here we need the users collection and if it doesn't exist, firebase will create it for us
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}