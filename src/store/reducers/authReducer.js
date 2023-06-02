const initState = {
    authError: null //it' null because we are not trying to log it in, if we get login error, it updates the state of the auth error and it becomes login failed
} //the initial state is created

const authReducer = (state = initState, action) => {
    // this takes in two parameters; the state and the action. The first time it runs, the state is not active. An initial state is passed in there for when we don't have value
    // here, we check the action type
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.mesage
            }
        default:
            return state;

    }
}
export default authReducer