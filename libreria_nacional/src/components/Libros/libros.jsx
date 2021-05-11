import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './libros.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class libros extends Component {
  render() 
  {
    return(
        <>

        <div>
            <nav className="navbar navbar-expand-md navbar-light" aria-label="breadcrumb">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav11"
                    aria-controls="basicExampleNav11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Inicio</li>
                        <li class="breadcrumb-item active" aria-current="page">Libros</li>
                    </ol>
                    </nav>

                    <div className="collapse navbar-collapse" id="basicExampleNav11">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pl-2 mb-2 mb-md-0">
                                <Link to='./Compras'>
                                    <button type="submit"className="btn boton btn-md btn-rounded btn-navbar waves-effect waves-light">
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" className="rounded" alt="Carrito" width="25" height="25"/>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>

        <div>
        <br></br>
        <br></br>
            <section id="gallery">
                <div class="container">
                    <div class="row hola">
                        <div class="col-lg-4 mb-4" >
                            <div class="card" >
                                <img src="https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg" alt="" class="card-img-top" width="100" height="500" />
                                    <div class="card-body">
                                        <h5 class="card-title">100 años de soledad (Gabriel García Marquez) </h5>
                                        <p class="card-text">El libro narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.</p>
                                        <a class="btn btn-outline-success btn-sm"><Link to = '/Detalles'  >Ver detalles</Link></a>
                                        <a class="btn btn-outline-danger btn-sm">Agregar al carrito <i class="far fa-heart"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src="https://images-na.ssl-images-amazon.com/images/I/51rTggB5E2L.jpg" alt="" class="card-img-top" width="100" height="500" />
                                    <div class="card-body">
                                        <h5 class="card-title">María (Jorge Isaacs)</h5>
                                            <p class="card-text">Novela que narra en primera persona el amor de Efraín por su prima María, joven de quince años, enferma de un mal incurable.</p>
                                            <br></br>
                                            <a class="btn btn-outline-success btn-sm">Ver detalles</a>
                                            <a class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src="http://www.hectorabad.com/wp-content/uploads/2012/09/el-olvido-que-seremos-ebook-.jpg" alt="" class="card-img-top" width="100" height="500" />
                                <div class="card-body">
                                    <h5 class="card-title">El olvido que seremos (Hector Abad Faciolince)</h5>
                                    <p class="card-text">Está lleno de sonrisas y canta el placer de vivir, pero muestra también la tristeza y la rabia que provoca la muerte de un ser excepcional.</p>
                                    <a class="btn btn-outline-success btn-sm">Ver detalles</a>
                                    <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/64/68/6468bf35944e8d5a2a45e7ac4ea8bd79.jpg" alt="" class="card-img-top" width="100" height="500" />
                                <div class="card-body">
                                    <h5 class="card-title">El amor en los tiempos de cólera (Gabriel García Marquez)</h5>
                                    <p class="card-text">Es una novela dedicada al verdadero amor que perdura y supera las adversidades toda una vida.</p>
                                    <a class="btn btn-outline-success btn-sm">Ver detalles</a>
                                    <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src="https://www.librosyliteratura.es/wp-content/uploads/2019/06/rayuela.jpg" alt="" class="card-img-top" width="100" height="500" />
                                <div class="card-body">
                                    <h5 class="card-title">Rayuela (Julio Cortázar)</h5>
                                    <p class="card-text">Narra la historia de Horacio Oliveira, su protagonista, y su relación con «la Maga». La historia pone en juego la subjetividad del lector y tiene múltiples finales.</p>
                                    <a class="btn btn-outline-success btn-sm">Ver detalles</a>
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
