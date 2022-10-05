import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
      <div className='header'>
          <img src={Logo} alt='Logo' className='logo'></img>

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