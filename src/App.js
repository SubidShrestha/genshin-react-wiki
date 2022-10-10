import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.js'
import Characters from './Pages/Characters.js'
import Weapons from './Pages/Weapons.js'
import ErrorPage from './Pages/ErrorPage.js'

function App() {

  return (
    <>
      <Router>
        <div className="head-container">
        <h1>Genshin Wiki</h1>
          <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/characters">Characters</Link></li>
                <li className='nav-item'><Link to="/weapons">Weapons</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/characters' element={ <Characters /> } />
          <Route path='/weapons' element={ <Weapons /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
