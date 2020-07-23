import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
    //state check，check传递的属性类型
    static propTypes = {
        selectavatar: PropTypes.func
    }
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const avatarList = 'bear,bird,deer,dog,dou_per,fork,glass,horse,love,owl,person'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.png`),
                                text:v
                            }))
            const grideHeader = this.state.text ? 
                                                (<div>
                                                    <span>Selected Avatar</span>
                                                    <img style={{width:'20px',height:'20px'}} src={this.state.icon} alt=""/>
                                                </div>)
                                                :(<div>Please select avatar</div>)
        return (
            <div>
                <List renderHeader={()=>grideHeader}>
                    <Grid data={avatarList}
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.selectavatar(elm.text)
                        }}
                    />
                </List>
                
            </div>
        )
    }
}
export default AvatarSelector