import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';

function App() {
  return (
    <>
    <Router>
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="...">Massacre</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Rock argentino</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
                <Link to='/inicio' className='nav-link' >Inicio</Link>
              </li>
        <li className="nav-item">
                <Link to='/productos' className='nav-link' >Productos</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-link' >Acerca de</Link>
              </li>
              <li className="nav-item">
                <Link to='/contacto' className='nav-link' >Contacto</Link>
              </li>
              
        </ul>
      </div>
    </div>
  </div>
</nav>
      <Routes>
        <Route path='/about' Component={About} > 
        </Route>
        <Route path='/inicio' Component={Inicio} >
        </Route>
        <Route path='/contacto' Component={Contacto}>
        </Route>
        <Route path='/productos' Component={Productos}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
