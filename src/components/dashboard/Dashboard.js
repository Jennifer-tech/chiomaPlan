import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { projects } = this.props
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
    return{
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)

// To map our state from the store to the props, it is done by creating a function called mapStateToProps
// it takes in the state of our store. it returns an object and the object represents which property are attached to the props of this component so that we can access them inside this component