import React, { Component } from 'react'; 
import { render } from 'react-dom';
import styles from './main.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Main extends Component 
{
    render(){
    return(
        <>

            <div>
                <nav className="navbar navbar-expand-md navbar-light">

                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Inicio</li>
                    </ol>
                    </nav>

                    

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav11"
                        aria-controls="basicExampleNav11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                </nav>



            </div>
        <div>
            <div class="container">
                <div class="text-center">
                    <h1>Novedades</h1>
                </div>
                <div class="container">
                    <div class="card-columns">
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://cultura.cervantes.es/SSAA/ImgSharepoint.ashx?UniqueId=09acd1a7-915e-4bce-b5bb-eabb0f345db3"/>
                                <div class="card-body">
                                    <h5 class="card-title">¡Bienvenidos al club de lectura!</h5>
                                    <p class="card-text">
                                        La libreria nacional abre un espacio para que lectores de todas las edades compartan y discutan sobre diferentes categorias de libros cada semana. Inscribase para hacer parte de nuestra comunidad.
                                    </p>
                                    <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i> Abril 09, 2021</small></p>
                                </div>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://tornightfire.com/wp-content/uploads/2019/12/2020-3.png" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">¡Top 10 libros de horror que no te puedes perder!</h5>
                                <p class="card-text">Te presentamos 10 libros clásicos y modernos que haran que te cueste dormir esta noche. Entra para conocer nuestras recomendaciones.</p>
                                <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i> Abril 08, 2021</small></p>
                            </div>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://www.cup.edu.ar/wp-content/uploads/2015/05/biblio-01.jpg"/>
                            <div class="card-body">
                                <h5 class="card-title">Nuevos libros: Abril</h5>
                                <p class="card-text">Estos son los últimos libros que agregamos a nuestro catálogo. No te lo pierdas.</p>
                                <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i> Abril 09, 2021</small></p>
                            </div>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://www.imosver.com/blog/wp-content/uploads/2013/07/23-07-13-DESCUENTOS-Y-PROMOCIONES.jpg"/>
                                <div class="card-body">
                                    <h5 class="card-title">Descuentos día de los inocentes</h5>
                                    <p class="card-text">Disfruta un 40% de descuento en libros para niños y en libros de poesía y comedia.</p>
                                    <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i>Abril 07, 2021</small></p>
                                </div>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/81-ku-oS9+L.jpg"/>
                            <div class="card-body">
                            <h5 class="card-title">Ready player two: ahora lo puedes conseguir en la librería nacional.</h5>
                            <p class="card-text">LLego la última obra de Ernest Cline, la segunda parte de la aclamada historia de ready player one. Haz click para ver más detalles.</p>
                            <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i>Abril 07, 2021</small></p>
                            </div>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                            <img class="card-img-top" src="https://www.escribir.me/wp-content/uploads/2015/08/libros-book-depository-3.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">LLuvia de libros con envios gratis. Solo valido para el mes de abril.</h5>
                                <p class="card-text">No dejes que la pandemia te quite las ganas de leer. Solo por este mes has todos los pedidos que quieras sin cobro adiconal.</p>
                                <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i>Abril 06, 2021</small></p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }
}

export default Main;
