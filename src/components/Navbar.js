import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bell from '../icons/bell.svg'
import { logout } from '../redux/action/login'
import { userLogout } from '../redux/action/user'
import { useSelector, useDispatch } from 'react-redux'
import { imageURI } from '../utils'

const Bar = props => {
    const [sidebarActive, setSidebarActive] = useState(false)
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)
    
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

    return (
        <Navbar className="nav" bg="white" expand="lg">
            <Container fluid="md" className="py-5">
                <Nav.Item className="logo primary">Zwallet</Nav.Item>
                <Nav.Item className="d-none d-md-flex justify-content-between align-items-center">
                    <div className="mr-4">
                        <img src={imageURI+data.photo} style={{borderRadius: '10px'}} width="52px" height="52px" alt="profile" />
                    </div>
                    <div className="mr-4">
                        <div className="text bold">{data.name}</div>
                        <div className="small">+62 {splitPhone(data.phone)}</div>
                    </div>
                    <div className="mr-4 icon">
                        <img id="bell" src={bell} alt="bell" />
                    </div>
                </Nav.Item>
                <div className={`sidenav ${sidebarActive ? 'active' : ''}`}>
                    <div className="d-flex justify-content-center flex-column top">
                        <div className="image mr-4">
                            <img src={imageURI + data.photo} style={{borderRadius: '10px'}} width="70px" height="70px" alt="" />
                        </div>
                        <div className="info d-flex flex-column mb-5">
                            <span className="bold text">{data.name}</span>
                            <span className="med">+62 {splitPhone(data.phone)}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-column align-items-center justify-content-between bottom">
                        <div className="d-flex justify-content-between flex-column align-items-center">
                            <div className="px-4 my-5">
                                <span className="big primary bold"><Link to={{ pathname: `/dashboard`}}>Dashboard</Link></span>
                                <hr className="bg-primary"/>
                            </div>
                            <div className="py-4 my-5">
                                <span className="big primary bold"><Link to={{ pathname: `/transfer`}}>Transfer</Link></span>
                                <hr className="bg-primary"/>
                            </div>
                            <div className="px-4 my-5">
                                <span className="big primary bold"><Link to={{ pathname: `/topup`}}>Top Up</Link></span>
                                <hr className="bg-primary"/>
                            </div>
                            <div className="px-4 my-5">
                                <span className="big primary bold"><Link to={{ pathname: `/profile`}}>Profile</Link></span>
                                <hr className="bg-primary"/>
                            </div>
                        </div>
                        <div className="sidenav-logout align-self-center my-5">
                        <span  className="big primary bold">
                            <Link onClick={() => {
                                dispatch(logout())
                                dispatch(userLogout())
                            }} to={{ pathname: `/`}}>Logout
                            </Link></span>
                        </div>
                    </div>
                </div>
                <div onClick={() => setSidebarActive(!sidebarActive)} className="hamburger">
                    <div className="bg-primary"></div>
                    <div className="bg-primary"></div>
                    <div className="bg-primary"></div>
                </div>
            </Container>
        </Navbar>
    )
}

export default Bar