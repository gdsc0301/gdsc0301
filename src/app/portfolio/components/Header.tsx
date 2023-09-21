import Icon from './Icon';
import './style/Header.scss';
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="name"><Link href='/portfolio'>Guilherme Carvalho</Link></h1>
      <nav className="menu">
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link">
          Projects <Icon type='solid' name='angle-left' className='ml-2 opacity-50' />
          <div className="dropLeft">
            <a className="nav-link" href="#live-projects">Live</a>
            <a className="nav-link" href="#professional-projects">Professional</a>
          </div>
        </a>
        <a className="nav-link" href="#professinal-projects">Contact</a>
      </nav>
    </header>
  )
}