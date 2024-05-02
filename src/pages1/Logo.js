import React from 'react'
import logo from './l1.png';
import logo1 from './l2.png';
import logo2 from './l3.png';
import logo3 from './l4.png';
import logo4 from './l5.png';
import logo5 from './l6.png';
import log1 from './r1.png';
import log2 from './r2.png';
import { Button } from 'react-bootstrap';
import Header from './Header';
const Logo = () => {
  return (
    <div>
      <Header />
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
     
        <div className='land1'>
      <div className='container'>
        
          <div className=' row'>
            <div className='col-md-6'>
              <div className='ld1'>
                <h4><b>world gaming</b></h4>
                <h1><b>Create <span>Manage</span></b>

                </h1><h1><b>Matches </b></h1>
                <p>Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                <div className='btn'><p1><b>read more</b></p1></div>
              </div> </div>
            <div className='col-md-6'>
              <img src={logo} alt="logo" width="100%" height="100%"></img>
            </div>
          </div>
        </div></div>
      <div className='land2 '>
        <div className='container'>
        <div className='row justify-content-between'>
            <div className='col-md-2'>
              <img src={logo1} alt="logo" width="60%"></img></div>
            <div className='col-md-2'>
              <img src={logo2} alt="logo" width="60%" ></img></div>
            <div className='col-md-2'>
              <img src={logo3} alt="logo" width="60%" ></img></div>
            <div className='col-md-2'>
              <img src={logo4} alt="logo" width="60%" ></img></div>
            <div className='col-md-2'>
              <img src={logo5} alt="logo" width="60%" ></img></div>
      
        </div>
        </div>
       </div>
      <div className='land3 container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={log1} alt='logo' width="100%"></img>
          </div>
          <div className='col-md-4'>
            <p2>UpcomingliveMatches</p2>
            <h2> 8:30</h2>
          </div>
          <div className='col-md-4'>
            <img src={log2} alt='logo' width="100%"></img>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Logo
