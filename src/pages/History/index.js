import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryByMonth, getHistoryByWeek } from '../../redux/action/history'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import Back from '../../icons/arrow-left.svg'
import { imageURI } from '../../utils'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')

const History = props => {
    const dispatch = useDispatch()
    const [expense, setExpense] = useState(false)
    const [income, setIncome] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [isFilter, setFilter] = useState(false)
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

    const onChange = dates => {
        console.log(dates)
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    const onSubmit = () => {
        if(startDate && endDate) {
            console.log(moment(startDate).format('YYYY-MM-DD'))
        }
    }

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
                    <div className="d-flex">
                    {pageWeek > 1 ?
                        <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                            setPageWeek(pageWeek - 2)
                        }} src={Expense} alt="" />
                    </div> : ''}
                    {pageWeek <= dataWeek.length - 1 ? <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                            setPageWeek(pageWeek + 2)
                        }} src={Income} alt="" />
                    </div> : ''}
                    </div>
                    <p className="med ml-2 ml-sm-0 mb-sm-4 mb-3">This Month</p>
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
                    <div className="d-flex">
                    {pageMonth > 1 ?
                        <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                            setPageMonth(pageMonth - 2)
                        }} src={Expense} alt="" />
                    </div> : ''}
                    {pageMonth <= dataMonth.length - 1 ? <div className="d-none d-sm-block" style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                        <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                            setPageMonth(pageMonth + 2)
                        }} src={Income} alt="" />
                    </div> : ''}
                    </div>
                    <div className="d-flex d-sm-none justify-content-between">
                        <div style={{padding:'15px'}} className="history__filter mr-3 ml-3">
                            <img src={Expense} alt="expense" />
                        </div>
                        <div style={{padding:'15px'}} className="history__filter mr-3">
                            <img src={Income} alt="income" />
                        </div>
                        <div style={{padding:'16px 39px'}} className="history__filter mr-3">
                            <p onClick={() => setFilter(true)} className="text bold primary">Filter By Date</p>
                        </div>
                    </div>
                    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={isFilter} onHide={() => setFilter(false)}>
                    <Modal.Body>
                        <p className="text bold text-center mt-0">Filter By Date</p>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>From</p>
                                <p className="bold">{moment(startDate).format('LL', 'id')}</p>
                            </div>
                            <div>
                                <p>To</p>
                                <p className="bold">{moment(endDate).format('LL')}</p>
                            </div>
                        </div>
                        <div className="confirm mt-5">
                            <button onClick={onSubmit} className="btn-primary">Apply</button>
                        </div>
                    </Modal.Body>
                    </Modal>
                    </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default History