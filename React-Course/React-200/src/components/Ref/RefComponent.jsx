import React, { Component, createRef } from 'react'

export default class RefComponent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <h1>RefComponent</h1>
                <input type="text" ref={this.inputRef} />
            </>
        )
    }
}