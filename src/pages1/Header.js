import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from './logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm  navbar-dark pl-0">
  <div className='nav1'>
  <a class="navbar-brand" href="#">
 <Link className='my-auto text-decoration-none' to="/logo"><img src={logo} alt="logo"></img></Link></a></div>
  <div class="ml-auto mx-5 padingrespos ">
            <div class="d-flex res991">
  <div className='nav2'>
  <ul class="navbar-nav">
   
    
  
    <li class="nav-item">
      <a class="nav-link" href="#">HOME</a>
    </li>

    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
    
      </a>
      <div class="dropdown-menu">
      <Link className='my-auto text-decoration-none' to="/mol"> <a class="dropdown-item" href="#">Home one</a></Link>
        <a class="dropdown-item" href="#">Home two</a>
        <a class="dropdown-item" href="#">Home three</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">PAGES</a>
    </li>

    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
    
      </a>
      <div class="dropdown-menu">
      <Link className='my-auto text-decoration-none' to="/mol"><a class="dropdown-item" href="#">Store</a></Link>
        <a class="dropdown-item" href="#">Gaming</a>
        <a class="dropdown-item" href="#">working</a>
      </div>
    </li>
    
    <li class="nav-item">
    <Link className='my-auto text-decoration-none' to="/mol"> <a class="nav-link" href="#">OVERVIEW</a></Link>
    </li>
    <li class="nav-item">
    <Link className='my-auto text-decoration-none' to="/mol"><a class="nav-link" href="#">STORE</a></Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">BLOGS</a>
    </li>

    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
    
      </a>
      <div class="dropdown-menu">
      <Link className='my-auto text-decoration-none' to="/mol"><a class="dropdown-item" href="#">About</a></Link>
        <a class="dropdown-item" href="#">Address</a>
        </div>
    </li>
    <li class="nav-item">
    <Link className='my-auto text-decoration-none' to="/mol"> <a class="nav-link" href="#">CONTACT</a></Link>
    </li>
    <li class="nav-item">
    <Link className='my-auto text-decoration-none' to="/mol"><a class="nav-link" href="#"><i class="fas fa-shopping-basket"></i></a></Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
    </li>
  </ul>
  </div></div></div>
</nav>
</div>

    )
}

export default Header
