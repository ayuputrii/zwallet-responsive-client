import React, { useEffect } from 'react'
import Income from '../icons/arrow-down.svg'
import Expense from '../icons/arrow-up.svg'
import { useSelector, useDispatch} from 'react-redux'
import { getHistoryToday, getHistoryByWeek } from '../redux/action/history'
import LogoTopup from '../icons/logo.svg'

const Notification = (props) => {
    const dispatch = useDispatch()
    const { isNotification, data } = useSelector(state => state.user)
    const { token } = useSelector(state => state.auth)
    const { dataToday, dataWeek } = useSelector(state => state.history)

    useEffect(() => {
        dispatch(getHistoryToday(token))
        dispatch(getHistoryByWeek(token))
    }, [])

    return (
        <div className={`content-notification ${isNotification ? 'visible' : ''}`}>
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
    )
}

export default Notification