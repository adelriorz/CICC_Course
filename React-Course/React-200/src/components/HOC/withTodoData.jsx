import { Component } from 'react'

const withCryptoPrices = (WrappedComponent) => {
    return class extends Component {
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
            }catch {
                this.setState({ error: 'Error loading data' })
            }finally {
                this.setState({ isLoading: false })
            }
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    // {...this.state}
                    isLoading={this.state.isLoading}
                    items={this.state.items}
                    error={this.state.error}
                    loadData={this.loadData}
                />
            )
        }

    }
}

export default withCryptoPrices