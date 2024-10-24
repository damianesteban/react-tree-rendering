import Tree from './components/Tree'
import './App.css'

import { treeData } from './data'

function App() {
  return (
    <>
      <div>
        <Tree data={treeData} />
      </div>
    </>
  )
}

export default App
