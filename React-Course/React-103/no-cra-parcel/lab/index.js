import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import ChallengeOne from './components/ChallengeOne'
import ChallengeTwo from './components/ChallengeTwo'

class App extends React.Component {

  state = {
    hide: false
  }

  toggle = () => {
    this.setState({ hide: !this.state.hide })
  }

  render() {
    return (
      <div className="App">
        <h1>React Lab 102</h1>
        <button onClick={this.toggle} className='btn large'>Toggle</button>
        {/* Import Components (ChallengeOne and Challenge Two) here */}

        {!this.state.hide && (
          <>
            <ChallengeOne />
            <ChallengeTwo />
          </>
        )}
      </div>
    );
  }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)
