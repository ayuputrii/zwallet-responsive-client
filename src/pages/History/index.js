import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryByMonth, getHistoryByWeek } from '../../redux/action/history'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import Back from '../../icons/arrow-left.svg'
import { imageURI } from '../../utils'
import { Link } from 'react-router-dom'

const History = props => {
    const dispatch = useDispatch()
    const [pageWeek, setPageWeek] = useState(1)
    const [pageMonth, setPageMonth] = useState(1)
    const { data } = useSelector(state => state.user)
    const { dataWeek, dataMonth } = useSelector(state => state.history)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getHistoryByWeek(token))
    }, [])

    useEffect(() => {
        dispatch(getHistoryByMonth(token))
    }, [])

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5 px-0 px-md-5">
                <Menu active={1} />
                    <div className="content-main">
                    <div className="d-flex align-items-start d-sm-none mb-4 ml-2">
                        <Link to="/dashboard">
                            <img className="mr-3" src={Back} alt="back" />
                        </Link>
                        <p style={{fontSize: '20px'}} className="bold">History</p>
                    </div>
                    <p style={{marginBottom: '30px'}} className="text bold d-none d-sm-inline">Transaction History</p>
                    <p className="med ml-2 ml-sm-0 mb-sm-4 mb-3">This Week</p>
                    {pageWeek > 1 ?
                        <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img onClick={() => {
                            setPageWeek(pageWeek - 2)
                        }} src={Expense} alt="" />
                    </div> : ''}
                    <div className="mb-sm-0 mb-3">
                    {dataWeek.map((item, index) => {
                        if(index <= pageWeek && index > pageWeek - 2) {
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
                                    <p className={`bold ${item.receiver === data.name ? 'text-success' : 'text-danger'}`}>{item.receiver === data.name ? '+' : '-'}Rp{item.amount}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return ''
                        }
                    })}
                    </div>
                    {pageWeek <= dataWeek.length - 1 ? <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img onClick={() => {
                            setPageWeek(pageWeek + 2)
                        }} src={Income} alt="" />
                    </div> : ''}
                    <p className="med ml-2 ml-sm-0 mb-sm-4 mb-3">This Month</p>
                    {pageMonth > 1 ?
                        <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img onClick={() => {
                            setPageMonth(pageMonth - 2)
                        }} src={Expense} alt="" />
                    </div> : ''}
                    <div className="mb-sm-0 mb-3">
                    {dataMonth.map((item, index) => {
                        if(index <= pageMonth && index > pageMonth - 2) {
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
                                    <p className={`bold ${item.receiver === data.name ? 'text-success' : 'text-danger'}`}>{item.receiver === data.name ? '+' : '-'}Rp{item.amount}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return ''
                        }
                    })}
                    </div>
                    {pageMonth <= dataMonth.length - 1 ? <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img onClick={() => {
                            setPageMonth(pageMonth + 2)
                        }} src={Income} alt="" />
                    </div> : ''}
                    <div className="d-flex d-sm-none justify-content-between">
                        <div style={{padding:'15px'}} className="history__filter mr-3 ml-3">
                            <img src={Expense} alt="expense" />
                        </div>
                        <div style={{padding:'15px'}} className="history__filter mr-3">
                            <img src={Income} alt="income" />
                        </div>
                        <div style={{padding:'16px 39px'}} className="history__filter mr-3">
                            <p className="text bold primary">Filter By Date</p>
                        </div>
                    </div>            
                    </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default History