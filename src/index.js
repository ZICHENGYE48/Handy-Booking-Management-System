

import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'
import AuthRoute from './component/authroute/authroute'
import AdminInfo from './container/admininfo/admininfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import './config'
import Layout from './Layout'

//reducers中包含多个reducer
//compose参数，中用来合并多个参数的N
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    //调用Chrome 时redux调试工具
    window.devToolsExtension?window.devToolsExtension():f=>f
))

//admin genius me
ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/admininfo' component={AdminInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <App />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,document.getElementById('root')
)

