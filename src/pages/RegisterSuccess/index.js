import React from 'react'
import { Link } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import Check from '../../icons/check.svg'

const RegisterSuccess = props => {
    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1
        }
    }   

    return (
        <div className="d-flex flex-column flex-lg-row">
            <AuthLogo />
            <div style={style.right} className="auth right">
                <div className="start status bg-success mx-auto mx-sm-1">
                    <img src={Check} alt="" />
                </div>
                <div className="information big bold start d-none d-sm-block">
                    <span className="info">Your PIN Was Successfully Created</span>
                </div>
                <div className="information big bold start d-block d-sm-none text-center item">
                    <span className="info">PIN Successfully Created</span>
                </div>
                <div className="desc-right">
                    <p className="text desc">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                </div>
                <div className="button">
                    <Link to="/login"><button className="auth-primary-btn mw-100">Login Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess