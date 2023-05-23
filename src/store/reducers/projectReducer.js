const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
    ]
} //the initial state is created

const projectReducer = (state = initState, action) => {
    // this takes in two parameters; the state and the action. The first time it runs, the state is not active. An initial state state is passed in there for when we don't have  value
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state
    }
}
export default projectReducer