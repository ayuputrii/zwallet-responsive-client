import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { checkPin, getUser } from '../../redux/action/user'
import { useForm } from 'react-hook-form'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'
import Back from '../../icons/arrow-left.svg'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Notification from '../../components/Notification'

const Pin = props => {
    const [buttonActive, setButtonActive] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { token } = useSelector(state => state.auth)
    const { pinCheck, checkedPin } = useSelector(state => state.user)

    const style = {
        buttonPrimary: {
            backgroundColor: "#6379F4",
            borderRadius: "12px",
            color: '#FFFFFF',
            border: 'none'
        },
        buttonGrey: {
            backgroundColor: "#DADADA",
            borderRadius: "12px",
            color: '#88888F',
            border: 'none'
        }
    }

    const onSubmit = data => {
        console.log(data)
        const pin = Object.values(data).join('')
        dispatch(checkPin({ pin }, token))  
    }

    if(!checkedPin) {
        return (
            <Fragment>
                <Navbar />
                <Container className="d-flex mt-5">
                    <Menu active={4} />
                    <div className="content-main">
                        <div className="d-flex align-items-start d-sm-none mb-4">
                            <Link to="/profile">
                                <img className="mr-3" src={Back} alt="back" />
                            </Link>
                            <p style={{fontSize: '20px'}} className="bold">Change PIN</p>
                        </div>
                        <p className="text bold text-dark mb-4 d-none d-sm-inline">Change PIN</p>
                        <p style={{width:'334px'}} className="text-muted mb-5">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center p-0 p-sm-3">
                        <div className="pin">
                            <input ref={register} name="1" type="text" maxLength="1" />
                            <input ref={register} name="2" type="text" maxLength="1" />
                            <input ref={register} name="3" type="text" maxLength="1" />
                            <input ref={register} name="4" type="text" maxLength="1" />
                            <input ref={register} name="5" type="text" maxLength="1" />
                            <input ref={register} onChange={() => setButtonActive(true)} name="6" type="text" maxLength="1" />
                        </div>
                        <p className="text-danger med">{pinCheck}</p>
                        <button style={buttonActive ? style.buttonPrimary : style.buttonGrey} type="submit" className="py-3 btn-phone">Continue</button>
                        </form>
                        <Notification />
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    } else {
        return (
            <Redirect to="/profile/pin/new" />
        )
    }


}

export default Pin

