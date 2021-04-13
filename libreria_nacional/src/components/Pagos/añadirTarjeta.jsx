import React, { Component} from 'react';
import './añadirTarjeta.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

class añadirTarjeta extends Component {
    render() {
        return(
            <>
            <div class="d-flex flex-row align-items-center back">
                <Link to='/Tarjetas'><button type="button" class="btn btn-rounded "><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>  Volver a mis tarjetas</button></Link>
            </div>
            <div class="container py-5">
    
                <div class="row mb-4">
                    <div class="col-lg-8 mx-auto text-center">
                        <h1 class="display-6">Agrega tu tarjeta</h1>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <div class="card ">
                            <div class="card-header">
                                <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                    
                                    <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                                        <li class="nav-item"> <a data-toggle="pill" class="nav-link active " > <i class="fas fa-credit-card mr-2"></i> Tarjeta de crédito </a> </li>
                                    </ul>
                                </div>
                                
                                <div class="tab-content">
                                    
                                    <div id="credit-card" class="tab-pane fade show active pt-3">
                                        <form role="form" onsubmit="event.preventDefault()">
                                            <div class="form-group"> <label for="username">
                                                    <h6>Nombre del titular</h6>
                                                </label> <input type="text" name="username" placeholder="Nombre del titular" required class="form-control "/>
                                            </div>
                                            <div class="form-group"> <label for="cardNumber">
                                                    <h6>Número de la tarjeta</h6>
                                                </label>
                                                <div class="input-group"> <input type="text" name="cardNumber" placeholder="Número de la tarjeta" class="form-control " required/>
                                                    <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <div class="form-group"> <label><span class="hidden-xs">
                                                                <h6>Expiración</h6>
                                                            </span></label>
                                                        <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required/> <input type="number" placeholder="YY" name="" class="form-control" required/> </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                            <h6>CVV </h6>
                                                        </label> <input type="text" required class="form-control"/> 
                                                    </div>
                                                </div>
                                                </div>
                                            <div class="card-footer"><Link to="/Tarjetas"> <button type="button" class="btn btn-rounded btn-blue-grey"> Agregar </button></Link></div>
                                        </form>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </>
        );
    }
}

export default añadirTarjeta;