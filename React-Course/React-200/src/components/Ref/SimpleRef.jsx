import React, { Component, createRef } from 'react'

//without forward ref

const UserNameField = ({ usernameRef }) => {
    return (
        <input type="text" ref={usernameRef} />
    )
}

export default class SimpleRef extends Component {
    usernameFieldRef = createRef()

    componentDidMount() {
        // console.log(this.usernameFieldRef.current)
        this.usernameFieldRef.current.value = 'Hi there!'
    }

    render() {
        return (
            <>
                <h1>SimpleRef</h1>
                <UserNameField usernameRef={this.usernameFieldRef} />
            </>
        )
    }
}
