import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { formFilled } from '../../redux/action/transfer'
import { useForm } from 'react-hook-form'
import Edit from '../../icons/edit.svg'
import EditActive from '../../icons/edit-active.svg'
import Back from '../../icons/arrow-left.svg'
import { imageURI } from '../../utils'
import './Input.css'
import Notification from '../../components/Notification'

const Input = props => {
    const history = useHistory()
    const [message, setMessage] = useState('')
    const [noteActive, setNoteActive] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const { userTransfer } = useSelector(state => state.search)
    const { data } = useSelector(state => state.user)

    const onSubmit = ({ amount, note}) => {
        if(parseInt(amount) && data.balance - parseInt(amount) > 0) {
            dispatch(formFilled({
                amount: parseInt(amount),
                note,
                phone_receiver: userTransfer.phone
            }))
            history.push('/transfer/confirm')
        } else {
            setMessage('Amount must be a Number')
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

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={2} />
                <div className="content-main">
                <div className="d-flex align-items-start d-sm-none mb-4">
                    <Link to="/transfer">
                        <img className="mr-3" src={Back} alt="back" />
                    </Link>
                    <p style={{fontSize: '20px'}} className="bold">Transfer</p>
                </div>
                <div className="where">
                    <p className="text bold d-none d-sm-block">Transfer Money</p>
                    <div className="profile label">
                        <div className="avatar">
                            <img style={{borderRadius: '10px'}} width="70px" height="70px" src={imageURI+userTransfer.photo} alt="" />
                        </div>
                        <div className="info">
                            <p className="name text bold">{userTransfer.name}</p>
                            <div className="text-muted med">+62 {splitPhone(userTransfer.phone)}</div>
                        </div>
                    </div>
                </div>
                <div className="med type d-none d-sm-block">
                    Type the amount you want to transfer and then press continue to the next steps.
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input bg-transparent">
                        <input ref={register} name="amount" autoComplete="off" className="amount primary bg-transparent" type="number" placeholder="0.00" />
                        <span className="cash bold med">Rp{data.balance} Available</span>
                    </div>
                    <div className="notes bg-transparent">
                        <img className="edit" src={noteActive ? EditActive : Edit} alt="edit" />
                        <input onFocus={() => setNoteActive(true)} onBlur={() => setNoteActive(false)} ref={register} autoComplete="off" name="note" className="note bg-transparent" type="text" placeholder="Add some notes" />
                    </div>
                    <p className="text-danger text-center med">{message}</p>
                    <div className="confirm">
                        <button type="submit" className="btn-primary">Continue</button>
                    </div>
                </form>
                <Notification />
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Input