import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { search, searchByName, getUserTransfer } from '../../redux/action/search'
import { Link } from 'react-router-dom'
import SearchIcon from '../../icons/search.svg'
import { imageURI } from '../../utils'
import './Search.css'

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
            <Container className="d-flex mt-5">
                <Menu active={2} />
                <div style={{height:'80vh'}} className="content-main">
                    <div className="title text bold">
                        Search Receiver
                    </div>
                    <div className="input">
                        <img className="search" src={SearchIcon} alt="" />
                        <input name="q" type="search" onChange={(e) => dispatch(searchByName(token, e.target.value))} autoComplete="off" placeholder="Search receiver here"/>
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
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Search