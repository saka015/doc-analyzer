
import TextContainer from './Pages/Container'
import TextEditor from './Pages/Editor'
import MainToolBAr from './Pages/Main'







function App() {
  return (
    <div className="app bg-gray-100">
      {/* <Sidebar/> */}
      <MainToolBAr />
      <br />
      <div className='mt-8 flex justify-center'>
        <TextContainer width="800px" height="800px" placeholder="Type something..." />
        </div>
      
    </div>
  )
}

export default App
