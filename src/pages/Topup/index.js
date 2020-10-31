import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { topup, chargeTopup20k, chargeTopup50k, chargeTopup100k } from '../../redux/action/topup'
import Back from '../../icons/arrow-left.svg'
import TopupLogo from '../../icons/menu-active/plus.svg'
import './Topup.css'
import { Link } from 'react-router-dom'
import Notification from '../../components/Notification'

const Topup = props => {
    const [modalShow, setModalShow] = useState(false)
    const { token } = useSelector(state => state.auth)
    const { data, token20k, token50k, token100k } = useSelector(state => state.topup)
    const phone = useSelector(state => state.user.data.phone)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topup(token))
    }, [])
    
    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={3} />
                <div className="content-main bg-white">
                    <div className="d-flex align-items-start d-sm-none mb-4">
                        <Link to="/dashboard">
                            <img className="mr-3" src={Back} alt="back" />
                        </Link>
                        <p style={{fontSize: '20px'}} className="bold">Top Up</p>
                    </div>
                    <div className="label d-flex align-items-center mb-4 d-sm-none">
                        <div onClick={() => setModalShow(true)} style={{backgroundColor: '#EBEEF2', borderRadius: '10px', padding: '15px'}} className="mr-3">
                            <img src={TopupLogo} alt="" />
                        </div>
                        <div>
                            <p className="small">Virtual Account Number</p>
                            <p className="bold med mb-0">2389 0{phone}</p>
                        </div>
                    </div>
                    <p className="med desc text-center d-sm-none mb-4">We provide you virtual account number for top up via nearest ATM.</p>
                    <p className="text bold text-black">How To Top Up</p>
                    { !data ? '...Loading' : data.map((item, index) => {
                        return (
                            <div key={index} className="label d-flex">
                                <span className="text bold primary mr-3">{item.sequence}</span>
                                <p className="med desc">{item.title}</p>
                            </div>
                        )
                    }) }
                    <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow} onHide={() => setModalShow(false)} >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Charge Top Up
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column">
                            <div onClick={() => window.snap.pay(token20k)} className="label primary">20.000</div>
                            <div onClick={() => window.snap.pay(token50k)} className="label primary">50.000</div>
                            <div onClick={() => window.snap.pay(token100k)} className="label primary">100.000</div>
                        </div>
                    </Modal.Body>
                    </Modal>
                    <Notification />
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Topup