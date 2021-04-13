import React, { Component } from 'react';
import './signUp.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class signUp extends Component {
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
          <div className="main-n">
              <div className="login-form">
              <h2>¡Registrate!</h2>
                <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo electronico"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nombre"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Apellido"/>
                    </div>
                    <div class="form-group">
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>Cédula ciudadana</option>
                        <option>NIT</option>
                        <option>Pasaporte</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Número de documento"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Teléfono celular"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <Link to='/Perfil'><button type="submit" className="btn-btn-black">Registrarse</button></Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp
