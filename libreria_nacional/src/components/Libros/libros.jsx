import React, { Component } from 'react'; 
import { render } from 'react-dom';
import styles from './libros.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class libros extends Component {
  render() 
  {
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
                    <li className="breadcrumb-item active" aria-current="page">Libros</li>
                </ol>

                <div className="collapse navbar-collapse" id="basicExampleNav11">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <a href="#!" type="button"
                            className="btn btn-outline-danger btn-md btn-rounded btn-navbar waves-effect waves-light">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" className="rounded" alt="Carrito" width="25" height="25"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div>
        <section id="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg" alt="" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">100 años de soledad (Gabriel García Marquez) </h5>
                                <p class="card-text">El libro narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.</p>
                                <a href="" class="btn btn-outline-success btn-sm">Ver detalles</a>
                                <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="" alt="" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">María (Jorge Isaacs)</h5>
                                    <p class="card-text">Novela que narra en primera persona el amor de Efraín por su prima María, joven de quince años, enferma de un mal incurable.</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Ver detalles</a>
                                        <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="" alt="" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">El olvido que seremos (Hector Abad Faciolince)</h5>
                            <p class="card-text">El olvido que seremos es la reconstrucción amorosa y paciente de un personaje; está lleno de sonrisas y canta el placer de vivir, pero muestra también la tristeza y la rabia que provoca la muerte de un ser excepcional.</p>
                            <a href="" class="btn btn-outline-success btn-sm">Ver detalles</a>
                            <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
        </>

        );
    }
}
export default libros;
