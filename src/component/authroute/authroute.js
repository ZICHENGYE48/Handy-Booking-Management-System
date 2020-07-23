import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import {connect} from 'react-redux'

//is auth check
@withRouter
@connect(
	null,
	{loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        //get user info
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                //filter user，code:1 is un log in，auto jump to login page
                if(res.data.code===0){
                    // console.log("authroute--->user/info-->data",res.data.data);
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login')
                }
                // console.log(res.data);
            }
        })
        //user state：is not auth 
    }
    render(){
        return null
    }
}
export default AuthRoute