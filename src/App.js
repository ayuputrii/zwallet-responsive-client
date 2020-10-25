import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor } from './redux/store'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import RegisterPin from './pages/RegisterPin';
import RegisterSuccess from './pages/RegisterSuccess';
import Search from './pages/Search'
import Topup from './pages/Topup';
import Profile from './pages/Profile';
import Input from './pages/Input';
import Confirm from './pages/Confirm';
import Status from './pages/Status';
import Info from './pages/Info';
import ManagePhone from './pages/Phone';
import Password from './pages/Password';
import Pin from './pages/Pin';
import NewPin from './pages/NewPin';
import NotFound from './pages/NotFound'
import History from './pages/History';

const App = (props) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" restricted={false} component={Landing} />
          <PublicRoute path="/login" restricted component={Login} />
          <PublicRoute exact path="/register" restricted component={Register} />
          <PublicRoute exact path="/register/pin" restricted component={RegisterPin} />
          <PublicRoute exact path="/register/success" restricted component={RegisterSuccess} />
          <PrivateRoute exact path="/dashboard" component={Home} />
          <PrivateRoute exact path="/dashboard/history" component={History} />
          <PrivateRoute exact path="/transfer" component={Search} />
          <PrivateRoute exact path="/transfer/input" component={Input} />
          <PrivateRoute exact path="/transfer/confirm" component={Confirm} />
          <PrivateRoute exact path="/transfer/status" component={Status} />
          <PrivateRoute path="/topup" component={Topup} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/info" component={Info} />
          <PrivateRoute exact path="/profile/info/phone" component={ManagePhone} />
          <PrivateRoute exact path="/profile/password" component={Password} />
          <PrivateRoute exact path="/profile/pin" component={Pin} />
          <PrivateRoute exact path="/profile/pin/new" component={NewPin} />
          <PublicRoute component={NotFound} />
        </Switch>
      </Router>
    </PersistGate>
  )
}

export default App;
