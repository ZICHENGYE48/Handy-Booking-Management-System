// user.redux.js
import axios from 'axios'; // 用axios做请求
import {getRedirectPath} from '../utils';

// 定义常量
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'; // 注册成功
const TODO_ERRSHOW = 'TODO_ERRSHOW'; // 操作失败
const GET_USER_INFO = 'GET_USER_INFO';
const toDoFail = 'toDoFail';
const loginSuccess = 'loginSuccess';
const loginOutSuccess ='loginOutSuccess';

// state初始值
const initState = {
    redirectTo: '', // 完成之后跳到哪里
    username: '', // 账号
    pwd: '', // 密码
    pwdConfirm: '', // 确认密码
    type: '', // 用户类型
    msg: '', // 错误消息
    isLogin: false // 是否登录
}

export function user(state=initState,action) {
    switch (action.type) {
       case loginSuccess:
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload} 
       case REGISTER_SUCCESS:
            return {...state,...action.data, msg: '', redirectTo: '/login'}
       case TODO_ERRSHOW:
            return {...state,msg: action.msg}
       default:
            return state;
    }
}

function registerFail(msg) {
    return {
        msg,
        type: TODO_ERRSHOW
    }
}

function registerSuccess(data) {
    return {
        data,
        type: REGISTER_SUCCESS
    }
}
export function getUserInfo(userInfo) {
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }    
}
//login
export function login({username,pwd}) {
    if(!username || !pwd) {
        return toDoFail('账号密码不能为空')
    }
    return dispatch => {
        axios.post('/user/login',{username,pwd})
            .then(res => {
                if(res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                }else {
                    dispatch(toDoFail(res.data.msg))
                }
            })
    }
}
// register是一个action creator ，返回的action供user这个reducer使用，从而改变state
export function register({username,pwd,pwdConfirm,type}) {
    if(!username || !pwd) {
        registerFail('账号密码不能为空')
    }
    if(pwd !== pwdConfirm) {
        registerFail('两次密码不一致')
    }
    return dispatch => {
        axios.post('/user/register',{username,pwd,type})
            .then(res => {
                if(res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess(res.data.data))
                }else {
                    dispatch(registerFail(res.data.msg))
                }
            })
    }
}
export function loginOut() {
    return dispatch => {
        axios.get('/user/loginOut')
                .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginOutSuccess(res.data.data))
                } else {
                    dispatch(toDoFail(res.data.msg))
                }
            })
    }
}