import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { search, searchByName, getUserTransfer } from '../../redux/action/search'
import { Link } from 'react-router-dom'
import SearchIcon from '../../icons/search.svg'
import Back from '../../icons/arrow-left.svg'
import { imageURI } from '../../utils'
import './Search.css'
import Notification from '../../components/Notification'

const Search = props => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.search)
    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(search(token))
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

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5 px-0 px-md-5">
                <Menu active={2} />
                <div className="content-main search-content">
                    <div className="d-flex align-items-start d-sm-none px-3 mb-4">
                        <Link to="/dashboard">
                            <img className="mr-3" src={Back} alt="back" />
                        </Link>
                        <p style={{fontSize: '20px'}} className="bold">Find Receiver</p>
                    </div>
                    <div className="title text bold d-none d-sm-block">
                        Search Receiver
                    </div>
                    <div className="input px-3 px-sm-0">
                        <img className="search" src={SearchIcon} alt="" />
                        <input name="q" type="search" onChange={(e) => dispatch(searchByName(token, e.target.value))} autoComplete="off" placeholder="Search receiver here"/>
                    </div>
                    <div className="d-flex flex-column ml-3 d-sm-none">
                        <p style={{fontSize: '20px'}} className="bold">All Contacts</p>
                        <p style={{color: '#8F8F8F'}} className="small">{data.filter(item => item.phone).length} Contact Found</p>
                    </div>
                    <div style={{overflowY: 'scroll'}} className="list">
                        {data.map((item, index) => {
                            if(item.phone) {
                                return (
                                    <Link onClick={() => dispatch(getUserTransfer(token, item.phone))} to={{
                                        pathname: `/transfer/input`
                                    }} key={index} className="items label">
                                        <div className="avatar mr-4">
                                            <img style={{borderRadius: '10px'}} width="70px" height="70px" src={imageURI + item.photo} alt=""/>
                                        </div>
                                        <div className="info">
                                            <p className="name text bold">{item.name}</p>
                                            <div className="text-muted med">+62 {splitPhone(item.phone)}</div>
                                        </div>
                                    </Link>
                                )
                            } else {
                                return ''
                            }
                        })}
                    </div>
                    <Notification />
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Search