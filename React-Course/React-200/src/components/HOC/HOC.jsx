import React, { Component } from 'react'

//HOC - Higher order components

// A function that takes a component as an argument and returns a new component

const withFormatting = (WrappedComponent) => {

    return class extends Component {
        bold = (string) => <strong>{string}</strong>
        italic = (string) => <em>{string}</em>
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    bold={this.bold}
                    italic={this.italic}
                />
            )
        }
    }
}

class HOC extends Component {

    render() {
        return (
            <div>
                <h1>HOC {this.props.name}</h1>
                <p>This text is {this.props.bold('bold')} and {this.props.italic('italic')}</p>
            </div>
        )
    }
}

export default withFormatting(HOC)
