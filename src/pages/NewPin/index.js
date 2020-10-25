import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/action/user'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'

const NewPin = props => {
    const [buttonActive, setButtonActive] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { token } = useSelector(state => state.auth)
    const { messageEdit } = useSelector(state => state.user)
    const history = useHistory()

    const style = {
        buttonPrimary: {
            backgroundColor: "#6379F4",
            borderRadius: "12px",
            color: '#FFFFFF',
            width: '433px',
            border: 'none'
        },
        buttonGrey: {
            backgroundColor: "#DADADA",
            borderRadius: "12px",
            color: '#88888F',
            width: '433px',
            border: 'none'
        }
    }

    const onSubmit = data => {
        const pin = Object.values(data).join('')
        dispatch(editUser({ pin }, token))
        history.push('/profile')
        window.location.reload()
    }

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={4} />
                <div className="content-main">
                    <p className="text bold text-dark mb-4">Change PIN</p>
                    <p style={{width:'334px'}} className="text-muted mb-5">Type your new 6 digits security PIN to use in Zwallet.</p>
                    <form onSubmit={handleSubmit(onSubmit)} style={{padding: '15px'}} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="pin">
                        <input ref={register} name="1" type="text" maxLength="1" />
                        <input ref={register} name="2" type="text" maxLength="1" />
                        <input ref={register} name="3" type="text" maxLength="1" />
                        <input ref={register} name="4" type="text" maxLength="1" />
                        <input ref={register} name="5" type="text" maxLength="1" />
                        <input ref={register} onChange={() => setButtonActive(true)} name="6" type="text" maxLength="1" />
                    </div>
                    <p className="text-danger med">{messageEdit}</p>
                    <button style={buttonActive ? style.buttonPrimary : style.buttonGrey} type="submit" className="py-3">Continue</button>
                    </form>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default NewPin