import React, { Component } from 'react'; 
import { render } from 'react-dom';
import styles from './Navbar.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component 
{
  render()
  {
    return(

        <nav className={`navbar navbar-expand-md navbar-dark  pt-5 pb-5 ${styles.bg_red}`}>
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              
              </li>
              <li className="nav-item">
                  <Link to = '/' className="nav-link" >Inicio</Link>
              </li>
              <li className="nav-item">

                  <Link to ='/libros' className="nav-link">Libros</Link>
              </li>
              <li className="nav-item">
                  <Link to='/Ayuda' className="nav-link">Ayuda</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <Link to='/' className="navbar-brand mx-auto">Libreria Nacional </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
         
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to ='/logIn' className="nav-link">Iniciar sesión</Link>
              </li>

              <li className="nav-item"  >
                  <Link to ='/signUp' className="nav-link">Registrarse</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
