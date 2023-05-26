import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { languageContext } from '../context/context';
// import { Nav } from 'react-router-dom';
import './navBar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStore } from '@fortawesome/free-solid-icons'


const NavBar = () => {


  // const isfavorite=useSelector(state=>state.favorites)
  const counter=useSelector(state=>state.favoriteCounter)
  console.log(counter);

  const {language,setLanguage}=useContext(languageContext)

    return (
         <>
<div id='container'>
    
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-success fs-3 fw-4  px-2 mb-1 " href="#">Movies-O ^_^</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./LoginForm ">  Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul> */}

            <div className='navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-5'>
              {/* <Nav className='me-auto'> */}
              <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/ContactUs" className='links ' >Contact Us</NavLink>
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/AboutUs" className='links ' >About Us</NavLink>
                  
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/TodoList" className='links ' >TodoList</NavLink>
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/MoviesO" className='links ' >MoviesO-home</NavLink>
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/FavoritesMovies" className='links ' >
                    Favorites<i class="fa-solid fa-heart ms-1 text-success"></i>
                    </NavLink>
                  {/* <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/MoviesO/:id" className='links ' >MoviesO-details</NavLink> */}
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/LoginForm" className='links ' >Login</NavLink>
                  <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined} to="/RegisterForm" className='links' >Register</NavLink>
              {/* </Nav> */}
              <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined}  className='links mx-1 ' to="/FavoritesMovies" ><i  class="fa-solid fa-cart-shopping links" >
                <span  className=' border border-success rounded-pill position-absolute text-white top-25 bottom-50 p-1'>{counter}</span>
                </i>
                </NavLink>
                <NavLink style={({isActive})=>isActive?{color:'#2c9761'}:undefined}  className='links mx-1 '  >
               <span className='mx-3 fw-4 text-white' onClick={()=>setLanguage((language=='ar')?'en':'ar')} >{language}</span>
                </NavLink>
            </div>
           

          <form className="d-flex mx-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
    
</div>

   
                
                </>
        
    );
}

export default NavBar;
