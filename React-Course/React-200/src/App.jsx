import './App.css'
import TodoTable from './components/HOC/TodoTable'
import FaaC from './components/FaaC/FaaC'
import HOC from './components/HOC/HOC'
import RenderPropsComp from './components/RenderProps/RenderPropsComp'
import RefComponent from './components/Ref/RefComponent'
import SimpleRef from './components/Ref/SimpleRef'
import SimpleRefTwo from './components/Ref/SimpleRefTwo'
import RefWithHOC from './components/Ref/RefWithHOC'

function App() {
  return (
    <div className="App">
      {/* HOC - Higher order components */}
      {/* <HOC />
      <TodoTable />
      <FaaC />
      <RenderPropsComp /> */}
      <SimpleRef />
      <SimpleRefTwo />
      <RefComponent />
      <RefWithHOC />
    </div>
  )
}

export default App
