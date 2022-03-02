import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Tryunfo</h1>
        <div className="logo-container">
          <img
            src="../images/trybe_logo.jpg"
            alt="Logo da Trybe"
          />
        </div>
      </header>
    );
  }
}

export default Header;
