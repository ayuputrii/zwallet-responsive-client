import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import { useForm } from 'react-hook-form'
import { pinFilled, signup } from '../../redux/action/register'
import { useDispatch, useSelector } from 'react-redux'

const RegisterPin = props => {
    const { register, handleSubmit } = useForm()
    const { data, isSuccess } = useSelector(state => state.register)
    const dispatch = useDispatch()

    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1,
            padding: "120px 150px 150px 40px"
        }
    }

    const onSubmit = (dataPin) => {
        dispatch(pinFilled({ pin: Object.values(dataPin).join('')}))
        if(data.pin) {
            dispatch(signup(data))
        }
    }
    

    if(isSuccess) {
        return <Redirect to="/register/success" />
    } else {
        return (
            <div className="d-flex flex-column flex-lg-row">
                <AuthLogo />
                <div style={style.right} className="right">
                    <div className="bold big start">Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </div>
                    <div className="text desc-right">
                        Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pin" onSubmit={handleSubmit(onSubmit)}>
                            <input ref={register} name="1" type="text" maxLength="1" />
                            <input ref={register} name="2" type="text" maxLength="1" />
                            <input ref={register} name="3" type="text" maxLength="1" />
                            <input ref={register} name="4" type="text" maxLength="1" />
                            <input ref={register} name="5" type="text" maxLength="1" />
                            <input ref={register} name="6" type="text" maxLength="1" />
                        </div>
                        <div className="button">
                            <button type="submit" className='auth-primary-btn'>Confirm</button>
                        </div>
                    </form>
                    <div className="sign-up">
                        <p className="text">Already have an account? Let’s <Link to="/auth/login" className="bold primary">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPin