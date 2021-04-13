import React, { Component} from 'react';
import { Glyphicon } from 'react-bootstrap';
import './Ayuda.css';
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
            <div class="d-flex flex-row align-items-center back">
                <Link to='/'><button type="button" class="btn btn-rounded "><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>  Volver al inicio</button></Link>
            </div>

            <div className="text-center">
                <img src="https://www.iconpacks.net/icons/2/free-customer-support-icon-1714-thumb.png" className="rounded" alt="Ayuda" width="200" height="200"/>
            </div>

            <div className="text-center">
            <Link to='/preguntas'><button type="button" class="btn btn-rounded btn-blue-grey"><i class="far fa-question-circle"></i> Preguntas frecuentes</button></Link>              
                </div>
                <div className="text-center">
                    <Link to='/Contacto'><button type="button" class="btn btn-rounded btn-blue-grey"><i class="fas fa-sms"></i> Contáctanos</button></Link>              
                </div>

            </>
        );
    }
}

export default Ayuda;