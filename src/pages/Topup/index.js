import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { topup } from '../../redux/action/topup'
import './Topup.css'

const Topup = props => {
    const { token } = useSelector(state => state.auth)
    const { data } = useSelector(state => state.topup)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topup(token))
    }, [])
    
    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={3} />
                <div className="content-main bg-white">
                    <p className="text bold text-black">How To Top Up</p>
                    { !data ? '...Loading' : data.map((item, index) => {
                        return (
                            <div key={index} className="label d-flex">
                                <span className="text bold primary mr-3">{item.sequence}</span>
                                <p className="med desc">{item.title}</p>
                            </div>
                        )
                    }) }
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Topup