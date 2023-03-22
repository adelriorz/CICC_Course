//FaaC - Function as a Child
// FaaC is a function that takes a function as a child and returns a React element that calls the function with the props as an argument



import React, { Component } from 'react'

const bold = (string) => <strong>{string}</strong>
const italic = (string) => <em>{string}</em>

const Formatter = (props) => {
    const x = "Hello!"
    console.log(props)
    if(typeof props.children !== 'function'){
        console.log('children prop must be a function')
        return null
    }

    return props.children({ bold, italic, x })
}

export default class FaaC extends Component {
    render() {
        return (
            <>
                <h1>FaaC</h1>
                <Formatter>
                    This text does not know about the Formatter function
                </Formatter>
                <p>This is a normal paragraph without Formatter</p>
                <Formatter>
                    {({ bold, x }) => (
                        <>
                            <p>{x}</p>
                            <p>This text is {bold('bold')}</p>
                        </>
                    )}
                </Formatter>
            </>
        )
    }
}

