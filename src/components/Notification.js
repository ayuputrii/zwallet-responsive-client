import React, { useEffect } from 'react'
import Income from '../icons/arrow-down.svg'
import Expense from '../icons/arrow-up.svg'
import { useSelector, useDispatch} from 'react-redux'
import { getHistoryToday, getHistoryByWeek } from '../redux/action/history'

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
                    if(index < 2) {
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
                    } else {
                        return ''
                    }
                })}
            </div>
            <div className="report">
                <p className="med date">This Week</p>
                {dataWeek.map((item, index) => {
                    if(index < 2) {
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
                    } else {
                        return ''
                    }
                })}
            </div>
        </div>
    )
}

export default Notification