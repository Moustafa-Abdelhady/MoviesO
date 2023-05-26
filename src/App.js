// import logo from './logo.svg';
import './App.css';
// import LoginForm from './Component/LoginForm/loginForm';
import LoginForm from '../src/Components/LoginForm/loginForm'
import RegisterForm from './Components/RegisterForm/registerForm';
import NavBar from './Components/navBar/navBar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/aboutUs';
import NotFound from './Components/NotFound/notFound';
import ContactUs from './Components/ContactUs/contactUs';
import MoviesO from './Components/Movies-O/MoviesO';
import MoviesODetails from './Components/Movies-O-Details/MoviesODetails';
import SaveProduct from './Components/SaveProducts/saveProduct';

import EditProduct from './Components/editProduct/editProduct';
import TodoList from './Components/TodoList/todoList';
import FavoritesMovies from './Components/FavoritesMovies/favoritesMovies';
import { LanguageProvidor } from './Components/context/context';
import { useState } from 'react';

function App() {
  const [language,setLanguage]=useState('ar')
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/* <LoginForm/>
          <hr/>
            <RegisterForm/> */}
<LanguageProvidor value={{language,setLanguage}}>
  
          <NavBar/>
  
          <Routes>
              <Route path="/" element={<AboutUs/>} />
              <Route path="/AboutUs" element={<AboutUs/>} />
              <Route path="/ContactUs" element={<ContactUs/>} />
              <Route path="/TodoList" element={<TodoList/>} />
              <Route path="/MoviesO" element={<MoviesO/>} >
                  <Route path='save' elementment={<SaveProduct/>}/>
                  <Route path='edit' elementment={<EditProduct/>}/>
              </Route>
              <Route path="/FavoritesMovies" element={<FavoritesMovies/>} />
              <Route path="/MoviesO/:id" element={<MoviesODetails/>} />
              <Route path="/RegisterForm" element={<RegisterForm/> } />
              <Route path="/LoginForm" element={<LoginForm/>} />
  
             <Route path="*" element={<NotFound/>} />
          </Routes>
</LanguageProvidor>
      

      {/* /////////////////// */}
      {/* day3 */}
      {/* <Routes>
        <Route path="/" element={<UserListFunctional/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes> */}
    </div>
  );
}

export default App;
