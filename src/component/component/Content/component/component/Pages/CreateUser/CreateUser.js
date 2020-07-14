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

class CreateUser extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
      address:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
      telephone:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
      email:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
      password:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
      password2:{
        value:"",
        validationFailed:"",
        errorMsg: ""
      },
    }
    this.HandleOnChange = this.HandleOnChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  Validator = () =>{
    const { name, address, telephone, email, password, password2 } = this.state;
    const newState = {...this.state};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    if(name.value.trim() ===""){
      newState.name.errorMsg = "Name can not be null";
      newState.name.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.name.errorMsg = "";
      newState.name.validationFailed = "";
      this.setState(newState);
    }

    if(address.value.trim() ===""){
      newState.address.errorMsg = "Address can not be null";
      newState.address.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.address.errorMsg = "";
      newState.address.validationFailed = "";
      this.setState(newState);
    }

    if(telephone.value.trim() ===""){
      newState.telephone.errorMsg = "Telephone can not be null";
      newState.telephone.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.telephone.errorMsg = "";
      newState.telephone.validationFailed = "";
      this.setState(newState);
    }

    if(email.value.trim() ===""){
      newState.email.errorMsg = "Email can not be null";
      newState.email.validationFailed = "true";
      this.setState(newState);
    }else if (!regex.test(email.value.toLowerCase())){
      newState.email.errorMsg = "Email format is wrong";
      newState.email.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.email.errorMsg = "";
      newState.email.validationFailed = "";
      this.setState(newState);
    }

    if(password.value.trim() ===""){
      newState.password.errorMsg = "Password can not be null";
      newState.password.validationFailed = "true";
      this.setState(newState);
    }else if(password.value.length < 3){
      newState.password.errorMsg = "Password must be at least 3 characters";
      newState.password.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.password.errorMsg = "";
      newState.password.validationFailed = "";
      this.setState(newState);
    }

    if(password2.value.trim() ===""){
      newState.password2.errorMsg = "Password can not be null";
      newState.password2.validationFailed = "true";
      this.setState(newState);
    }else if(password2.value.length < 3){
      newState.password2.errorMsg = "Password must be at least 3 characters";
      newState.password2.validationFailed = "true";
      this.setState(newState);
    }else{
      newState.password2.errorMsg = "";
      newState.password2.validationFailed = "";
      this.setState(newState);
    }

    if(password.value !== password2.value){
      newState.password2.errorMsg = "The password does not match";
      newState.password2.validationFailed = "true";
      this.setState(newState);
    }
    
  }

  HandleSubmit = (e) =>{
    const { name, address, telephone, email, password, password2 } = this.state;
    this.Validator();
    if(name.errorMsg !=="" || address.errorMsg !=="" || telephone.errorMsg !==""  || email.errorMsg !=="" || password.errorMsg !=="" || password2.errorMsg !==""){
      e.preventDefault();
    }
  }

  HandleOnChange = (newValue, id) =>{
    const newState = {...this.state};
    newState[id].value = newValue;
    this.setState(newState);
  }

  render() {
    const { name, address, telephone, email, password, password2 } = this.state;
    return(
      <Wrapper>
          <form>
          <Description Title="CreateUser" SubText="CreateUser subtext"/>
          <Body>
            <Input validationFailed={name.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="name" errorMsg={name.errorMsg} placeholder = "Please enter account name">Enter name:	&nbsp;</Input>
            <Input validationFailed={address.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="address" errorMsg={address.errorMsg} placeholder = "Please enter address">Enter address:	&nbsp;</Input>
            <Input validationFailed={telephone.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone" errorMsg={telephone.errorMsg} placeholder = "Please enter telephone">Enter telephone:	&nbsp;</Input>
            <Input validationFailed={email.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="email" type="email" errorMsg={email.errorMsg} placeholder = "Please enter email">Enter email:	&nbsp;</Input>
            <Input validationFailed={password.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="password" type="password" errorMsg={password.errorMsg} placeholder = "Please enter account password">Enter password:	&nbsp;</Input>
            <Input validationFailed={password2.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="password2" type="password" errorMsg={password2.errorMsg} placeholder = "Please confirm account password">Enter password:	&nbsp;</Input>
            <Link to='/create-user/result'>
              <SubmitButton onClick={this.HandleSubmit}>Submit</SubmitButton>
            </Link>
          </Body>
          </form>
      </Wrapper>
  )
  }
}

export default CreateUser;
