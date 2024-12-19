
import React from 'react'
import { Link } from 'react-router-dom';
import im1 from '../images/Screenshot 2024-12-02 172652.png'

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          <a class="navbar-brand ps-4" href="#">
            <img src={im1} className='rounded-circle' alt="" width="60" height="60"/>
          </a>
        <Link className="navbar-brand fw-bold fs-4 ps-1" to={'/home'} href="#">KAYA Candle</Link>
        <button className="navbar-toggler navbar-toggler-right " type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={'/home'} href="#">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <ul className="nav navbar-nav pe-5">
            <li className="nav-item btn btn-sm  px-3">
              <Link className="nav-link border rounded-4" to={'/sign-up'} href="#"><span className="fas fa-user"></span> Sign Up</Link>
            </li>
            <li className="nav-item btn btn-sm  px-3">
              <Link className="nav-link border rounded-4" to={'/sign-in'} href="#"><span className="fas fa-sign-in-alt"></span> Login</Link>
            </li>
            <li className="nav-item  btn btn-sm px-3">
              <a className="nav-link border rounded-4" href="#"><span className="fas fa-cart"></span><i className="fa-solid fa-cart-shopping"></i> Cart</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
        </div>
      </div>
    </div>
  );
}

export default Navbar