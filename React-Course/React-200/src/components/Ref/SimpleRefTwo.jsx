import React, { Component, createRef, forwardRef } from 'react'

//with forward ref

const UserNameField = forwardRef((props, ref) => (
        <input type="text" ref={ref} {...props} />
    ))

export default class SimpleRefTwo extends Component {
    usernameFieldRef = createRef()

    componentDidMount() {
        // console.log(this.usernameFieldRef.current)
        this.usernameFieldRef.current.value = 'Hi there!'
    }

    render() {
        return (
            <>
                <h1>SimpleRefTwo</h1>
                <UserNameField name="hi" ref={this.usernameFieldRef} />
            </>
        )
    }
}
