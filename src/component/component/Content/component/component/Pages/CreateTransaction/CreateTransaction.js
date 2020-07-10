import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Input from '../../Body/Input/Input';
import Flex from '../../../../../../Flex';
import SubmitButton from '../../../../../../Button/SubmitButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
`
const Body = styled(Flex)`
  padding:${(props)=>`${props.theme.gutter.lg} 0`};
  align-items: center;
  min-height: 550px;
  flex-direction: column;
`

class CreateTransaction extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name:{
        value:"",
        errorMsg: ""
      },
      telephone:{
        value:"",
        errorMsg: ""
      },
      name2:{
        value:"",
        errorMsg: ""
      },
      telephone2:{
        value:"",
        errorMsg: ""
      },
      address:{
        value:"",
        errorMsg: ""
      },
      time:{
        value:"",
        errorMsg: ""
      }, 
    }
    this.HandleOnChange = this.HandleOnChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  Validator = () =>{
    const { name, telephone, name2, telephone2, address, time } = this.state;
    const newState = {...this.state};

    if(name.value.trim() ===""){
      newState.name.errorMsg = "Name can not be null";
      this.setState(newState);
    }else{
      newState.name.errorMsg = "";
      this.setState(newState);
    }

    if(telephone.value.trim() ===""){
      newState.telephone.errorMsg = "Telephone can not be null";
      this.setState(newState);
    }else{
      newState.telephone.errorMsg = "";
      this.setState(newState);
    }

    if(name2.value.trim() ===""){
      newState.name2.errorMsg = "Name can not be null";
      this.setState(newState);
    }else{
      newState.name2.errorMsg = "";
      this.setState(newState);
    }

    if(telephone2.value.trim() ===""){
      newState.telephone2.errorMsg = "Telephone can not be null";
      this.setState(newState);
    }else{
      newState.telephone2.errorMsg = "";
      this.setState(newState);
    }

    if(address.value.trim() ===""){
      newState.address.errorMsg = "Address can not be null";
      this.setState(newState);
    }else{
      newState.address.errorMsg = "";
      this.setState(newState);
    }

    if(time.value.trim() ===""){
      newState.time.errorMsg = "Time can not be null";
      this.setState(newState);
    }else{
      newState.time.errorMsg = "";
      this.setState(newState);
    }
  }

  HandleSubmit = (e) =>{
    const { name, telephone, name2, telephone2, address, time } = this.state;
    this.Validator();
    if(name.errorMsg !=="" || telephone.errorMsg !=="" || name2.errorMsg !==""  || telephone2.errorMsg !=="" || address.errorMsg !=="" || time.errorMsg !==""){
      e.preventDefault();
    }
  }

  HandleOnChange = (newValue, id) =>{
    const newState = {...this.state};
    newState[id].value = newValue;
    this.setState(newState);
  }

  render() {
    const { name, telephone, name2, telephone2, address, time } = this.state;
    return(
      <Wrapper>
          <form>
          <Description Title="CreateTransaction" SubText="CreateTransaction subtext"/>
          <Body>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="name" errorMsg={name.errorMsg} placeholder = "Please enter user name">Enter user name:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone" errorMsg={telephone.errorMsg} placeholder = "Please enter user telephone">Enter user telephone:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="name2" errorMsg={name2.errorMsg} placeholder = "Please enter tradie name">Enter tradie name:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone2" errorMsg={telephone2.errorMsg} placeholder = "Please enter tradie telephone">Enter tradie telephone:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="address" errorMsg={address.errorMsg} placeholder = "Please enter service address">Enter service address:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="time" type="time" errorMsg={time.errorMsg}>Select service time:	&nbsp;</Input>
            <Link to='/create-transaction/result'>
             <SubmitButton onClick={this.HandleSubmit}>Submit</SubmitButton>
            </Link>
          </Body>
          </form>
      </Wrapper>
  )
  }
}

export default CreateTransaction;
