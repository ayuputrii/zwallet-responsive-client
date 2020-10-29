import React from "react";
import { Redirect } from "react-router-dom";
import AuthLogo from "../../components/AuthLogo";
import { useForm } from "react-hook-form";
import { pinFilled, signup } from "../../redux/action/register";
import { useDispatch, useSelector } from "react-redux";

const RegisterPin = (props) => {
  const { register, handleSubmit } = useForm();
  const { data, isSuccess } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const style = {
    right: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },
  };

  const onSubmit = (dataPin) => {
    dispatch(pinFilled({ pin: Object.values(dataPin).join("") }));
    if (data.pin) {
      dispatch(signup(data));
    }
  };

  if (isSuccess) {
    return <Redirect to="/register/success" />;
  } else {
    return (
      <div className="d-flex flex-column flex-lg-row">
        <AuthLogo />
        <div style={style.right} className="auth right">
          <div className="item bold big start d-none d-sm-block">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="item text-center bold big start d-block d-sm-none">
            Create Security PIN
          </div>
          <div className="item text desc-right d-none d-sm-block">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <div className="item text-center text desc-right d-block d-sm-none">
            Create a PIN that’s contain 6 digits number for security purpose in
            Zwallet.
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pin" onSubmit={handleSubmit(onSubmit)}>
              <input ref={register} name="1" type="number" maxLength="1" />
              <input ref={register} name="2" type="number" maxLength="1" />
              <input ref={register} name="3" type="number" maxLength="1" />
              <input ref={register} name="4" type="number" maxLength="1" />
              <input ref={register} name="5" type="number" maxLength="1" />
              <input ref={register} name="6" type="number" maxLength="1" />
            </div>
            <div className="button">
              <button type="submit" className="auth-primary-btn">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default RegisterPin;
