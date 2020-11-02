import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editUser, getUser } from '../../redux/action/user'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import Lock from '../../icons/lock.svg'
import LockActive from '../../icons/lock-active.svg'
import Eye from '../../icons/eye-crossed.svg'
import Back from '../../icons/arrow-left.svg'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Notification from '../../components/Notification'

const Password = props => {
    const history = useHistory()
    const [currPassword, setCurrPassword] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [currActive, setCurrActive] = useState(false)
    const [newActive, setNewActive] = useState(false)
    const [repeatActive, setRepeatActive] = useState(false)
    const [currEye, setCurrEye] = useState(false)
    const [newEye, setNewEye] = useState(false)
    const [repeatEye, setRepeatEye] = useState(false)
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { isEditSuccess, messageEdit, isEditFailed } = useSelector(state => state.user)

    const style = {
        buttonPrimary: {
            backgroundColor: "#6379F4",
            borderRadius: "12px",
            color: '#FFFFFF',
            border: 'none'
        },
        buttonGrey: {
            backgroundColor: "#DADADA",
            borderRadius: "12px",
            color: '#88888F',
            border: 'none'
        }
    }

    const onSubmit = () => {
        if(currPassword && password && password === repeatPassword) {
            dispatch(editUser({
                currPassword,
                password
            }, token))
        }
    }

    if(isEditSuccess || isEditFailed) {
        if(isEditSuccess) {
            return (<Redirect to="/profile" />)
        } else {
            return (
                <Fragment>
                    <Navbar />
                    <Container fluid="sm" className="d-flex mt-5 px-0 px-sm-5">
                        <Menu active={4} />
                        <div className="content-main">
                            <div className="d-flex align-items-start d-sm-none mb-4 ml-3">
                                <Link to="/profile">
                                    <img className="mr-3" src={Back} alt="back" />
                                </Link>
                                <p style={{fontSize: '20px'}} className="bold">Change Password</p>
                            </div>
                            <p className="text bold text-dark mb-4 d-none d-sm-inline">Change Password</p>
                            <p style={{width:'334px'}} className="text-muted mb-5  ml-3 ml-sm-0 text-password">You must enter your current password and then type your new password twice.</p>
                            <div className="d-flex flex-column password-password">   
                                <div className="notes bg-transparent">
                                    <img className="edit" src={currActive ? LockActive : Lock} alt="" />
                                    <img onClick={() => setCurrEye(!currEye)} className="eye eye-password" src={Eye} alt="" />
                                    <input onFocus={() => setCurrActive(true)} onBlur={() => setCurrActive(false)} onChange={(e) => setCurrPassword(e.target.value)} value={currPassword} className="note bg-transparent" type={currEye ? "text" : "password"} placeholder="Current password" />
                                </div>
                                <div className="notes bg-transparent">
                                    <img className="edit" src={newActive ? LockActive : Lock} alt="" />
                                    <img onClick={() => setNewEye(!newEye)} className="eye eye-password" src={Eye} alt="" />
                                    <input onFocus={() => setNewActive(true)} onBlur={() => setNewActive(false)} onChange={(e) => setPassword(e.target.value)} value={password} className="note bg-transparent" type={newEye ? "text" : "password"} placeholder="New password" />
                                </div>
                                <div className="notes bg-transparent">
                                    <img className="edit" src={repeatActive ? LockActive : Lock} alt="" />
                                    <img onClick={() => setRepeatEye(!repeatEye)} className="eye eye-password" src={Eye} alt="" />
                                    <input onFocus={() => setRepeatActive(true)} onBlur={() => setRepeatActive(false)} onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} className="note bg-transparent" type={repeatEye ? "text" : "password"} placeholder="Repeat new password" />
                                </div>
                                <p className="med text-danger text-center">Invalid Password</p>
                                <button onClick={onSubmit} style={currPassword && password && password === repeatPassword ? style.buttonPrimary : style.buttonGrey} className="py-3 btn-phone align-self-sm-center">Change Password</button>
                            </div>
                            <Notification />
                        </div>
                    </Container>
                    <Footer />
                </Fragment>
            )
        }
    } else {
        return (
            <Fragment>
                <Navbar />
                <Container fluid="sm" className="d-flex mt-5 px-0 px-sm-5">
                    <Menu active={4} />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4 ml-3">
                            <Link to="/profile">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">Change Password</p>
                        </div>
                        <p className="text bold text-dark mb-4 d-none d-sm-inline">Change Password</p>
                        <p style={{width:'334px'}} className="text-muted mb-5  ml-3 ml-sm-0 text-password">You must enter your current password and then type your new password twice.</p>
                        <div className="d-flex flex-column password-password">   
                            <div className="notes bg-transparent">
                                <img className="edit" src={currActive ? LockActive : Lock} alt="" />
                                <img onClick={() => setCurrEye(!currEye)} className="eye eye-password" src={Eye} alt="" />
                                <input onFocus={() => setCurrActive(true)} onBlur={() => setCurrActive(false)} onChange={(e) => setCurrPassword(e.target.value)} value={currPassword} className="note bg-transparent" type={currEye ? "text" : "password"} placeholder="Current password" />
                            </div>
                            <div className="notes bg-transparent">
                                <img className="edit" src={newActive ? LockActive : Lock} alt="" />
                                <img onClick={() => setNewEye(!newEye)} className="eye eye-password" src={Eye} alt="" />
                                <input onFocus={() => setNewActive(true)} onBlur={() => setNewActive(false)} onChange={(e) => setPassword(e.target.value)} value={password} className="note bg-transparent" type={newEye ? "text" : "password"} placeholder="New password" />
                            </div>
                            <div className="notes bg-transparent">
                                <img className="edit" src={repeatActive ? LockActive : Lock} alt="" />
                                <img onClick={() => setRepeatEye(!repeatEye)} className="eye eye-password" src={Eye} alt="" />
                                <input onFocus={() => setRepeatActive(true)} onBlur={() => setRepeatActive(false)} onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} className="note bg-transparent" type={repeatEye ? "text" : "password"} placeholder="Repeat new password" />
                            </div>
                            <button onClick={onSubmit} style={currPassword && password && password === repeatPassword ? style.buttonPrimary : style.buttonGrey} className="py-3 btn-phone align-self-sm-center">Change Password</button>
                        </div>
                        <Notification />
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default Password