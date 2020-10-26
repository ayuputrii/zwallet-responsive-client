import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import { useForm } from 'react-hook-form'
import { login } from '../../redux/action/login'
import { useDispatch, useSelector } from 'react-redux'
import Mail from '../../icons/mail.svg'
import MailActive from '../../icons/mail-active.svg'
import Lock from '../../icons/lock.svg'
import LockActive from '../../icons/lock-active.svg'
import Eye from '../../icons/eye-crossed.svg'

const Login = props => {
    const [emailActive, setEmailActive] = useState(false)
    const [passwordActive, setPasswordActive] = useState(false)
    const [eyeClick, setEyeClick] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.auth)
    
    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1
        }
    }

    const onSubmit = (data) => {
        dispatch(login(data))
    }

    return (
        <div className="d-flex flex-column flex-lg-row">
            <AuthLogo />
            <div id="right" style={style.right} className="auth right">
                <div className="item bold big start d-none d-sm-block">Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </div>
                <div className="item text-center bold big start d-block d-sm-none">
                    Login
                </div>
                <div className="item text desc-right d-none d-sm-block">
                    Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </div>
                <div className="item text-center text desc-right d-block d-sm-none">
                    Login to your existing account to access all the features in Zwallet.
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="email input mb-5">
                        <img src={emailActive ? MailActive : Mail} alt="mail" className="mail"/>
                        <input onFocus={() => setEmailActive(true)} onBlur={() => setEmailActive(false)} ref={register} name="email" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                    </div>
                    <div className="password input">
                        <img src={passwordActive ? LockActive : Lock} alt="lock" className="lock" />
                        <input onFocus={() => setPasswordActive(true)} onBlur={() => setPasswordActive(false)} ref={register} name="password" type={eyeClick ? "text" : "password"} placeholder="Enter your password" autoComplete="off" />
                        <img onClick={() => setEyeClick(!eyeClick)} src={Eye} className="eye-auth" alt="" />
                    </div>
                    <div className="forgot d-flex justify-content-end font-weight-bold">
                        <Link to="/forgot">Forgot password?</Link>
                    </div>
                    <div className="button">
                        <button className="auth-primary-btn" type="submit">Login</button>
                    </div>
                    <p className="med text-danger text-center">{error}</p>
                    </form>
                <div className="sign-up">
                    <p className="text">Don’t have an account? Let’s <Link to="/register" className="bold primary">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login