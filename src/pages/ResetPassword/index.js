import React, { useState } from 'react'
import AuthLogo from '../../components/AuthLogo'
import { useForm } from 'react-hook-form'
import { reset } from '../../redux/action/forgot'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Lock from '../../icons/lock.svg'
import LockActive from '../../icons/lock-active.svg'
import Eye from '../../icons/eye-crossed.svg'

const ResetPassword = props => {
    const history = useHistory()
    const [passwordActive, setPasswordActive] = useState(false)
    const [repeatActive, setRepeatActive] = useState(false)
    const [eyeClick, setEyeClick] = useState(false)
    const [repeatEyeClick, setRepeatEyeClick] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const { email } = useSelector(state => state.forgot)
    
    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1
        }
    }

    const onSubmit = ({ password, repeat }) => {
        if(password === repeat) {
            const data = {
                email,
                password
            }

            dispatch(reset(data))
            history.push('/login')
        }
    }

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
                    Create and confirm your new password so you can login to Zwallet.
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="password input">
                    <img src={passwordActive ? LockActive : Lock} alt="lock" className="lock" />
                    <input onFocus={() => setPasswordActive(true)} onBlur={() => setPasswordActive(false)} ref={register} name="password" type={eyeClick ? "text" : "password"} placeholder="Create new password" autoComplete="off" />
                    <img onClick={() => setEyeClick(!eyeClick)} src={Eye} className="eye-auth" alt="" />
                </div>
                <div className="password input">
                    <img src={repeatActive ? LockActive : Lock} alt="lock" className="lock" />
                    <input onFocus={() => setRepeatActive(true)} onBlur={() => setRepeatActive(false)} ref={register} name="repeat" type={repeatEyeClick ? "text" : "password"} placeholder="Confirm new password" autoComplete="off" />
                    <img onClick={() => setRepeatEyeClick(!repeatEyeClick)} src={Eye} className="eye-auth" alt="" />
                </div>
                <div className="button">
                    <button className="auth-primary-btn" type="submit">Confirm</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword