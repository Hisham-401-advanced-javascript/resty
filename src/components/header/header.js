import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss';
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home" > Home </Link>
        <Link to="history" > History </Link>
      </nav>
      <h1>RESTy</h1>
    </header>
  );
};

export default Header;