import React, {Component} from 'react'
import {List,InputItem,WingBlank,WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

@connect (
    state => state,
    {login}
)

  class Login extends Component {
    handleLogin() {
        this.props.login(this.state)
    }
      render() {
          return (
              <div className="page-login">
                  <Logo />
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <List>
                      <InputItem>Username</InputItem>
                      <InputItem>Password</InputItem>
                  </List>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WhiteSpace></WhiteSpace>
                  <WingBlank>
                      <Button type="primary">登录</Button>
                      <WhiteSpace></WhiteSpace>
                      <Button onClick={this.handleGoRegister.bind(this)} type="primary">去注册</Button>
                  </WingBlank>
              </div>
          )
      }
      /*
      *     去注册
      * */
      handleGoRegister() {
          this.props.history.push('/register');
      }
  }

  export default Login