import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
      <div className='header'>
          <a href="https://felipersteles.herokuapp.com/" target="_blank">
          <img src={Logo} alt='Logo' className='logo'></img>
          </a>
          <ul className='header-menu'>
              <li>Pagina principal</li>
              <li>Programas</li>
              <li>Por que nós?</li>
              <li>Nossos planos</li>
              <li>Nossos clientes</li>
          </ul>
    </div>
  )
}

export default Header
