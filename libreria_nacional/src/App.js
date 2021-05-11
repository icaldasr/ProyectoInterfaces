import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  libros  from "./components/Libros/libros";
import  signUp  from "./components/User/signUp";
import Ayuda from './components/Help/ayuda';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/main'
import logIn from './components/User/logIn';
import Recuperar from './components/User/Recuperar';
import User from './components/User/Perfil';
import Compras from './components/Compras/compras';
//import Sidebar from './components/Sidebar/sidebar'
import UserEdit from './components/User/editPerfil';
import Tarjeta from './components/Pagos/Tarjetas';
import newCard from './components/Pagos/añadirTarjeta';
import Message from './components/Message/message';
import Contacto from './components/Help/Contacto';
import PreguntasF from './components/Help/PreguntasF';
import Fav from './components/Libros/Favoritos';
import Detalles from './components/Libros/Detalles';

class App extends Component 
{
  render()
  {
    return(
      <>
      <div>
        <Navbar/>
        
        <Switch>
          <Route exact path='/' component = { Main } />
          <Route exact path='/signUp' component = { signUp } />
          <Route exact path='/libros' component = { libros } />
          <Route exact path='/Ayuda' component = { Ayuda } />
          <Route exact path='/logIn' component = { logIn } />
          <Route exact path='/recuperar' component = { Recuperar } />
          <Route exact path='/Perfil' component = { User } />
          <Route exact path='/Compras' component = { Compras }/>
          <Route exact path='/editPerfil' component = { UserEdit }/>
          <Route exact path='/Tarjetas' component = { Tarjeta }/>
          <Route exact path='/Message' component = { Message }/>
          <Route exact path='/newCard' component = { newCard }/>
          <Route exact path='/Contacto' component = { Contacto }/>
          <Route exact path='/preguntas' component = { PreguntasF }/>
          <Route exact path='/Favoritos' component = { Fav }/>
          <Route exact path='/Detalles' component = { Detalles }/>
        </Switch>
      </div>

      </>      
    );
    
  }
}

export default App
