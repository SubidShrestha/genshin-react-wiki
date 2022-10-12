import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.js'
import CharacterList from './Pages/CharacterList.js'
import WeaponList from './Pages/WeaponList.js'
import ErrorPage from './Pages/ErrorPage.js'
import Characters from './Pages/Characters.js'

function App() {

  return (
    <>
      <Router>
        <div className="head-container">
        <h1>Genshin Wiki</h1>
          <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/characters/">Characters</Link></li>
                <li className='nav-item'><Link to="/weapons">Weapons</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/characters' element={ <CharacterList /> } />
          <Route path='/characters/:character' element={ <Characters /> } />
          <Route path='/weapons' element={ <WeaponList /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </Router>
      <div className='foot-container'>
        <footer>Not Licensed and only for learning purpose</footer>
      </div>
    </>
  );
}

export default App;
