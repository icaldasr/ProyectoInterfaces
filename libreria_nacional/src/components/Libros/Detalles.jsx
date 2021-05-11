import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './Detalles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Detalles extends Component {
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

        <div>
        <br></br>
        <br></br>
            <section id="gallery">
                <div class="container">
                    <div class="row hola">
                        <div class="col-lg-5 mb-4" >
                            <div class="card" >
                                <img src="https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg" alt="" class="card-img-top" width="300" height="600" />
                            </div>
                        </div>
                        <div class="col 4-lg-4 mb-10" >
                                <div class="card-body">
                                    <h1 class="card-title">100 años de soledad </h1>
                                    <h4>Gabriel García Marquez</h4>
                                    <h4>$35.000</h4> 
                                    <a class="btn btn-info btn-sm">Agregar al carrito </a> <a class="btn btn-warning btn-sm">Añadir a favoritos <i class="far fa-heart"></i></a>
                                    <br></br><br></br>
                                    <h3>Descripción del libro</h3>
                                    <p class="card-text">Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. 
                                                Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo. En medio, 
                                                una larga docena de personajes dejarán su impronta a las generaciones venideras, que tendrán que lidiar con un mundo tan complejo como sencillo.</p>  
                                    <h3>Especificaciones</h3>
                                    <li>Producto: Físico </li>
                                    <li>Idioma: Español</li>
                                    <li>Número de paginas: 493 </li>
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
export default Detalles;