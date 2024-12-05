import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AuthPage from './components/AuthPage/AuthPage'
import Video from './components/Video/Video'
import Quiz from './components/Quiz/Quiz'
import Event from './components/event/Events'
import Team from './components/Team/Team'
import Zenith from './components/Zenith/Zenith'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  const [log, setLog] = useState(false)

  return (
    <Router>
      <Navbar log = {log} setLog={setLog}/>
      <Routes>
        <Route path='/' element={<Video/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/zenith' element={<Zenith/>}></Route>
        <Route path='/signup' element={<AuthPage log={log} setLog={setLog}/>}></Route>
      </Routes>
    </Router>
  
  )
}

export default App
