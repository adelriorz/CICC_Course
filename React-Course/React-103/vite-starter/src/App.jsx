import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './modules/Form'
import List from './modules/List'

class App extends Component{
  render(){
    return(
      <>
        {/* <Form /> */}
        <List />
      </>
    )
  }
}

export default App
