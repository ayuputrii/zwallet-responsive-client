import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Notification from '../../components/Notification'
import Menu from '../../components/Menu'
import { Container, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { chargeTopup20k, chargeTopup50k, chargeTopup100k } from '../../redux/action/topup'
import { getHistory } from '../../redux/action/history'
import { Link } from 'react-router-dom'
import Transfer from '../../icons/balance/arrow-up.svg'
import Topup from '../../icons/balance/plus.svg'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import bell from '../../icons/bell.svg'
import Back from '../../icons/arrow-left.svg'
import LogoTopup from '../../icons/logo.svg'
import './Home.css'
import { imageURI } from '../../utils'
import MyChart from '../../components/Chart'

const Home = props => {
    const [modalShow, setModalShow] = useState(false)
    const [isNotification, setNotification] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)
    const { dataAll, dataToday, dataWeek } = useSelector(state => state.history)
    const { token20k, token50k, token100k } = useSelector(state => state.topup)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getHistory(token))
        dispatch(chargeTopup20k(token))
        dispatch(chargeTopup50k(token))
        dispatch(chargeTopup100k(token))
    }, [])

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

    const handleGraph = (stats) => {
        let income = 0;
        let expense = 0;
        dataAll.forEach(item => {
            if(item.receiver === data.name || item.name) {
                income += item.amount
            } else {
                expense += item.amount
            }
        })

        if(stats === 'income') {
            return income
        } else {
            return expense
        }
    }

    if(isMobile) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5 px-0">
                    <Menu />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4 px-3">
                            <div onClick={() => setIsMobile(false)}>
                                <img className="mr-3" src={Back} alt="back" />
                            </div>
                            <p style={{fontSize: '20px'}} className="bold">Transaction</p>
                        </div>
                        <div className="bottom-panel">
                            <div className="chart px-3">
                                <div className="top">
                                    <div className="left">
                                        <img src={Income} alt=""/>
                                        <p className="small">Income</p>
                                        <p className="text bold">Rp{handleGraph('income')}</p>
                                    </div>
                                    <div className="right">
                                        <img src={Expense} alt=""/>
                                        <p className="small">Expense</p>
                                        <p className="text bold">Rp{handleGraph('expense')}</p>
                                    </div>
                                </div>
                                <p className="text bold mb-3 mt-5">In This Week</p>
                                <div className="bottom mb-5">
                                    <MyChart />
                                </div>
                            </div>
                            <div className="history">
                                <div className="desc">
                                    <span className="text bold desc-title">Transaction History</span>
                                    <Link to="/dashboard/history" className="small primary">See all</Link>
                                </div>
                                <div className="d-flex flex-column">
                                {dataAll.map((item, index) => {
                                    if(index <= 3 && !item.name) {
                                        return (
                                            <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img style={{borderRadius: '10px'}} src={`${imageURI}${item.receiver === data.name ? item.photo_sender : item.photo}`} width="56px" height="56px" alt="" />
                                                    </div>
                                                    <div className="info">
                                                        <p className="bold history-text">{item.receiver === data.name ? item.sender : item.receiver}</p>
                                                        <p className="small">Transfer</p>
                                                    </div>
                                                </div>
                                                <div className="money">
                                                    <p className={`bold ${item.receiver === data.name ? 'text-success' : 'text-danger'}`}>{item.receiver === data.name ? '+' : '-'}{item.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    } else if(index <= 3 && item.name) {
                                        return (
                                            <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                                <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                        <img src={LogoTopup} width="56px" height="56px" alt="" />
                                                    </div>
                                                    <div className="info">
                                                        <p className="bold history-text">Charge</p>
                                                        <p className="small">Top Up</p>
                                                    </div>
                                                </div>
                                                <div className="money">
                                                    <p className={`bold text-success`}>+{item.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        ) 
    } else if(isNotification) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5">
                    <Menu />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4">
                            <div onClick={() => setNotification(false)}>
                                <img className="mr-3" src={Back} alt="back" />
                            </div>
                            <p style={{fontSize: '20px'}} className="bold">Notification</p>
                        </div>
                        <div className="report">
                            <p className="med date">Today</p>
                            {dataToday.map((item, index) => {
                                if(index <= 2 && !item.name) {
                                    return (
                                        <div key={index} className="label">
                                            <div className="icon mr-3">
                                                <img src={item.receiver === data.name ? Income: Expense} alt="" />
                                            </div>
                                            <div className="info">
                                                {item.receiver === data.name ? <p className="small">Transfered from {data.sender}</p> : <p className="small">Transfer to {item.receiver}</p>}
                                                <p className="text bold">Rp{item.amount}</p>
                                            </div>
                                        </div>
                                    )
                                } else if(index <= 2 && item.name) {
                                    return (
                                        <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                            <div className="d-flex align-items-center">
                                            <div className="avatar">
                                                    <img src={LogoTopup} width="56px" height="56px" alt="" />
                                                </div>
                                                <div className="info">
                                                    <p className="bold history-text">Charge</p>
                                                    <p className="small">Top Up</p>
                                                </div>
                                            </div>
                                            <div className="money">
                                                <p className={`bold text-success`}>+{item.amount}</p>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>
                        <div className="report">
                            <p className="med date">This Week</p>
                            {dataWeek.map((item, index) => {
                                if(index <= 2 && !item.name) {
                                    return (
                                        <div key={index} className="label">
                                            <div className="icon mr-3">
                                                <img src={item.receiver === data.name ? Income: Expense} alt="" />
                                            </div>
                                            <div className="info">
                                                {item.receiver === data.name ? <p className="small">Transfered from {data.sender}</p> : <p className="small">Transfer to {item.receiver}</p>}
                                                <p className="text bold">Rp{item.amount}</p>
                                            </div>
                                        </div>
                                    )
                                } else if(index <= 2 && item.name) {
                                    return (
                                        <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                            <div className="d-flex align-items-center">
                                            <div className="avatar">
                                                    <img src={LogoTopup} width="56px" height="56px" alt="" />
                                                </div>
                                                <div className="info">
                                                    <p className="bold history-text">Charge</p>
                                                    <p className="small">Top Up</p>
                                                </div>
                                            </div>
                                            <div className="money">
                                                <p className={`bold text-success`}>+{item.amount}</p>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return ''
                                }
                            })}
                        </div>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Navbar/>
                <Container className="d-flex mt-5 px-0 px-md-5">
                    <Menu active={1} />
                    <div style={{ flex: 1, position: 'relative'}}>
                        <div className="d-flex justify-content-between align-items-center d-sm-none mb-3 px-3">
                            <Link to="/profile" className="d-flex">
                                <img style={{ borderRadius: '10px', marginRight: '20px'}} width="52px" height="52px" src={imageURI+data.photo} alt="" />
                                <div className="d-flex flex-column">
                                    <p className="text mb-2">Hello,</p>
                                    <p className="text bold mb-0">{data.name}</p>
                                </div>
                            </Link>
                            <div>
                                <img onClick={() => setNotification(true)} style={{cursor: 'pointer'}} src={bell} alt="bell" />
                            </div>
                        </div>
                        <div id="top-panel" className="top-panel bg-top-panel">
                            <div className="left">
                                <p className="balance text">Balance</p>
                                <p className="price bold">Rp{data.balance}</p>
                                <p className="phone">+62 {splitPhone(data.phone)}</p>
                            </div>
                            <div className="right">
                                <Link to={{ pathname: `/transfer`}}>
                                    <button className="btn-light-primary home-button">
                                        <img className="mr-2" src={Transfer} alt=""/>
                                        Transfer
                                    </button>   
                                </Link>
                                <Link to={{ pathname: `/topup`}} className="d-sm-none">
                                    <button className="btn-light-primary home-button">
                                        <img className="mr-2" src={Topup} alt=""/>
                                        Top Up
                                    </button>   
                                </Link>
                                <button onClick={() => setModalShow(true)} 
                                className="btn-light-primary home-button d-none d-sm-block">
                                    <img className="mr-2" src={Topup} alt=""/>
                                    Top Up
                                </button>
                            </div>
                        </div>
                        <div className="bottom-panel">
                            <div className="chart d-none d-sm-block">
                                <div className="top">
                                    <div className="left">
                                        <img src={Income} alt=""/>
                                        <p className="small">Income</p>
                                        <p className="text bold">Rp{handleGraph('income')}</p>
                                    </div>
                                    <div className="right">
                                        <img src={Expense} alt=""/>
                                        <p className="small">Expense</p>
                                        <p className="text bold">Rp{handleGraph('expense')}</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <MyChart />
                                </div>
                            </div>
                            <div className="history">
                                <div className="desc d-none d-sm-flex">
                                    <span className="text bold desc-title">Transaction History</span>
                                    <Link to="/dashboard/history" className="small primary">See all</Link>
                                </div>
                                <div className="desc d-sm-none">
                                    <span onClick={() => setIsMobile(true)} className="text bold desc-title">Transaction History</span>
                                    <Link to="/dashboard/history" className="small primary">See all</Link>
                                </div>
                                <div className="d-flex flex-column">
                                {dataAll.map((item, index) => {
                                    if(index <= 3 && !item.name) {
                                        return (
                                            <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img style={{borderRadius: '10px'}} src={`${imageURI}${item.receiver === data.name ? item.photo_sender : item.photo}`} width="56px" height="56px" alt="" />
                                                    </div>
                                                    <div className="info">
                                                        <p className="bold history-text">{item.receiver === data.name ? item.sender : item.receiver}</p>
                                                        <p className="small">Transfer</p>
                                                    </div>
                                                </div>
                                                <div className="money">
                                                    <p className={`bold ${item.receiver === data.name ? 'text-success' : 'text-danger'}`}>{item.receiver === data.name ? '+' : '-'}{item.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    } else if(index <= 3 && item.name) {
                                        return (
                                            <div key={index} className="d-flex justify-content-between history--item align-items-center mb-4">
                                                <div className="d-flex align-items-center">
                                                <div className="avatar">
                                                        <img src={LogoTopup} width="56px" height="56px" alt="" />
                                                    </div>
                                                    <div className="info">
                                                        <p className="bold history-text">Charge</p>
                                                        <p className="small">Top Up</p>
                                                    </div>
                                                </div>
                                                <div className="money">
                                                    <p className={`bold text-success`}>+{item.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                </div>
                            </div>
                        </div>
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
}

export default Home

