import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux' 
import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Admin extends React.Component{
    componentDidMount(){
        this.props.getUserList('genius')
    }
    render(){
        
        return(
            <div>

            </div>
        )
    }
}
export default Admin