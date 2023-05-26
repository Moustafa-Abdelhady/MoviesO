import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    //useNavigate => make us transporting to other place
   const navigate=  useNavigate()

    const handleNavigation=()=>{
        navigate("/AboutUs")
    }
    return (
        <>
       
        <div className='container-fluid text-center bg-dark ' style={{height:'100%'}}>
           <button onClick={()=>handleNavigation()} className='btn btn-success m-5 fs-3 fw-4 '>Go to About Us</button> 
        </div>
        </>
    );
}

export default ContactUs;
