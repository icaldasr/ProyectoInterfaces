import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './Contacto.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Contacto extends Component
{
    render(){
        return(
        <>
        <div class="d-flex flex-row align-items-center back">
                <Link to='/Ayuda'><button type="button" class="btn btn-rounded "><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>  Volver a ayuda</button></Link>
            </div>
        <div class="container z-depth-1 my-3 px-0">

        <section class="my-md-4">
                <div class="rgba-black-strong rounded p-5">
                    <h3 class="text-center font-weight-bold text-white mt-3 mb-5">Contáctanos</h3>

                    <form class="mx-md-5" action="">

                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <div class="card">
                                    <div class="card-body px-4">
                                        <div class="md-form md-outline mt-0">
                                        <input type="text" id="name" class="form-control"/>
                                        <label for="name">Nombre completo</label>
                                        </div>
                            
                                        <div class="md-form md-outline">
                                        <input type="text" id="email" class="form-control"/>
                                        <label for="email">Correo electrónico</label>
                                        </div>
                                
                                        <div class="md-form md-outline">
                                        <textarea id="message" class="md-textarea form-control" rows="3"></textarea>
                                        <label for="message">Escribenos tu mensaje</label>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-md btn-block ml-0 mb-0">Enviar</button>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

                                <h5 class="font-weight-bold">Dirección</h5>
                                <p class="mb-0">Cra 50 #24A-62</p>
                                <p class="mb-0">Cali</p>
                                <p class="mb-4 pb-2">Colombia</p>

                                <h5 class="font-weight-bold">Teléfono</h5>
                                <p class="mb-4 pb-2">1-800-LIB-NACL.</p>

                                <h5 class="font-weight-bold">Email</h5>
                                <p>libreriaN@nacional.com</p>

                            </div>
                        </div>

                    </form>

                </div>
            </section>
        </div>
        </>
    );
    }
}

export default Contacto;