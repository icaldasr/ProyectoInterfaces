import React, { Component} from 'react';
import userImg from '../../img/user.png'; //Import User Icon
//import styles from '../App.module.css';
//import styles from './App.module.css'
import './editPerfil.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

class editPerfil extends Component {
    render() {
        return(
            <div class="container rounded bg-white mt-5">
                <div class="row">
                    <div class="col-md-4 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://static.thenounproject.com/png/1190202-200.png" width="120"/><span class="font-weight-bold">Pepita Perez</span><span>Cali</span></div>
                    </div>
                    <div class="col-md-8">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                                    <Link to='/Perfil'><h6>Volver a mi Perfil</h6></Link>
                                </div>
                                <h6 class="text-right">Editar Perfil</h6>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" value="Pepita"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="Perez" placeholder="Apellido"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" value="rntng@gmail.com"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="3124857624" placeholder="Número celular"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="password" class="form-control" placeholder="contraseñaActual" value="123456789"/></div>
                                <div class="col-md-6"><input type="password" class="form-control"  placeholder="Contraseña nueva"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="Cra 110 #5-6"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="Cali" placeholder="Ciudad"/></div>
                            </div>
                            <div class="mt-5 text-right"><Link to='/Perfil'><button class="btn btn-rounded btn-blue-grey" type="button">Guardar perfil</button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default editPerfil;