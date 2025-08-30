import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">Smart Tourism</Link>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/explore" className="nav-link">Explore</NavLink>
          <a className="nav-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  )
}
