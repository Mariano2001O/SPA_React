import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import About from './pages/About';


class Welcome extends React.Component{
  render(){
    return (<h2 className='text-primary'>Hola chicos yo soy un componente de clase bienvenidos.</h2>)
  }
}

function App() {
  return (
    <>
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to='/' className="navbar-brand">LOGO</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/' className='nav-link' >Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-link' >About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
      <Routes>
        <Route path='/about' Component={About} > 
        </Route>
        <Route path='/' Component={Inicio} >
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
