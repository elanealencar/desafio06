import React from 'react';
import './Header.css';

const Header = () => {

  const handleNavigation = (e, sectionSelector) => {
    e.preventDefault();

  const section = document.querySelector(sectionSelector);
  if (section){
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  };

  return (
    <header>
      <div className="headerName">/Elane Alencar/</div>
      <nav className="navMenu">
        <ul>
          <li><a href="#inicio" onClick={(e) => handleNavigation(e, '#inicio')}>Início</a></li>
          <li><a href="#sobreMim" onClick={(e) => handleNavigation(e, '#sobreMim')}>Sobre mim</a></li>
          <li><a href="#projetos" onClick={(e) => handleNavigation(e, '#projetos')}>Projetos</a></li>
          <li><a href="#servicos" onClick={(e) => handleNavigation(e, '#servicos')}>Serviços</a></li>
          <li><a href="#habilidades" onClick={(e) => handleNavigation(e, '#habilidades')}>Habilidades</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;