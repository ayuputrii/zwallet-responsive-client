import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import { useForm } from 'react-hook-form'
import { emailFilled } from '../../redux/action/forgot'
import { useDispatch, useSelector } from 'react-redux'
import Mail from '../../icons/mail.svg'
import MailActive from '../../icons/mail-active.svg'

const Forgot = props => {
    const [emailActive, setEmailActive] = useState(false)
    const { register, handleSubmit } = useForm()
    const { isEmailFilled } = useSelector(state => state.forgot)
    const dispatch = useDispatch()
    
    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1
        }
    }

    const onSubmit = ({ email }) => {
        dispatch(emailFilled(email))
    }

    if(isEmailFilled) {
        return (
            <Redirect to="/forgot/reset" />
        )
    } else {
        return (
            <div className="d-flex flex-column flex-lg-row">
                <AuthLogo />
                <div id="right" style={style.right} className="auth right">
                    <div className="item bold big start d-none d-sm-block">
                        Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.
                    </div>
                    <div className="item text-center bold big start d-block d-sm-none">
                        Reset Password
                    </div>
                    <div className="item text desc-right d-none d-sm-block">
                        To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                    </div>
                    <div className="item text-center text desc-right d-block d-sm-none">
                        Enter your Zwallet e-mail so we can send you a password reset link.
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="email input mb-5">
                            <img src={emailActive ? MailActive : Mail} alt="mail" className="mail"/>
                            <input onFocus={() => setEmailActive(true)} onBlur={() => setEmailActive(false)} ref={register} name="email" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                        </div>
                        <div className="button">
                            <button className="auth-primary-btn" type="submit">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Forgot