import React, { useState } from 'react';
import logo from './images/logo.png';
import instagram from './images/instagramLogo.png';
import facebook from './images/facebookLogo.png';
import whatsapp from './images/whatsAppButton.png';
import email from './images/correoLogo.png';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import title from './images/title.png'

import './App.css'
import { useEffect } from 'react';

function App() {

  const [activeSlider, setActiveSlider] = useState(slider1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlider === slider1) {
        setActiveSlider(slider2)
      } else if (activeSlider === slider2) {
        setActiveSlider(slider1)
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlider]);
  return (
    <div className="page">
      <header className="header">
        <a href="/" className="alogo">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="title">
          <img src={title}></img>
        </div>
        <div className="contactIcons">
          <ul className="ulicons">
            <li className="liIcons">
              <a href="https://www.instagram.com/finasecol/" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Contact Instagram" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="https://www.facebook.com/Finasecol" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Contact Facebook" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="https://wa.me/573002180502" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Contact WhatsApp" className="contactUs" />
              </a>
            </li>
            <li className="liIcons">
              <a href="mailto:finasecol@gmail.com" className="alogo" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="Contact Email" className="contactUs" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <span className="waButton">
        <a href="https://wa.me/573002180502" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="Contact WhatsApp" style={{ width: "80px", position: "sticky" }} />
        </a>
      </span>
      <div className="slider">

        <img id={activeSlider} src={activeSlider} alt="Slider" className="sliderImages" />

      </div>
      <div className="content">
        <div className="column1">
          <div>
            <h1>Cr??ditos hipotecarios</h1>
          </div>
          <div>
            <p>Finasecol inmobiliaria, somos una empresa especializada en otorgamiento de cr??ditos hipotecarios de libre inversi??n, mediante la intermediaci??n de servicios financieros, brindamos acompa??amiento y efectividad en todo el proceso, poniendo a disposici??n todo nuestro equipo de asesores expertos para solventar las necesidades de nuestros clientes de la manera m??s eficiente y r??pida, desde la solicitud del cr??dito hasta el desembolso del dinero.</p>
            <h3>Libre inversi??n</h3>
            <ul>
              <li>Usted puede destinar el cr??dito para lo que quiera.</li>
              <li>Nos encargamos de todos los tr??mites de su cr??dito.</li>
              <li>Ofrecemos bajas tasas de inter??s.</li>
              <li>En nuestros cr??ditos el plazo lo escoge usted.</li>
              <li>Rapidez en la aprobaci??n y el desembolso.</li>
              <li>No pedimos consignar dineros para estudio de los cr??ditos por adelantado.</li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div><h1>Venta de inmueble</h1></div>
          <div>
            <p>
              Finasecol pone a disposici??n de nuestros clientes su grupo de trabajo para asesorarte en el proceso de venta de tu inmueble desde su aval??o seg??n estudio de mercado, los tr??mites jur??dicos de promesa de compraventa, escrituraci??n y a su vez para lograr una pronta venta de tu inmueble contamos con nuestra base de datos de posibles compradores y pautamos en los diferentes medios publicitarios, nos encargamos de toda la labor comercial para que la venta del inmueble sea segura y ??gil y de ser necesario ayudamos al comprador con la consecuci??n del cr??dito para la compra del predio. Igualmente asesoramos a nuestros clientes en la compra de inmuebles de acuerdo a sus requerimientos.
            </p>
            <h3>Vendemos su inmueble en Bogot??</h3>
            <ul>
              <li>Contamos con profesionales comerciales y jur??dicos capacitados que se encargar??n de realizar y acompa??ar todo el proceso de venta.</li>
              <li>Conseguimos clientes que cuentan con las caracter??sticas necesarias para realizar la venta de su inmueble.</li>
              <li>Asesor??a en la fijaci??n del precio de mercado del inmueble.</li>
              <li>Promocionamos en las diferentes plataformas.</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footerList">
          ??Contactenos!
          <p>+57 300 281 0502</p>
          <p>+57 305 413 1808</p>
          <p>finasecol@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
