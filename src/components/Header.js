import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Tryunfo</h1>
        <img
          alt="Logo da Trybe"
          src="./trybe_logo.png"
        />
      </header>
    );
  }
}

export default Header;
