import React from 'react';
import logo from './images/logo.jpg';
import instagram from './images/instagramLogo.svg';
import facebook from './images/facebookLogo.png';
import whatsapp from './images/whatsappLogo.png';
import email from './images/correoLogo.png';
import waButton from './images/whatsAppButton.png';

import './App.css'

function App() {
  return (
    <div>
      <header className="header">
        <a href="/" className="alogo">
          <img src={logo} alt="logo" className="logo" />
        </a>
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
          <img src={waButton} alt="Contact WhatsApp" style={{width:"80px"}} />
        </a>
      </span>
      <div>
        <p>asdasd</p>
      </div>
    </div>
  );
}

export default App;
