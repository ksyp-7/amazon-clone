import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './login.css'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login 
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/');
        })
        .catch(error => alert(error.message));
    }

    const signUp = e => {
        e.preventDefault();
        //firebase new user
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //user created.
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">

            <Link to="/">
                <img
                    className="logo"
                    src="https://www.shopnloot.com/wp-content/uploads/2020/09/Amazon-Logo.png"
                    alt=" " />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
               
                <h5>E-mail</h5>
                <input 
                    type="text" 
                    value={email} 
                     onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>

                <button className="signin_b" onClick={signIn} type="submit">Sign In</button>

                </form>
                <p>
                    By Signing-in you agree to Amazon Amazon's Conditions of Use & Sale.
                    Plese see our Privacy Notice, our cookie Notice and our Interest-Based Ads Notice.
                </p>
                <button className="signup_b" onClick={signUp} type='submit'>Create Amazon Account Hear</button>
            </div>
        </div>
    )
}

export default Login
