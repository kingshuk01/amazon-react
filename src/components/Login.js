import React from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import { useState } from 'react'
import {auth} from '../firebase'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }


    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
            console.log(auth)
        })
        .catch(error=>alert(error.message))
    }

   return (
        <div className='login'>
            <Link to='/'> 
            <img
                className='login_logo'
                src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/03fb2c3b-78cf-4450-9db3-0a34d0e6b43c._CR0,0,400,400_AC_SX130_SY60_QL70_.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login_sign_button'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button 
                onClick={register}
                className='login_create_button'>Create Account</button>
            </div>
        </div>
    )
}

export default Login
