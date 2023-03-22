import React, { Component } from 'react'

function TodoTable({ isLoading, items }) {

    if (isLoading) {
        return <div>Prices are being loaded... </div>
    }

    if (!items || items.length === 0) {
        return <div>No prices to display</div>
    }

    return (
        <div>
            <h1>TodoTable</h1>
            <table>
                <tbody>
                    {items.slice(0, 5).map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

class TodoComponent extends Component {
    state = {
        isLoading: false,
        items: [],
        error: ''
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        this.setState({ isLoading: true, error: '' })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const result = await response.json()
            this.setState({ items: result })
        } catch {
            this.setState({ error: 'Error loading data' })
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        const { isLoading, items } = this.state
        const { render } = this.props

        if (typeof render !== 'function') {
            return null
        }

        return render({
            isLoading,
            items,
            loadData: this.loadData
        })
    }
}

class RenderPropsComp extends Component {
    render() {
        return (
            <div>
                <h1>Render Props</h1>
                <TodoComponent render={
                    (props) => <TodoTable {...props} />
                } />
            </div>
        )
    }
}

export default RenderPropsComp
