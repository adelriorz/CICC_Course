import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        text: '',
        textarea: '',
        // checkbox: false,
        // singleSelect: '',
        // multipleSelect: []
    }

    submitForm = () => { }

    changeHandler = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { text, textarea, checkbox, multipleSelect, singleSelect } = this.state
        return (
            <>
                <pre style={{ textAlign: "left" }}>{JSON.stringify(this.state, null, 2)}</pre>
                <form onSubmit={this.submitForm}>
                    <label>Text</label>
                    <br />
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={this.changeHandler}
                    />
                    <br />

                    <label>Text Area</label>
                    <br />
                    <textarea
                        name="textarea"
                        cols="30"
                        rows="3"
                        value={textarea}
                        onChange={this.changeHandler}
                    >
                    </textarea>
                </form>
            </>
        )
    }
}
