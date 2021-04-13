import React, { Component} from 'react';

//import styles from './App.module.css'
import { Glyphicon } from 'react-bootstrap';
import Styles from '../components/Ayuda.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Ayuda extends Component {
    render() {
        return(
            <>
            <div>
                <nav className="navbar navbar-expand-md navbar-light">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav11"
                        aria-controls="basicExampleNav11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Inicio</li>
                        <li className="breadcrumb-item active" aria-current="page">Ayuda</li>
                    </ol>

                    <div className="collapse navbar-collapse" id="basicExampleNav11">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pl-2 mb-2 mb-md-0">
                                <Link to='./Compras'>
                                    <button type="submit"className="btn btn-outline-danger btn-md btn-rounded btn-navbar waves-effect waves-light">
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" className="rounded" alt="Carrito" width="25" height="25"/>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="text-center">
                <img src="https://www.iconpacks.net/icons/2/free-customer-support-icon-1714-thumb.png" className="rounded" alt="Ayuda" width="200" height="200"/>
            </div>

            <div className="text-center">
                    <button type="button" variant="primary" className="boton">
                        <span aria-hidden="true"></span> Preguntas frecuentes
                    </button>
                </div>
                <div className="text-center">
                    <button type="button" variant="primary" className="boton">
                        <span aria-hidden="true"></span> Preguntas sobre pago
                    </button>
                    </div>
                <div className="text-center">
                    <button type="button" variant="primary" className="boton">
                        <span aria-hidden="true"></span> Preguntas sobre envío
                    </button>
                    </div>
                <div className="text-center">
                    <button type="button" variant="primary" className="boton">
                        <span aria-hidden="true"></span> Contactenos
                    </button>                    
                </div>

            </>
        );
    }
}

export default Ayuda;