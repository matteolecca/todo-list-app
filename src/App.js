import './App.css';
import Topbar from './containers/Topbar/Topbar';
import { connect } from 'react-redux';
import React, { lazy, useEffect, useRef } from 'react';
import { CHECK_AUTH, UNAUTH } from './redux/actions';
import { Redirect, Route, Switch, useLocation, } from 'react-router-dom'
import LoadingPage from './components/LoadingPage/LoadingPage';
import Popup from './components/Popup/Popup';
import { Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = lazy(() => import('./containers/Home/Home'))
const Login = lazy(() => import('./containers/Auth/Login/Login'))
const Signup = lazy(() => import('./containers/Auth/Signup/Signup'))
const PasswordReset = lazy(() => import('./containers/Auth/PasswordReset/PasswordReset'))
const UserPage = lazy(() => import('./containers/UserPage/UserPage'))


const App = (props) => {
  const { mode, checkAuth, checkingAuth, auth, unauth } = props
  const nodeRef = useRef(null)
  const location = useLocation()
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

  const LoginComponent = <Suspense fallback={suspenseComponent()}><Login /></Suspense>
  const SignupComponent = <Suspense fallback={suspenseComponent()}><Signup /></Suspense>
  const PasswordResetComponent = <Suspense fallback={suspenseComponent()}><PasswordReset /></Suspense>
  const UserPageComponent = <Suspense fallback={suspenseComponent()}><UserPage /></Suspense>

  return (
    <TransitionGroup>
      <CSSTransition nodeRef={nodeRef} exit={false} key={location.key} classNames="route" timeout={1000}>
        <div ref={nodeRef} className={mode}>
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
      </CSSTransition>
    </TransitionGroup>
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
    unauth: () => dispatch({ type: UNAUTH })
  }
}
export default connect(State, Actions)(App);
