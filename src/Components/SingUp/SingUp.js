import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SingUp.css';
import { useLocation,useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import useAuthContext from '../AuthContext/UseAuthContext';


const SingUp = () => {
    const location = useLocation();
    const history = useHistory();
    const [passwordCheck, setPassWordCheck] = useState();
    const [confirmPasswordCheck, setConfirmPassWordCheck] = useState();
    const [getEmail, setEmail] = useState('')

    const {emailPasswordLogIn, user, authStateChange} = useAuthContext();
       
    const password = (e)=>{
        const passwordValue = e.target.value;
        
        setPassWordCheck(e.target.value)

    }
    const email =(e)=>{
        const emailValue = e.target.value;
        console.log(emailValue);
        setEmail(emailValue);
    }



    const confirmPassword = (e)=>{
        setConfirmPassWordCheck(e.target.value)
    }



    const onSubmitEvent = (e)=>{
        e.preventDefault();
        emailPasswordLogIn(getEmail,passwordCheck);
        setEmail('');
        setPassWordCheck('');
        setConfirmPassWordCheck('')
        
    }

    
    useEffect(()=>{
        authStateChange();
       
            if (user?.email) {
                history.push(location.state?.from.pathname || '/home')
            }
        

    },[user])


   

   






 
    return (
        <div>
            <div className="login-container">
                <div className="logo-container">
                    <div className="login-logo">
                    <img src="https://i.ibb.co/0QZBjzP/dailycourier-logo.png" alt="" />
                    </div>
                    <p>Sing Up to DailyCourier</p>
                </div>




               <div className="log-in-box">

               <div className="login-form-container">
                <Form onSubmit={onSubmitEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={email} value={getEmail} style={{
                      
                    }} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={password} value={passwordCheck} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control onChange={confirmPassword} value={confirmPasswordCheck}  type="password" placeholder="Confirm password" />
                </Form.Group>
               <div className="login-submit-btn">

                    {passwordCheck === confirmPasswordCheck? <Button  style={{
                      
                        backgroundColor:'#2da44e'
                    }} type="submit">
                    Submit
                </Button>: <Button  style={{
                      
                        backgroundColor:'#2da44e'
                    }} type="submit" disabled>
                    Submit
                </Button>}


              
               </div>
                </Form>

                </div>



               </div>



               



               <div className="singUp-direction">

                   <div className="singUp-link">

                       You have an account?     <NavLink to='/login'> Sing In</NavLink>






                   </div>







               </div>








            </div>
            
        </div>
    );
};

export default SingUp;