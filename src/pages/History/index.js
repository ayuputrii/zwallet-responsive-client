import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryByFilter, getHistory } from '../../redux/action/history'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import IncomeActive from '../../icons/income-active.svg'
import ExpenseActive from '../../icons/expense-active.svg'
import Back from '../../icons/arrow-left.svg'
import LogoTopup from '../../icons/logo.svg'
import { imageURI } from '../../utils'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import 'moment/locale/id'
import Notification from '../../components/Notification'
moment.locale('id')

const History = props => {
    const dispatch = useDispatch()
    const [expense, setExpense] = useState(false)
    const [income, setIncome] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [isFilter, setFilter] = useState(false)
    const [modeFilter, setModeFilter] = useState(false)
    const [page, setPage] = useState(3)
    const { data } = useSelector(state => state.user)
    const { dataFilter, dataAll } = useSelector(state => state.history)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getHistory(token))
    }, [])

    const onChange = dates => {
        console.log(dates)
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    const onSubmit = () => {
        if(startDate && endDate) {
            const start = moment(startDate).format('YYYY-MM-DD')
            const end = moment(endDate).format('YYYY-MM-DD')
            dispatch(getHistoryByFilter(start, end, token))
            setModeFilter(true)
            setFilter(false)
        }
    }

    const incomeAll = dataAll.filter(item => item.receiver === data.name || item.name)
    const expenseAll = dataAll.filter(item => item.receiver !== data.name && !item.name)

    if(modeFilter) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex pt-5 px-0 px-md-5">
                    <Menu />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4 ml-2">
                            <Link to="/dashboard">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">History</p>
                        </div>
                        <p style={{marginBottom: '30px'}} className="text bold d-none d-sm-inline">Transaction History</p>
                        <p className="text bold ml-2">Filter Date : </p>
                        <p className="text bold primary ml-2">{moment(startDate).format('LL')} - {moment(endDate).format('LL')}</p>
                        <div style={{height: '67vh', overflowY: 'scroll'}}>
                        {dataFilter.map((item, index) => {
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
                        })}
                        </div>
                        <div className="d-flex justify-content-center">
                            <div style={{padding: '10px 20px', position: 'absolute', bottom: '10px'}} className="history__filter active">
                                <p onClick={() => {setModeFilter(false)}} className="text bold text-white">Cancel Mode Filter</p>
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
                <Container className="d-flex px-0 px-md-5">
                    <Menu active={1} />
                    <div className={`pt-5 pt-sm-3 content-main ${isFilter ? 'onfilter' : ''}`}>
                        <div onClick={() => setFilter(false)} className="d-flex align-items-start d-sm-none mb-4 pl-2">
                            <Link to="/dashboard">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">History</p>
                        </div>
                        <div onClick={() => setFilter(false)}>
                        <p style={{marginBottom: '30px'}} className="text bold d-none d-sm-inline">Transaction History</p>
                        <p onClick={() => setFilter(false)} className="med ml-2 ml-sm-0 mb-sm-4 mb-3"></p>
                        <div className="mb-sm-0 mb-3">
                        {!income && !expense ? dataAll.map((item, index) => {
                            if(index <= page && index > page - 4 && !item.name) {
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
                            } else if(index <= page && index > page - 4 && item.name){
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
                                        <p className={`bold text-success`}>+Rp{item.amount}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return ''
                            }
                        }) : ''}
                        {income || expense ? income ? incomeAll.map((item, index) => {
                            if(index <= page && index > page - 4 && !item.name) {
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
                            } else if(index <= page && index > page - 4 && item.name){
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
                                        <p className={`bold text-success`}>+Rp{item.amount}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return ''
                            }
                        }) : expenseAll.map((item, index) => {
                            if(index <= page && index > page - 4 && !item.name) {
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
                        }) : ''}
                        </div>
                        <div className="d-flex">
                        {page > 3 ?
                            <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPage(page - 4)
                            }} src={Expense} alt="" />
                        </div> : ''}
                        {!income && !expense ? page <= dataAll.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPage(page + 4)
                            }} src={Income} alt="" />
                        </div> : '' : ''}
                        {income || expense ? income ? page <= incomeAll.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPage(page + 4)
                            }} src={Income} alt="" />
                        </div> : '' : page <= expenseAll.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPage(page + 4)
                            }} src={Income} alt="" />
                        </div> : '': ''}
                        </div>
                        </div>
                        <div className="d-flex d-sm-none justify-content-between">
                            <div onClick={() => {setExpense(!expense); setIncome(false)}} style={{padding:'15px'}} className={`history__filter ${expense ? 'active' : ''} mr-3 ml-3`}>
                                <img src={expense ? ExpenseActive : Expense} alt="expense" />
                            </div>
                            <div onClick={() => {setIncome(!income); setExpense(false)}} style={{padding:'15px'}} className={`history__filter ${income ? 'active' : ''} mr-3 ml-3`}>
                                <img src={income ? IncomeActive : Income} alt="income" />
                            </div>
                            <div style={{padding:'16px 39px'}} className="history__filter mr-3">
                                <p onClick={() => setFilter(true)} className="text bold primary">Filter By Date</p>
                            </div>
                        </div>
                        <Notification />
                    </div>
                    <div className={`d-sm-none custom__modal ${isFilter ? 'active' : ''} d-flex flex-column`}>
                            <p className="text bold text-center mt-0">Filter By Date</p>
                            <div className="align-self-center">
                            <DatePicker
                                selected={startDate}
                                onChange={onChange}
                                startDate={startDate}
                                endDate={endDate}
                                selectsRange
                                inline
                            />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p>From</p>
                                    <p className="bold">{moment(startDate).format('LL')}</p>
                                </div>
                                <div>
                                    <p>To</p>
                                    <p className="bold">{moment(endDate).format('LL')}</p>
                                </div>
                            </div>
                            <div className="confirm">
                                <button onClick={onSubmit} className="btn-primary">Apply</button>
                            </div>
                        </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default History