import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRouteAdmin = ({ component, ...rest }) => {
  const { isLogin, token, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && isAdmin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouteAdmin;
