import React, { Component } from 'react'; 
import { render } from 'react-dom';
import styles from './message.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Message extends Component
{
    render()
    {
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-3">¡Gracias por su compra!</h1>
                    <p className="lead"><strong>Consulte su correo</strong> para ver el recibo y la información de envio.</p>
                    <hr>
                    </hr>
                    <p>
                        ¿Alguna duda sobre su compra? <Link to= './Ayuda'>Ayuda</Link>
                    </p>
                    <p className="lead">
                        <Link to= './' className="btn btn-primary btn-red" role="button">Regresar a inicio</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Message; 