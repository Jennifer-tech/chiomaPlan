import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' //it is used to connect the component to the firestore
import { compose } from 'redux'
import { Navigate } from 'react-router-dom'
// import { redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { projects, auth } = this.props;
        if(!auth.uid) return <Navigate to='/signin' />
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <ProjectList projects={projects}/>
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth //from this we can know when a user is logged in or not
    }
}
// the firestoreConnect function takes in an array as a parameter and this array takes series of object
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }  //this shows that the collection to be listened to is projects collection
    ])
)(Dashboard)

// To map our state from the store to the props, it is done by creating a function called mapStateToProps
// it takes in the state of our store. it returns an object and the object represents which property are attached to the props of this component so that we can access them inside this component