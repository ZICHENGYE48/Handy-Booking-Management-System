import {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'  // 由于checkLogin 不是路由，要想用跳转的话得引入withRouter

@withRouter
class CheckLogin extends Component {
    componentDidMount() {
        const filterCheck = ['/login', 'register']
        const pathname = this.props.location.pathname;

        // 登录注册两个页面不需要判断
        if(filterCheck.indexOf(pathname) > -1) {
            return;
        }
         // 在这里请求相关接口判断用户是否完成登录
        axios.get('/user/info')
            .then(res => {
                console.log(res);
                if(res.status === 200) {
                    if(res.data.code === 0) {
                        this.props.getUserInfo(res.data.data)
                    }else {
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render() {
        return null;
    }
}

export default CheckLogin;