import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHistory } from '../../redux/action/history'
import { Link } from 'react-router-dom'
import Transfer from '../../icons/balance/arrow-up.svg'
import Topup from '../../icons/balance/plus.svg'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import './Home.css'
import { imageURI } from '../../utils'

const Home = props => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)
    const { dataAll } = useSelector(state => state.history)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getHistory(token))
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
            if(item.receiver === data.name) {
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

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={1} />
                <div style={{ flex: 1 }}>
                    <div id="top-panel" className="top-panel bg-top-panel">
                        <div className="left">
                            <p className="balance text">Balance</p>
                            <p className="price bold">Rp{data.balance}</p>
                            <p className="phone">+62 {splitPhone(data.phone)}</p>
                        </div>
                        <div className="right">
                            <Link to={{ pathname: `/transfer`}}>
                                <button className="btn-light-primary">
                                    <img className="mr-2" src={Transfer} alt=""/>
                                    Transfer
                                </button>   
                            </Link>
                            <Link to={{pathname: `/topup`}}>
                                <button className="btn-light-primary">
                                    <img className="mr-2" src={Topup} alt=""/>
                                    Top Up
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bottom-panel">
                        <div className="chart">
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
                                <canvas id="myChart" height="268px"></canvas>
                            </div>
                        </div>
                        <div className="history">
                            <div className="desc">
                                <span className="text bold desc-title">Transaction History</span>
                                <Link to="/dashboard/history" className="small primary">See all</Link>
                            </div>
                            {dataAll.map((item, index) => {
                                if(index <= 3) {
                                    return (
                                        <div key={index} className="items">
                                            <div className="left">
                                                <div className="avatar">
                                                    <img src={`${imageURI}${item.receiver === data.name ? item.photo_sender : item.photo}`} width="56px" height="56px" alt="" />
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
                                }
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Home