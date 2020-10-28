import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHistoryByMonth, getHistoryByWeek, getHistoryByFilter } from '../../redux/action/history'
import Income from '../../icons/arrow-down.svg'
import Expense from '../../icons/arrow-up.svg'
import IncomeActive from '../../icons/income-active.svg'
import ExpenseActive from '../../icons/expense-active.svg'
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
    const [modeFilter, setModeFilter] = useState(false)
    const [pageWeek, setPageWeek] = useState(1)
    const [pageMonth, setPageMonth] = useState(1)
    const { data } = useSelector(state => state.user)
    const { dataWeek, dataMonth, dataFilter } = useSelector(state => state.history)
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
            const start = moment(startDate).format('YYYY-MM-DD')
            const end = moment(endDate).format('YYYY-MM-DD')
            dispatch(getHistoryByFilter(start, end, token))
            setModeFilter(true)
            setFilter(false)
        }
    }

    const incomeWeek = dataWeek.filter(item => item.receiver === data.name)
    const expenseWeek = dataWeek.filter(item => item.receiver !== data.name)

    const incomeMonth = dataMonth.filter(item => item.receiver === data.name)
    const expenseMonth = dataMonth.filter(item => item.receiver !== data.name)

    if(modeFilter) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5 px-0 px-md-5">
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
                        {!income && !expense ? dataWeek.map((item, index) => {
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
                        }) : ''}
                        {income || expense ? income ? incomeWeek.map((item, index) => {
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
                        }) : expenseWeek.map((item, index) => {
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
                        }) : ''}
                        </div>
                        <div className="d-flex">
                        {pageWeek > 1 ?
                            <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageWeek(pageWeek - 2)
                            }} src={Expense} alt="" />
                        </div> : ''}
                        {!income && !expense ? pageWeek <= dataWeek.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageWeek(pageWeek + 2)
                            }} src={Income} alt="" />
                        </div> : '' : ''}
                        {income || expense ? income ? pageWeek <= incomeWeek.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageWeek(pageWeek + 2)
                            }} src={Income} alt="" />
                        </div> : '' : pageWeek <= expenseWeek.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageWeek(pageWeek + 2)
                            }} src={Income} alt="" />
                        </div> : '': ''}
                        </div>
                        <p className="med ml-2 ml-sm-0 mb-sm-4 mb-3">This Month</p>
                        <div className="mb-sm-0 mb-3">
                        {!income && !expense ? dataMonth.map((item, index) => {
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
                        }): ''}
                        {income || expense ? income ? incomeMonth.map((item, index) => {
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
                        }) : expenseMonth.map((item, index) => {
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
                        }) : ''}
                        </div>
                        <div className="d-flex">
                        {pageMonth > 1 ?
                            <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageMonth(pageMonth - 2)
                            }} src={Expense} alt="" />
                        </div> : ''}
                        {!income && !expense ? pageMonth <= dataMonth.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageMonth(pageMonth + 2)
                            }} src={Income} alt="" />
                        </div> : '' : ''}
                        {income || expense ? income ? pageMonth <= incomeMonth.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageMonth(pageMonth + 2)
                            }} src={Income} alt="" />
                        </div> : '' : pageMonth <= expenseMonth.length - 1 ? <div style={{margin: 'auto', marginBottom: '30px', cursor: 'pointer'}}>
                            <img style={{transform: 'rotate(-90deg)'}} onClick={() => {
                                setPageMonth(pageMonth + 2)
                            }} src={Income} alt="" />
                        </div> : '': ''}
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
}

export default History