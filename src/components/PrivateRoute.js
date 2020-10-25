import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/action/user'

const PrivateRoute = ({component, ...rest}) => {
    const { isLogin, token } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser(token))
    }, [])
    const Component = component
    return (
        <Route {...rest}
            render={(props)=> (
                isLogin ? (<Component {...props} />):(<Redirect to='/login' />)
            )}
        />
    )
}

export default PrivateRoute