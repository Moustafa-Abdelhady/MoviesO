import React, { useState } from 'react';

function LoginForm() {


    const [user, setUser] = useState({
       
      email:"",
      password:""
        })

        
        const [errors, setErrors] = useState({
            emailError:"",
            passwordError:"",
        });


        const handlForm=(evt)=>{
            console.log(evt.target);
            console.log(evt.target.value);
    
            // switch(evt.target.name){
            //     case "name":
            //         setUser({...user,name:evt.target.value});
            //         break;
            //         case "email":
            //         setUser({...user,email:evt.target.value});
            //         break;
            //         default:
            //             return;}
    
            ///di btt3ml f 7alit el name f eltag input nfs el names f usestate
              setUser({...user,[evt.target.name]:evt.target.value})
    
              if(evt.target.name==="password"){
                setErrors({...errors,
                    passwordError:(user.password.length===0)?"password is required"
                :(user.password.length <=8)?"password is muste be at least 8 numbers":""})
              }else if(evt.target.name==="email"){
                setErrors({...errors,
                  emailError:(user.email.length===0)?"Email is required"
                :(evt.target.value.includes("@"))?"" :"Email must be include (@)"})
              }
            
           
            }

            const handleSumbit=(evt)=>{
              evt.preventDefault()
            }
        

        return (
        <>
        <div className='container-fluid bg-dark text-white d-flex w-100  justify-content-center align-items-center text-center p-5'>
        <form onSubmit={(e)=>handleSumbit(e)} className='w-75 p-3'>
  <div className="mb-5 ">
    <label for="exampleInputEmail1" name="email"  className="form-label">Email </label>
    <input type="email" className="form-control  text-center px-5 rounded-pill" name='email' value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(evt)=>handlForm(evt)} />
    <div id="emailHelp" className="form-text text-danger">{errors.emailError}.</div>
    {/* <p className='text-danger'></p> */}
  </div>
  <div className="mb-5 ">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" class='form-control' className={`form-control shadow-none ${(errors.passwordError)}? border-1-red px-5 rounded-pill`} name="password" value={user.password} id="exampleInputPassword1" onChange={(evt)=>handlForm(evt)} />
            <p className='text-danger'>{errors.passwordError}</p>
  </div>

  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
        </div>
        </>);




  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [showPassword, setShowPassword] = useState(false);


  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (password.length < 8) {
  //     setPasswordError('Password must be at least 8 characters long.');
  //   } else {
  //     console.log('Username:', username);
  //     console.log('Password:', password);
  //     // Add logic for submitting form data to server
  //   }
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  //   if (event.target.value.length >= 8) {
  //     setPasswordError('');
  //   } else {
  //     setPasswordError('Password must be at least 8 characters long.');
  //   }
  // };

  // const handleShowPasswordChange = () => {
  //   setShowPassword(!showPassword);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Username:
  //       <input
  //         type="text"
  //         value={username}
  //         onChange={(event) => setUsername(event.target.value)}
  //       />
  //     </label>
  //     <label>
  //       Password:
  //       <input
  //         type={showPassword ? 'text' : 'password'}
  //         value={password}
  //         onChange={handlePasswordChange}
  //       />
  //       <input
  //         type="checkbox"
  //         checked={showPassword}
  //         onChange={handleShowPasswordChange}
  //       />{' '}
  //       Show password
  //       {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
  //     </label>
  //     <button type="submit">Log In</button>
  //   </form>
  // );

  
            
}

export default LoginForm;

