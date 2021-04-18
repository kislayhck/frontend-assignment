import React from 'react'
import switchon from '../../images/switchon.png'
import LoginForm from './loginForm'
import './style.css';

function LoginPage() {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-6 image__left">
            <img src={switchon} alt="test" class="left__icon" width="600px"/>
            </div>
            <div className="col-md-6">
            <LoginForm />
            </div>
            </div>
        </div>
    )
}

export default LoginPage
