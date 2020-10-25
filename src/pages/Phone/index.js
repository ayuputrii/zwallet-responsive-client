import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editUser } from '../../redux/action/user'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import Trash from '../../icons/trash.svg'
import Phone from '../../icons/phone.svg'
import PhoneActive from '../../icons/phone-active.svg'
import './Phone.css'

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
            window.location.reload()
        }
    }

    const deletePhone = () => {
        dispatch(editUser({ phone: ''}, token))
        window.location.reload()
    }

    if(data.phone) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5">
                    <Menu active={4} />
                    <div className="content-main">
                        <p className="text bold text-dark mb-4">Manage Phone Number</p>
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
                        <p className="text bold text-dark mb-4">Add Phone Number</p>
                        <p style={{width:'334px'}} className="text-muted mb-5">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                        <div style={{padding: '15px'}} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="notes bg-transparent">
                                <img src={phoneActive ? PhoneActive : Phone} className="edit" alt="" />
                                <input onFocus={() => setPhoneActive(true)} onBlur={() => setPhoneActive(false)} onChange={(e) => setPhone(e.target.value)} value={phone} className="note bg-transparent" type="text" placeholder="Enter your phone number" />
                            </div>
                            <button onClick={onSubmit} className="py-3" style={phone ? style.buttonPrimary : style.buttonGrey}>Add Phone Number</button>
                        </div>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default ManagePhone