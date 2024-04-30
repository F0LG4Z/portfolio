import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    const handleLinkNav = () => {
      if(isMobile){setIsOpen(false)}
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <nav>
        {isMobile ? (
          <button className={`nav-btn ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <ul className="nav-big">
                <NavLink to='/inicio' 
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Início</NavLink>
                <NavLink to='/sobre'
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Sobre</NavLink>
                <NavLink to='/projetos'
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Projetos</NavLink>
                <NavLink to='/contacto'
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Contacto</NavLink>
          </ul>
        )}
        {isOpen && isMobile && (
          <ul className="nav-small">
                <NavLink to='/inicio'
                      onClick={handleLinkNav} 
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Início</NavLink>
                <NavLink to='/sobre'
                      onClick={handleLinkNav}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Sobre</NavLink>
                <NavLink to='/projetos'
                      onClick={handleLinkNav}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Projetos</NavLink>
                <NavLink to='/contacto'
                      onClick={handleLinkNav}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      >Contacto</NavLink>
          </ul>
        )}
      </nav>
    )
  }