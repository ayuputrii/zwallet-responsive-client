import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import { formFilled } from '../../redux/action/register'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Person from '../../icons/person.svg'
import PersonActive from '../../icons/person-active.svg'
import Mail from '../../icons/mail.svg'
import MailActive from '../../icons/mail-active.svg'
import Lock from '../../icons/lock.svg'
import LockActive from '../../icons/lock-active.svg'
import Eye from '../../icons/eye-crossed.svg'

const Register = props => {
    const [nameActive, setNameActive] = useState(false)
    const [emailActive, setEmailActive] = useState(false)
    const [passwordActive, setPasswordActive] = useState(false)
    const [eyeClick, setEyeClick] = useState(false)
    const { register, handleSubmit } = useForm()
    const { isFormFilled } = useSelector(state => state.register)
    const dispatch = useDispatch()

    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1
        }
    }

    const onSubmit = ({ name, email, password }) => {
        if(name && email && password) {
            dispatch(formFilled({
                name,
                email,
                password
            }))
        }
    }

    if(isFormFilled) {
        return <Redirect to="/register/pin" />
    } else {
        return (
            <div className="d-flex flex-column flex-lg-row">
                <AuthLogo />
                <div style={style.right} className="auth right">
                    <div className="item bold big start d-none d-sm-block">Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </div>
                    <div className="item text-center bold big start d-block d-sm-none">
                        Sign Up
                    </div>
                    <div className="item text desc-right d-none d-sm-block">
                        Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                    </div>
                    <div className="item text-center text desc-right d-block d-sm-none">
                        Create your account to access Zwallet.
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="users input mb-5">
                            <img src={nameActive ? PersonActive : Person} alt="person" className="person"/>
                            <input onFocus={() => setNameActive(true)} onBlur={() => setNameActive(false)}  ref={register} name="name" type="text" placeholder="Enter your username" autoComplete="off" />
                        </div>
                        <div className="email input mb-5">
                            <img src={emailActive ? MailActive : Mail} alt="mail" className="mail"/>
                            <input onFocus={() => setEmailActive(true)} onBlur={() => setEmailActive(false)} ref={register} name="email" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                        </div>
                        <div className="password input mb-5">
                            <img src={passwordActive ? LockActive : Lock} alt="lock" className="lock" />
                            <input onFocus={() => setPasswordActive(true)} onBlur={() => setPasswordActive(false)} ref={register} name="password" type={eyeClick ? "text" : "password"} placeholder="Enter your password" autoComplete="off" />
                            <img onClick={() => setEyeClick(!eyeClick)} src={Eye} className="eye-auth" alt="eye" />
                        </div>
                        <div className="button">
                            <button className="auth-primary-btn" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className="sign-up">
                        <p className="text">Already have an account? Let’s <Link to="/login" className="bold primary">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register