import React, { Component } from 'react'; 
import { render } from 'react-dom';
import styles from './compras.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Compras extends Component
{
    render(){
        return(
            <>
        <div>
            <div class="container px-4 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-5">
                        <h4 class="heading">Carrito de compras</h4>
                    </div>
                    <div class="col-7">
                        <div class="row text-right">
                            <div class="col-4">
                                <h6 class="mt-2">Producto</h6>
                            </div>
                            <div class="col-4">
                                <h6 class="mt-2">Cantidad</h6>
                            </div>
                            <div class="col-4">
                                <h6 class="mt-2">Precio</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center border-top">
                    <div class="col-5">
                        <div class="row d-flex">
                            <div class="book"> <img src="https://i.imgur.com/2DsA49b.jpg" class="book-img"/> </div>
                                <div class="my-auto flex-column d-flex pad-left">
                                    <h6 class="mob-text">Pensar rápido, pensar despacio</h6>
                                    <p class="mob-text">Daniel Kahneman</p>
                                </div>
                        </div>
                    </div>
                    <div class="my-auto col-7">
                        <div class="row text-right">
                            <div class="col-4">
                                <p class="mob-text">Digital</p>
                            </div>
                            <div class="col-4">
                                <div class="row d-flex justify-content-end px-3">
                                    <p class="mb-0" id="cnt1">1</p>
                                    <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                                </div>
                            </div>
                                <div class="col-4">
                                    <h6 class="mob-text">$40.000</h6>
                                </div>
                        </div>
                    </div>
                </div>
                    <div class="row d-flex justify-content-center border-top">
                        <div class="col-5">
                            <div class="row d-flex">
                                <div class="book"> <img src="https://i.imgur.com/Oj1iQUX.jpg" class="book-img"/> </div>
                                    <div class="my-auto flex-column d-flex pad-left">
                                        <h6 class="mob-text">Libro Homo Deus: Una breve historia del mañana</h6>
                                        <p class="mob-text">Yuval Noah Harari</p>
                                    </div>
                            </div>
                        </div>
                            <div class="my-auto col-7">
                                <div class="row text-right">
                                    <div class="col-4">
                                        <p class="mob-text">Papel</p>
                                    </div>
                                    <div class="col-4">
                                        <div class="row d-flex justify-content-end px-3">
                                            <p class="mb-0" id="cnt2">1</p>
                                            <div class="d-flex flex-column plus-minus"> <span class="vsm-text plus">+</span> <span class="vsm-text minus">-</span> </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <h6 class="mob-text">$60.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="row">
                                            <div class="col-lg-3 radio-group">
                                                <div class="row d-flex px-3 radio"> <img class="pay" src="https://i.imgur.com/WIAP9Ku.jpg"/>
                                                    <p class="my-auto">Tarjeta credito</p>
                                                </div>
                                                <div class="row d-flex px-3 radio gray"> <img class="pay" src="https://i.imgur.com/OdxcctP.jpg"/>
                                                    <p class="my-auto">Tarjeta debito</p>
                                                </div>
                                                <div class="row d-flex px-3 radio gray mb-3"> <img class="pay" src="https://i.imgur.com/cMk1MtK.jpg"/>
                                                    <p class="my-auto">PayPal</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <div class="row px-2">
                                                    <div class="form-group col-md-6"> <label class="form-control-label">Nombre</label> <input type="text" id="cname" name="cname" placeholder="Johnny Doe"/> </div>
                                                    <div class="form-group col-md-6"> <label class="form-control-label">Numero tarjeta</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/> </div>
                                                </div>
                                                <div class="row px-2">
                                                    <div class="form-group col-md-6"> <label class="form-control-label">Fecha de expiración</label> <input type="text" id="exp" name="exp" placeholder="MM/YYYY"/> </div>
                                                        <div class="form-group col-md-6"> <label class="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***"/> </div>
                                                </div>
                                            </div>
                                                <div class="col-lg-4 mt-2">
                                                    <div class="row d-flex justify-content-between px-4">
                                                        <p class="mb-1 text-left">Subtotal</p>
                                                        <h6 class="mb-1 text-right">$100.000</h6>
                                                    </div>
                                                    <div class="row d-flex justify-content-between px-4">
                                                        <p class="mb-1 text-left">Envio</p>
                                                        <h6 class="mb-1 text-right">$5.500</h6>
                                                    </div>
                                                    <div class="row d-flex justify-content-between px-4" id="tax">
                                                        <p class="mb-1 text-left">Total (IVA incluido)</p>
                                                        <h6 class="mb-1 text-right">$107.000</h6>
                                                    </div> <button class="btn-block btn-blue"> <span> <span id="checkout">Comprar</span> <span id="check-amt"></span> </span> </button>
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

export default Compras;
