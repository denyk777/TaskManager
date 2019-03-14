import React from 'react';

import './style.css';
import logoImage from "./images/logo.png"

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <img src={logoImage} alt={"Else Tasks"} className='header__logo' />
        </div>
      </header>
    );
  };
};
