import './App.css';
import Topbar from './containers/Topbar/Topbar';
import { connect } from 'react-redux';
import React, { lazy, useEffect } from 'react';
import { CHECK_AUTH, UNAUTH } from './redux/actions';
import { Redirect, Route, Switch, } from 'react-router-dom'
import LoadingPage from './components/LoadingPage/LoadingPage';
import Popup from './components/Popup/Popup';
import { Suspense } from 'react';

const Home = lazy(() => import('./containers/Home/Home'))
const Login = lazy(() => import('./containers/Auth/Login/Login'))
const Signup = lazy(() => import('./containers/Auth/Signup/Signup'))
const PasswordReset = lazy(() => import('./containers/Auth/PasswordReset/PasswordReset'))
const UserPage = lazy(() => import('./containers/UserPage/UserPage'))


const App = (props) => {
  const { mode, checkAuth, checkingAuth, auth, unauth } = props


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) { checkAuth(token) }
    else { unauth() }
  }, [checkAuth, unauth])

  const suspenseComponent = () => <LoadingPage />

  const HomeComponent =
    <Suspense fallback={suspenseComponent()}><React.Fragment>
      <Home />
      <Topbar />
    </React.Fragment> </Suspense>

  const LoginComponent =<Suspense fallback={suspenseComponent()}><Login /></Suspense>
  const SignupComponent =<Suspense fallback={suspenseComponent()}><Signup /></Suspense>
  const PasswordResetComponent =<Suspense fallback={suspenseComponent()}><PasswordReset /></Suspense>
  const UserPageComponent =<Suspense fallback={suspenseComponent()}><UserPage /></Suspense>

return (
  <div className={mode}>
        <Switch>
          <Route exact path="/login">
            {
              auth ? <Redirect to="/" />
                : LoginComponent
            }
          </Route>
          <Route exact path="/signup">
            {
              auth ? <Redirect to="/" />
                : SignupComponent
            }
          </Route>
          <Route exact path="/account">
            {
              checkingAuth ? <LoadingPage />
                :
                auth ?
                UserPageComponent
                  : <Redirect to="/login" />
            }
          </Route>
          <Route exact path="/resetpwd">
            {
              auth ? <Redirect to="/" />
                : PasswordResetComponent
            }
          </Route>
          <Route exact path="/">
            {
              checkingAuth ? <LoadingPage />
                :
                auth ?
                  HomeComponent
                  : <Redirect to="/login" />
            }
          </Route>
        </Switch>
        <Popup />
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
        checkAuth: (token) => dispatch({type: CHECK_AUTH, token: token }),
    unauth: () => dispatch({type: UNAUTH })
  }
}
export default connect(State, Actions)(App);
