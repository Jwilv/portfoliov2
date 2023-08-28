import './App.css'
import { About } from './components/About'

function App() {

  return (
    <>
      <div className="title">
        <h1 className='title-name'><i>Juan Wilvers</i></h1>
        <label className='description-home'>Front-End Developer</label>
      </div>
      <About />
    </>
  )
}

export default App
