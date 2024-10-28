import Tree from './components/Tree'
import './App.css'

import treeData from './utils.ts/data-formatter'

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
