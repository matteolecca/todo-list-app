import './App.css';
import Home from './containers/Home/Home';
import Topbar from './containers/Topbar/Topbar';
import { connect } from 'react-redux';
import Login from './containers/Auth/Login/Login';
import React, { useEffect } from 'react';
import { CHECK_AUTH, UNAUTH } from './redux/actions';
import { Redirect, Route, Switch,  } from 'react-router-dom'
import LoadingPage from './components/LoadingPage/LoadingPage';
import Signup from './containers/Auth/Signup/Signup';
import PasswordReset from './containers/Auth/PasswordReset/PasswordReset';
import UserPage from './containers/UserPage/UserPage';
import Popup from './components/Popup/Popup';

const App = (props) => {
  const { mode, checkAuth, checkingAuth, auth, unauth } = props

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {checkAuth(token)}
    else {unauth() }
  }, [checkAuth, unauth])

  return (
    <div className={mode}>
      <Switch>
        <Route exact path="/login">
          {
            auth ? <Redirect to="/" />
              : <Login />
          }
        </Route>
        <Route exact path="/signup">
          {
            auth ? <Redirect to="/" />
              : <Signup />
          }
        </Route>
        <Route exact path="/account">
          {
          checkingAuth ? <LoadingPage />
            :
            auth ? 
            <React.Fragment>
              <UserPage />
            </React.Fragment>
              : <Redirect to="/login" />
          }
        </Route>
        <Route exact path="/resetpwd">
          {
            auth ? <Redirect to="/" />
              : <PasswordReset />
          }
        </Route>
        <Route exact path="/">
          {
          checkingAuth ? <LoadingPage />
            :
            auth ? 
            <React.Fragment>
              <Home />
              <Topbar />
            </React.Fragment>
              : <Redirect to="/login" />
          }
        </Route>
        
      </Switch>
     <Popup/> 
    </div>
  );
}

const State = state => {
  return {
    mode: state.sidebarReducer.mode,
    checkingAuth: state.authReducer.checking,
    auth: state.authReducer.auth,
   
  }
}
const Actions = dispatch => {
  return {
    checkAuth: (token) => dispatch({ type: CHECK_AUTH, token: token }),
    unauth : ()=> dispatch({type : UNAUTH})
  }
}
export default connect(State, Actions)(App);
