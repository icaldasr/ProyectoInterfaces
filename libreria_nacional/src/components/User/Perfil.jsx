import React, { Component} from 'react';
import userImg from '../../img/user.png'; //Import User Icon
//import styles from '../App.module.css';
//import styles from './App.module.css'
import './Perfil.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

class Perfil extends Component {
    render() {
        return(
            <div className="home">
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                    
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25"> <img src="https://static.thenounproject.com/png/1190202-200.png" width="100" class="img-radius" alt="User-Profile-Image"/> </div>
                                            <h6 class="f-w-600">Pepita Perez</h6>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Cédula ciudadana</p>
                                                    <h6 class="text-muted f-w-400">31645780</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Teléfono celular</p>
                                                    <h6 class="text-muted f-w-400">3124857624</h6>
                                                </div>
                                            </div>
                                            {/*<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Recent</p>
                                                    <h6 class="text-muted f-w-400">Sam Disuja</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Most Viewed</p>
                                                    <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                            </div>*/}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <Link to='/editPerfil'><button type="button" class="btn btn-rounded btn-blue-grey"><i class="fas fa-cogs pr-2" aria-hidden="true"></i>Editar mi cuenta</button></Link>
                            <button type="button" class="btn btn-rounded btn-blue-grey"><i class="fas fa-book-open pr-2" aria-hidden="true"></i>Mi biblioteca</button>
                            <button type="button" class="btn btn-rounded btn-blue-grey"><i class="far fa-credit-card pr-2" aria-hidden="true"></i>Ajustes de pago</button>
                            <button type="button" class="btn btn-rounded btn-blue-grey"><i class="fas fa-question pr-2" aria-hidden="true"></i>Ayuda</button>
                            <button type="button" class="btn btn-rounded btn-blue-grey"><i class="fas fa-power-off pr-2" aria-hidden="true"></i>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Perfil;