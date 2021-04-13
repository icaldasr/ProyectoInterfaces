import React, { Component } from 'react'; 
import { render } from 'react-dom';
import './PreguntasF.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PreguntasF extends Component{
    render(){
        return(
            <>
			<div class="row bg-info card my-4 mb-3 pd-l-2 mg-1">
				<h3>
					<i class="fa fa-question-circle text-white"></i>
					 Preguntas Frecuentes
				</h3>
			</div>
	
			<div>
				<section id="gallery">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 mb-4">
							<div class="card">
									<div class="card-body">
										<h5 class="card-title">¿Por qué debo registrarme en el sitio antes de poder realizar un pedido? </h5>
										<p class="card-text">Establecer una cuenta en línea con la Librería Nacional le asegura que su información de compra es segura, 
										confidencial y accesible para usted. Una vez que establezca una cuenta, 
										solo tendrá que iniciar sesión para realizar un pedido en el futuro, verificar el estado de su pedido actual, 
										ver compras pasadas o actualizar la información de su perfil.</p>
									</div>
							</div>
						</div>
						<div class="col-lg-4 mb-4">
							<div class="card">
									<div class="card-body">
										<h5 class="card-title">Recibí una oferta promocional y quiero realizar mi pedido en línea, ¿es posible?</h5>
											<p class="card-text">Sí, sí es posible. Durante el proceso de pago, verá un botón Ingresar código de promoción. Simplemente ingrese 
											su código promocional en los campos provistos y se aplicarán las ofertas adecuadas.</p>
									</div>
							</div>
						</div>
						<div class="col-lg-4 mb-4">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">¿Qué pasa si no encuentro lo que estoy buscando?</h5>
									<p class="card-text">La mejor manera de ubicar un producto en la librería en línea es utilizar las funciones de búsqueda de productos ubicadas en el área de navegación superior de la librería. Si necesita más ayuda, llámenos al 1-800-LIB-NACL.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-4">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">¿Cuánto tiempo demora la entrega a destinos en Colombia?</h5>
									<p class="card-text">Para envíos nacionales, espere de 5 a 15 días para la entrega.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-4">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">¿Cuánto tiempo tarda la entrega a destinos internacionales?</h5>
									<p class="card-text">Cuando enviamos pedidos a destinos internacionales, el envío por correo postal de superficie puede demorar de 8 a 12 semanas, según el destino final. El correo aéreo puede tardar entre 2 y 3 semanas. Los cargos por el servicio de correo aéreo o terrestre se basan en el peso del paquete.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 mb-4">
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">¿Son seguras las transacciones?</h5>
									<p class="card-text">Sí. La Librería Nacional proporciona seguridad en Internet mediante:</p>
									<ol>
										<li class="card-text">Alojar nuestro sitio en un servidor seguro. Ninguna otra empresa u organización comparte el servidor que usamos para almacenar información.</li>
										<li class="card-text">Creación de áreas seguras del sitio web para la transferencia de información confidencial como su número de tarjeta de crédito en nuestra librería en línea. Al usar Chrome, por ejemplo, sabrá que un área del sitio es segura cuando vea un candado en el orden inferior izquierdo de su pantalla.</li>
									</ol>
								</div>
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
export default PreguntasF;