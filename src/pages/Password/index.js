import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/action/user'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import Lock from '../../icons/lock.svg'
import LockActive from '../../icons/lock-active.svg'
import Eye from '../../icons/eye-crossed.svg'

const Password = props => {
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

    const style = {
        buttonPrimary: {
            backgroundColor: "#6379F4",
            borderRadius: "12px",
            color: '#FFFFFF',
            width: '433px',
            border: 'none'
        },
        buttonGrey: {
            backgroundColor: "#DADADA",
            borderRadius: "12px",
            color: '#88888F',
            width: '433px',
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

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={4} />
                <div className="content-main">
                    <p className="text bold text-dark mb-4">Change Password</p>
                    <p style={{width:'334px'}} className="text-muted mb-5">You must enter your current password and then type your new password twice.</p>
                    <div style={{padding: '15px'}} className="d-flex flex-column justify-content-center align-items-center">   
                        <div className="notes bg-transparent">
                            <img className="edit" src={currActive ? LockActive : Lock} alt="" />
                            <img onClick={() => setCurrEye(!currEye)} className="eye" src={Eye} alt="" />
                            <input onFocus={() => setCurrActive(true)} onBlur={() => setCurrActive(false)} onChange={(e) => setCurrPassword(e.target.value)} value={currPassword} className="note bg-transparent" type={currEye ? "text" : "password"} placeholder="Current password" />
                        </div>
                        <div className="notes bg-transparent">
                            <img className="edit" src={newActive ? LockActive : Lock} alt="" />
                            <img onClick={() => setNewEye(!newEye)} className="eye" src={Eye} alt="" />
                            <input onFocus={() => setNewActive(true)} onBlur={() => setNewActive(false)} onChange={(e) => setPassword(e.target.value)} value={password} className="note bg-transparent" type={newEye ? "text" : "password"} placeholder="New password" />
                        </div>
                        <div className="notes bg-transparent">
                            <img className="edit" src={repeatActive ? LockActive : Lock} alt="" />
                            <img onClick={() => setRepeatEye(!repeatEye)} className="eye" src={Eye} alt="" />
                            <input onFocus={() => setRepeatActive(true)} onBlur={() => setRepeatActive(false)} onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} className="note bg-transparent" type={repeatEye ? "text" : "password"} placeholder="Repeat new password" />
                        </div>
                        <button onClick={onSubmit} style={currPassword && password && password === repeatPassword ? style.buttonPrimary : style.buttonGrey} className="py-3">Change Password</button>
                    </div>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Password