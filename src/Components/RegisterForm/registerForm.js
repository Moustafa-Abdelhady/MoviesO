    import React, { useState } from 'react';
    // import { Form, Button } from 'react-bootstrap';

    const RegisterForm = () => {

      const [user, setUser] = useState({
        name:"",
      email:"",  
      userName:"",
      password:"",
      confirmPassword:""
        })


    // const [confirmPassword, setConfirmPassword] = useState('');
        

        const [errors, setErrors] = useState({
            nameError:"",
              emailError:"",
                userNameError:"",
            passwordError:"",
            confirmPasswordError:""
        });



        const handlForm=(evt)=>{
            console.log(evt.target);
            console.log(evt.target.value);
    
    //             // switch(evt.target.name){
    //             //     case "name":
    //             //         setUser({...user,name:evt.target.value});
    //             //         break;
    //             //         case "email":
    //             //         setUser({...user,email:evt.target.value});
    //             //         break;
    //             //         default:
    //             //             return;}
    
    //             ///di btt3ml f 7alit el name f eltag input nfs el names f usestate
              setUser({...user,[evt.target.name]:evt.target.value})

                      if(evt.target.name==="name"){
                        setErrors({...errors,
                          nameError:(user.name.length===0)?"name is required"
                      :(user.name.length <=3)?"name is muste be at least 3 numbers":""})

                      }else if(evt.target.name==="email"){
                      setErrors({...errors,
                        emailError:(user.email.length===0)?"Email is required"
                      :(evt.target.value.includes("@"))?"" :"Email must be include (@)"})

                      }else if(evt.target.name==="userName"){
                      // const pattern1=new RegExp('\s');
                      setErrors({...errors,
                        userNameError:(evt.target.value.length===0)?"username is required"
                      :(evt.target.value.includes(" "))?"username must be without spaces":""})
                    

                        }  else if(evt.target.name==="password"){
                      
                        setErrors({...errors,
                            passwordError:(user.password.length ===0)?"password is required "
                        :(user.password.length <=10)? "password is is muste be at least 10 numbers":""})
                       
                      }else if(evt.target.name === "confirmPassword"){
                            setErrors({...errors,
                              confirmPasswordError:(user.password.length !== user.confirmPassword.length)?"confirmPassword is invalid":""
                            })
                        }
                    
            
                        }

                // const handleConfirmPasswordChange = (e) => {
                //   setConfirmPassword(e.target.value);
                // };

            const handleSumbit=(evt)=>{
              evt.preventDefault()
            }
        

        return (
        <>
        <div className='container-fluid bg-dark text-white mx-auto py-5 d-flex flex-column   justify-content-center align-items-center text-center p-5'>
    <h1>Register Page</h1>
        <form onSubmit={(e)=>handleSumbit(e)} className=' w-75 p-3'>
    <div className="mb-5 ">
    <label for="exampleInputName1" name="name"  className="form-label">Name</label>
    <input type="text" className="form-control px-5 text-center rounded-pill" name="name"  value={user.name} id="exampleInputName1" 
    aria-describedby="nameHelp" onChange={(evt)=>handlForm(evt)} required    placeholder="Enter name"/>
    <div id="nameHelp" className="form-text text-danger">{errors.nameError}.</div>

    </div>

    <div className="mb-5 ">
    <label for="exampleInputEmail1" name="email"  className="form-label">Email address</label>
    <input type="email" className="form-control px-5 text-center rounded-pill" placeholder="Enter Mail" name='email' value={user.email}
      id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(evt)=>handlForm(evt)} required />
    <div id="emailHelp" className="form-text text-danger">{errors.emailError}.</div>

    </div>

    <div className="mb-5 ">
    <label for="exampleInputuserName1" name="userName"  className="form-label">User Name</label>
    <input type="text" className="form-control px-5 text-center rounded-pill" placeholder="Enter User name" name='userName' 
    value={user.userName} id="exampleInputUserName1" aria-describedby="userNameHelp" 
    onChange={(evt)=>handlForm(evt)} required />
    <div id="userNameHelp" className="form-text text-danger ">{errors.userNameError}.</div>

    </div>

    <div className="mb-5 ">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" class='form-control text-center' placeholder='Password' className={`form-control shadow-none ${(errors.passwordError)}? border-1-red px-5 text-center border rounded-pill`} 
    name="password" value={user.password} id="exampleInputPassword1" onChange={(evt)=>handlForm(evt)}
    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$" alt='/^[0-9]{8}$/' />
            <p className='text-danger'>{errors.passwordError}</p>
    </div>

    <div className="mb-2 ">
    <label for="exampleInputconfirmPassword1" className="form-label">Confirm password</label>
    <input type="password" class='form-control  '  className={`form-control shadow-none ${(errors.confirmPasswordError)}? border border-red px-5 text-center rounded-pill`} 
    name="confirmPassword" placeholder="Confirm password" value={user.confirmPassword} id="exampleInputconfirmPassword1" onChange={(evt)=>handlForm(evt)}
      />
            <p className='text-danger'>{errors.confirmPasswordError}</p>
        
    </div>


    <button type="submit" className="btn btn-primary mt-3 px-3 fw-4" >Register</button>
    </form>
        </div>
        </>);
    };

export default RegisterForm;






