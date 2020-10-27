import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { topup } from '../../redux/action/topup'
import Back from '../../icons/arrow-left.svg'
import TopupLogo from '../../icons/menu-active/plus.svg'
import './Topup.css'
import { Link } from 'react-router-dom'

const Topup = props => {
    const { token } = useSelector(state => state.auth)
    const { data } = useSelector(state => state.topup)
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
                        <div onClick={() => window.snap.pay('')} style={{backgroundColor: '#EBEEF2', borderRadius: '10px', padding: '15px'}} className="mr-3">
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
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Topup