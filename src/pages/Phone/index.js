import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { editUser, getUser } from '../../redux/action/user'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import Trash from '../../icons/trash.svg'
import Phone from '../../icons/phone.svg'
import PhoneActive from '../../icons/phone-active.svg'
import Back from '../../icons/arrow-left.svg'
import './Phone.css'
import Notification from '../../components/Notification'

const ManagePhone = props => {
    const [phone, setPhone] = useState('')
    const [phoneActive, setPhoneActive] = useState(false)
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)
    const { token } = useSelector(state => state.auth)
    const history = useHistory()

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

    const splitPhone = (phone) => {
        if(phone) {
            const newPhone = phone.split('').map((item, index) => {
                if(index === 2 || index === 6) {
                    return item + '-'
                } else {
                    return item
                }
            })
    
            return newPhone
        } else {
            return ""
        }
    }

    const onSubmit = () => {
        if(phone.length === 11 || phone.length === 12) {
            dispatch(editUser({ phone }, token))
            history.push('/profile')
            dispatch(getUser(token))
        }
    }

    const deletePhone = () => {
        dispatch(editUser({ phone: null}, token))
        dispatch(getUser(token))
    }

    if(data.phone) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5">
                    <Menu active={4} />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4">
                            <Link to="/profile/info">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">Manage Phone Number</p>
                        </div>
                        <p className="text bold text-dark mb-4 d-none d-sm-inline">Manage Phone Number</p>
                        <p style={{width:'334px'}} className="text-muted mb-5">You can only delete the phone number and then you must add another phone number.</p>
                        <div style={{padding: '15px'}} className="label d-flex justify-content-between align-items-center">
                            <div>
                                <p className="med text-muted mb-2">Primary</p>
                                <p className="bold big mb-0">+62 {splitPhone(data.phone)}</p>  
                            </div>
                            <div>
                                <img onClick={deletePhone} style={{cursor: 'pointer'}} src={Trash} alt="trash" />
                            </div>
                        </div>
                        <Notification />
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5">
                    <Menu active={4} />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4">
                            <Link to="/profile/info">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">Add Phone Number</p>
                        </div>
                        <p className="text bold text-dark mb-4 d-none d-sm-inline">Add Phone Number</p>
                        <p style={{width:'334px'}} className="text-muted mb-5">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="notes bg-transparent">
                                <img src={phoneActive ? PhoneActive : Phone} className="edit" alt="" />
                                <input onFocus={() => setPhoneActive(true)} onBlur={() => setPhoneActive(false)} onChange={(e) => setPhone(e.target.value)} value={phone} className="note bg-transparent" type="text" placeholder="Enter your phone number" />
                            </div>
                            <button onClick={onSubmit} className="py-3 btn-phone" style={phone ? style.buttonPrimary : style.buttonGrey}>Add Phone Number</button>
                        </div>
                        <Notification />
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default ManagePhone