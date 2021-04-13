import React, { Component} from 'react';
import userImg from '../img/user.png'; //Import User Icon
//import styles from '../App.module.css';
//import styles from './App.module.css'
import '../components/Perfil.css';
import { Glyphicon } from 'react-bootstrap';

class Perfil extends Component {
    render() {
        return(
            <div className="center">
                <div class="cardP">
                    <div class="additional">
                        <div class="user-card">
                            
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid d-block mx-auto rounded-circle img-thumbnail mb-4"/>
                        </div>
                        <div>

                        </div>
                    <div class="more-info">
                        <h1>Pepita Perez</h1>
                        <div class="coords">
                            <span>Número celular</span>
                            <span>3158452175</span>
                        </div>
                        <div class="coords">
                            <span>Cédula ciudadana</span>
                            <span>31546824</span>
                        </div>
                    </div>
                    </div>
                    <div class="general">
                        <h1>Pepita Perez</h1>
                        <p></p>
                        <span class="more">Pon el ratón sobre la tarjeta para ver tu información</span>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Perfil;