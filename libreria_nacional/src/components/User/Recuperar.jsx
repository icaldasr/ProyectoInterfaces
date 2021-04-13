import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Recuperar.css';

class Recuperar extends Component {
  render() 
  { 
    return(
      <div>
        <div className="sidenav">
        </div>
        <div className="main">
        <div class="d-flex flex-row align-items-center back">
                <Link to='/'><button type="button" class="btn btn-rounded "><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>  Volver al inicio</button></Link>
        </div> 
          <div className="main-nn">
              <div className="login-form">
              <h2>Recupera tu contraseña</h2>
              <p>Se enviarán instrucciones para recuperar tu contraseña</p>
                <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo electronico"/>
                    </div>
                    <Link to='/logIn'><button type="submit" className="btn-btn-black">Enviar</button></Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recuperar;