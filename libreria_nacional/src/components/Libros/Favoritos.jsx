import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './Favoritos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Favoritos extends Component {
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

                    <nav aria-label="">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Perfil</li>
                        <li class="breadcrumb-item active" aria-current="page">Mis favoritos</li>
                    </ol>
                    </nav>

                <div className="collapse navbar-collapse" id="basicExampleNav11">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <Link to ="/Compras">
                                <button type="submit" className="botonn" > 
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" alt="Carrito" width="25" height="25"/> 
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="d-flex flex-row align-items-center back">
                <Link to='/Perfil'><button type="button" class="btn btn-rounded "><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>  Volver a mi Perfil</button></Link>
            </div>

        <div>
        <section id="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="https://static.megustaleer.com/images/libros_650_x/EL389443.jpg" alt="" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Mr. Mercedes (Stephen King)</h5>
                                <p class="card-text">Mr Mercedes es la historia de una guerra entre el Bien y el Mal. Un retrato inolvidable de la mente de un asesino obsesionado y demente.</p>
                                <a href="" class="btn btn-outline-success btn-sm">Ver detalles</a>
                                <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="https://lh3.googleusercontent.com/proxy/U7m5-GXsYcWU3fhwvAVUyVSk5PRnLGBGOI07MaA5uXZWPh90mYzTXqaRBO_CBuwt5xhw7efSmvtoY0msurFybEGNLjb99l_aqLf533GiyseFBJpvibT7W6TLD_IHMlZ3b-xpFGNBQMrkdItGaeqNX9UQnXnMqw" alt="" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Memorias de un amigo imaginario (Matthew Dicks)</h5>
                                    <p class="card-text">La novela que tienes en tus manos es especial, como Max.
                                        La novela que tienes en tus manos es única, como Max.
                                        La novela que tienes en tus manos es valiente, como Max.</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Ver detalles</a>
                                        <a href="" class="btn btn-outline-danger btn-sm">Agregar al carrito<i class="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/91pq7L8W0GL.jpg" alt="" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Escrito en el agua (Paula Hawkins)</h5>
                            <p class="card-text">No te fíes nunca de una superficie en calma, no sabes lo que puede haber debajo.</p>
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
export default Favoritos;
