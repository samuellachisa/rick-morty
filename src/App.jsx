import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Character from './components/Character'
import Episode from './components/Episode'
import Location from './components/Location'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
 

  return (
    <div className="App">
      <Router>
   
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path='/character' element={<Character/>} exact></Route>
        <Route path='/episode' element={<Episode/>} exact></Route>
        <Route path='/location' element={<Location/>} exact></Route>
      </Routes>
      </Router>
    
    </div>
  )
}

export default App
