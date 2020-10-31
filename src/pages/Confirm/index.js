import React, { Fragment, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { transfer } from '../../redux/action/transfer'
import { useForm } from 'react-hook-form'
import { Modal, Button } from 'react-bootstrap'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { imageURI } from '../../utils'
import Back from '../../icons/arrow-left.svg'
import './Confirm.css'
import Notification from '../../components/Notification'

const Confirm = props => {
    const history = useHistory()
    const { register, handleSubmit } = useForm()
    const [isMobile, setIsMobile]= useState(false)
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()
    const { userTransfer} = useSelector(state => state.search)
    const { dataTransfer, messagePIN, isSuccess, isFailed } = useSelector(state => state.transfer)
    const { data } = useSelector(state => state.user)
    const { token } = useSelector(state => state.auth)

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

    const getDate = () => {
        const date = new Date()
        let month = date.getMonth()
        switch(month) {
            case 0:
                month = "January"
                break
            case 1:
                month = "February"
                break
            case 2:
                month = "March"
                break
            case 3:
                month = "April"
                break
            case 4:
                month = "May"
                break
            case 5:
                month = "June"
                break
            case 6:
                month = "July"
                break
            case 7:
                month = "August"
                break
            case 8:
                month = "September"
                break
            case 9:
                month = "October"
                break
            case 10:
                month = "November"
                break
            case 11:
                month = "December"
                break
            default:
                month = null
                break
        }
        const day = date.getDate()
        const year = date.getFullYear()
        const hour = date.getHours()
        const minute = date.getMinutes()

        return `${month} ${day}, ${year} - ${hour.toString().length === 1 ? "0" + hour : hour}.${minute.toString().length === 1 ? "0" + minute : minute}`
    }

    const onSubmit = pin => {
        dispatch(transfer(token, {
            ...dataTransfer,
            pin: Object.values(pin).join(''),
            sender: data.name,
            photo_sender: data.photo
            
        }, userTransfer.balance))
        console.log(isSuccess, isFailed)
        
    }

    if(isSuccess || isFailed) {
        return (
            <Redirect to="/transfer/status" />
        )
    } else {
        if(!isMobile) {
            return (
                <Fragment>
                    <Navbar />
                    <Container className="d-flex mt-5">
                        <Menu active={2} />
                        <div className="content-main">
                            <div className="d-flex align-items-start d-sm-none mb-4">
                                <Link to="/transfer/input">
                                    <img className="mr-3" src={Back} alt="back" />
                                </Link>
                                <p style={{fontSize: '20px'}} className="bold">Confirmation</p>
                            </div>
                            <div className="into">
                                <p className="text bold">Transfer To</p>
                                <div className="profile label">
                                    <div className="avatar">
                                        <img style={{borderRadius: '10px'}}
                                        width="70px" height="70px" src={imageURI + userTransfer.photo} alt="" />
                                    </div>
                                    <div className="info">
                                        <p className="name text bold">{userTransfer.name}</p>
                                        <div className="text-muted med">+62 {splitPhone(userTransfer.phone)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <p className="text bold">Details</p>
                                <div className="label">
                                    <div className="title med">Amount</div>
                                    <div className="desc big bold">Rp{dataTransfer.amount}</div>
                                </div>
                                <div className="label">
                                    <div className="title med">Balance Left</div>
                                    <div className="desc big bold">Rp{data.balance - dataTransfer.amount}</div>
                                </div>
                                <div className="label">
                                    <div className="title med">Date & Time</div>
                                    <div className="desc big bold">{getDate()}</div>
                                </div>
                                <div className="label">
                                    <div className="title med">Notes</div>
                                    <div className="desc big bold">{dataTransfer.note}</div>
                                </div>
                            </div>
                            <div className="confirm d-none d-sm-block">
                                <button onClick={() => setModalShow(true)} className="btn-primary" style={{float: 'right'}}>Continue</button>
                            </div>
                            <div className="confirm d-block d-sm-none">
                                <button onClick={() => setIsMobile(true)} className="btn-primary" style={{float: 'right'}}>Continue</button>
                            </div>
                            <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow} onHide={() => setModalShow(false)} >
                                <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Enter PIN to Transfer
                                </Modal.Title>
                                </Modal.Header>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Modal.Body>
                                    <p className="med text-modal">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                                    <div className="pin">
                                        <input ref={register} name={1} type="text" maxLength="1" />
                                        <input ref={register} name={2} type="text" maxLength="1"/>
                                        <input ref={register} name={3} type="text" maxLength="1"/>
                                        <input ref={register} name={4} type="text" maxLength="1"/>
                                        <input ref={register} name={5} type="text" maxLength="1"/>
                                        <input ref={register} name={6} type="text" maxLength="1"/>
                                    </div>
                                    <p className="text-center text-danger">{messagePIN}</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button type="submit">Continue</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
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
                        <Menu />
                        <div className="content-main">
                            <div className="d-flex align-items-start d-sm-none mb-4">
                                <div onClick={() => setIsMobile(false)}>
                                    <img className="mr-3" src={Back} alt="back" />
                                </div>
                                <p style={{fontSize: '20px'}} className="bold">Enter Your PIN</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>  
                                    <p className="med text-modal">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                                    <div className="pin">
                                        <input ref={register} name={1} type="text" maxLength="1" />
                                        <input ref={register} name={2} type="text" maxLength="1"/>
                                        <input ref={register} name={3} type="text" maxLength="1"/>
                                        <input ref={register} name={4} type="text" maxLength="1"/>
                                        <input ref={register} name={5} type="text" maxLength="1"/>
                                        <input ref={register} name={6} type="text" maxLength="1"/>
                                    </div>
                                    <p className="text-center text-danger">{messagePIN}</p>     
                                    <div className="confirm">
                                        <button style={{position: 'absolute', bottom: '10px'}} className="btn-primary" type="submit">Continue</button>     
                                    </div> 
                                </form>
                        </div>
                    </Container>
                    <Footer />
                </Fragment>
            )
        }
    }
}

export default Confirm