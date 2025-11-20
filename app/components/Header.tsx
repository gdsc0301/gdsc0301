'use client'

import { useState } from 'react';
import Icon from './Icon';
import './style/Header.scss';
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen(curr => !curr);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <h1 className="name"><Link href='/portfolio'>Guilherme Carvalho</Link></h1>
      <button className="menuToggle" onClick={handleMenuToggle} data-active={mobileMenuOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav className="menu" data-open={mobileMenuOpen}>
        <a className="nav-link" onClick={closeMenu} href="#about">About</a>
        <div className="nav-link withSub">
          Projects <Icon type='solid' name='angle-left' className='ml-2 opacity-50' />
          <div className="dropLeft" onClick={closeMenu}>
            <a className="nav-link" href="#live-projects">Live</a>
            <a className="nav-link" href="#professional-projects">Professional</a>
          </div>
        </div>
        <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}