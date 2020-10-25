import React from 'react'

const AuthLogo = props => {
    const style = {
        left: {
            backgroundImage: `url("https://i.ibb.co/6vzkGP4/bg-login.png")`,
            flex: 1.25
        }
    }

    return (
        <div style={style.left} className="auth-left">
            <div className="logo text-white title">Zwallet</div>
            <div className="image">
                <img src="https://i.ibb.co/x8c2kFq/phone.png" alt="" />
            </div>
            <div className="bold text-white sponsor d-none d-sm-block">App that Covering Banking Needs.</div>
            <div className="desc-left med d-none d-sm-block">Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.
            </div>
        </div>
    )
}

export default AuthLogo