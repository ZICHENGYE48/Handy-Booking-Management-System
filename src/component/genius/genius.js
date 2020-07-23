import React from 'react'
import UserCard from '../usercard/usercard'
import {getUserList} from '../../redux/chatuser.redux'
import {connect } from 'react-redux'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList('admin')
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}
export default Genius