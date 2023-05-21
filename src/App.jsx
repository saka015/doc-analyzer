import { useState } from 'react'
import SideBar from './Components/SidePanel'
import MainToolBAr from './Pages/Main'
import {ToolProvider} from './ToolContext'








function App() {
  const [selectedTool, setSelectedTool] = useState(null);
  return (
    <ToolProvider value={[selectedTool, setSelectedTool]}>
    <div className="app bg-gray-100">
      <SideBar />
      
        <MainToolBAr />
       
      
      
      </div>
       </ToolProvider>
  )
}

export default App
