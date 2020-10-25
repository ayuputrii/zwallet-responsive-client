import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ component, restricted, ...rest}) => {
    const { isLogin } = useSelector(state => state.auth)
    const Component = component
    return (
        <Route {...rest} 
        render={(props) =>
            isLogin && restricted ? (
              <Redirect to="/dashboard" />
            ) : (
              <Component {...props} />
            )
          }
        />
    )
}

export default PublicRoute