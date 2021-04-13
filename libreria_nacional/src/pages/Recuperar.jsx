import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/logIn.css';

class Recuperar extends Component {
  render() 
  { 
    return(
      <div>
        <div className="sidenav">
    
        </div>
        <div className="main">
          <div className="main-nn">
              <div className="login-form">
              <h2>Recupera tu contraseña</h2>
              <p>Se enviarán instrucciones para recuperar tu contraseña</p>
                <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo electronico"/>
                    </div>
                    <button type="submit" className="btn btn-black">Enviar</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recuperar;