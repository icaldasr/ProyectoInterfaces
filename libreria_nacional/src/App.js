import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  libros  from "./components/Libros/libros";
import  signUp  from "./pages/signUp";
import Ayuda from './pages/ayuda';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/main'
import logIn from './pages/logIn';
import Recuperar from './pages/Recuperar';
import User from './pages/Perfil';
//import Sidebar from './components/Sidebar/sidebar'

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
        </Switch>
      </div>

      </>      
    );
  }
}

export default App
