import React from 'react'
import Transfer from '../icons/menu/arrow-up.svg'
import Topup from '../icons/menu/plus.svg'
import Profile from '../icons/menu/user.svg'
import Logout from '../icons/menu/log-out.svg'
import TransferActive from '../icons/menu-active/arrow-up.svg'
import TopupActive from '../icons/menu-active/plus.svg'
import ProfileActive from '../icons/menu-active/user.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/action/login'
import { userLogout } from '../redux/action/user'
import {Col} from 'react-bootstrap';

const MenuAdm = props => {
    const dispatch = useDispatch()
    return (
        <Col lg={3} md={12} xs={12}>
        <div className="content-menu d-none d-md-flex justify-content-between flex-column">
            <div className="menu d-flex flex-column justify-content-between">
                <div className={`item ${props.active === 1 ? 'activated bold primary' : ''}`}>
                    <img src={props.active === 1 ? ProfileActive : Profile} alt=""/>
                    <Link to={{
                        pathname: `/admin/user`
                    }} className="text ml-3">User</Link>
                </div>
                <div className={`item ${props.active === 2 ? 'activated bold primary' : ''}`}>
                    <img src={props.active === 2 ? TransferActive : Transfer} alt=""/>
                    <Link to={{
                        pathname: `/admin/transfer`
                    }} className="text ml-3">Transfer</Link>
                </div>
                <div className={`item ${props.active === 3 ? 'activated bold primary' : ''}`}>
                    <img src={props.active === 3 ? TopupActive : Topup} alt=""/>
                    <Link to={{
                        pathname: `/admin/topup`
                    }} className="text ml-3">Top Up</Link>
                </div>
            </div>
            <div className="item logout">
                <img src={Logout} alt=""/>
                <Link onClick={() => {
                     dispatch(logout())
                     dispatch(userLogout())
                }} to="/">
                    <span className="text ml-3">Logout</span>
                </Link>
            </div>
        </div>
         </Col>
    )
}

export default MenuAdm