import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../components/logIn.css';

class logIn extends Component {
  render() 
  {
    return(
      <div>
        <div className="sidenav">
    
        </div>
        <div className="main">
          <div className="main-nn">
              <div className="login-form">
              <h2>¡Inicia sesión!</h2>
                <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo electronico"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Contraseña"/>
                      <Link to='/recuperar' className="navbar-brand mx-auto">¿Olvidaste tu contraseña? </Link>
                    </div>
                    <Link to='/Perfil'><button type="submit" className="btn btn-black">Ingresar</button></Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default logIn
