import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/fonts.css';
import './css/colors.css';
import './css/datepicker.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import projectsReducer from './redux/reducers/projects-reducer'
import currentTodoReducer from './redux/reducers/current-todo-reducer'
import sidebarReducer from './redux/reducers/sidebar-status-reducer'
import modalTriggerReducer from './redux/reducers/modals-trigger'
import authReducer from './redux/reducers/auth-reducer'
import pwdResetReducer from './redux/reducers/password-reset-reducer'
import appStateReducer from './redux/reducers/app-state-reducer'
import { projectListener, authListener } from './redux/saga/index'
import { BrowserRouter } from 'react-router-dom'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    projectsReducer : projectsReducer,
    currentTodoReducer : currentTodoReducer,
    sidebarReducer : sidebarReducer,
    modalTriggerReducer : modalTriggerReducer,
    authReducer : authReducer,
    pwdResetReducer : pwdResetReducer,
    appStateReducer : appStateReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(projectListener)
sagaMiddleware.run(authListener)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
