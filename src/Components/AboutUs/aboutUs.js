import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
 
    const navigate=useNavigate()
    const goToMovies=() => {
            navigate('/MoviesO')
    }

    return (
<>      
        
            <div id="image" className='p-3 bg-dark'>
                <img className='imagg' src="images/maxresdefault.jpg" alt="" width='100%' height='300px' />
                </div>

        <div className="main d-flex col-12  p-3 bg-dark" >

                <div className="about-box col-3 text-white   mt-5 ">
                <h2 className="about fs-2 fw-bolder">About Us</h2>
                </div>
                <div className="col-9  mt-2 fs-5 text-white ">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum incidunt eos dicta
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum incidunt eos dicta aut
                 omnis quis distinctio cumque veniam! Possimus nostrum, fugit minus velit tempore quisquam
                 iusto esse dolorum amet natus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum incidunt eos dicta
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum incidunt eos dicta aut
                 omnis quis distinctio cumque veniam! Possimus nostrum, fugit minus velit tempore quisquam
                 iusto esse dolorum amet natus?</p>
                  
                <button type='submit' className="btn btn-success px-5 py-2 mt-4 fs-3 fw-4" onClick={()=>{goToMovies()}}>Watch Movies For Free</button>
                        
                </div>
             
                </div>
                </> );
}

export default AboutUs;
