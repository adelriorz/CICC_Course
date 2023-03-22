import React, { Component, createRef, forwardRef } from 'react'

const withInputStyles = (WrappedComponent) => {

    class WithInputStylesClass extends Component {
        render() {
            const { forwardedRef, ...props } = this.props

            return (
                <WrappedComponent
                    {...props}
                    ref={forwardedRef}
                    style={{ border: '1px solid red', padding: 10 }}
                />
            )
        }
    }

    return forwardRef((props, ref) => (
        <WithInputStylesClass {...props} forwardedRef={ref} />
    ))
}

const UserNameField = forwardRef((props, ref) => (
    <input type="text" ref={ref} {...props} />
))

const StyledUsernameField = withInputStyles(UserNameField)

export default class RefWithHOC extends Component {
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
                <h1>Ref with HOC</h1>
                <UserNameField />
                <br/>
                <StyledUsernameField ref={this.inputRef} />
            </>
        )
    }
}