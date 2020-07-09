import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Input from '../../Body/Input/Input';
import Flex from '../../../../../../Flex';
import SubmitButton from '../../../../../../Button/SubmitButton';

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
        errorMsg: ""
      },
      address:{
        value:"",
        errorMsg: ""
      },
      telephone:{
        value:"",
        errorMsg: ""
      },
      email:{
        value:"",
        errorMsg: ""
      },
      password:{
        value:"",
        errorMsg: ""
      },
      password2:{
        value:"",
        errorMsg: ""
      },
    }
    this.HandleOnChange = this.HandleOnChange.bind(this);
  }

  Validator = () =>{
    const { name, address, telephone, email, password, password2 } = this.state;
    const newState = {...this.state};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name.value.trim() ===""){
      newState.name.errorMsg = "Name can not be null";
      this.setState(newState);
    }else{
      newState.name.errorMsg = "";
      this.setState(newState);
    }

    if(address.value.trim() ===""){
      newState.address.errorMsg = "Address can not be null";
      this.setState(newState);
    }else{
      newState.address.errorMsg = "";
      this.setState(newState);
    }

    if(telephone.value.trim() ===""){
      newState.telephone.errorMsg = "Telephone can not be null";
      this.setState(newState);
    }else{
      newState.telephone.errorMsg = "";
      this.setState(newState);
    }

    if(email.value.trim() ===""){
      newState.email.errorMsg = "Email can not be null";
      this.setState(newState);
    }else if (!regex.test(email.value.toLowerCase())){
      newState.email.errorMsg = "Email format is wrong";
      this.setState(newState);
    }else{
      newState.email.errorMsg = "";
      this.setState(newState);
    }

    if(password.value.trim() ===""){
      newState.password.errorMsg = "Password can not be null";
      this.setState(newState);
    }else if(password.value.length < 3){
      newState.password.errorMsg = "Password must be at least 3 characters";
      this.setState(newState);
    }else{
      newState.password.errorMsg = "";
      this.setState(newState);
    }

    if(password2.value.trim() ===""){
      newState.password2.errorMsg = "Password can not be null";
      this.setState(newState);
    }else if(password2.value.length < 3){
      newState.password2.errorMsg = "Password must be at least 3 characters";
      this.setState(newState);
    }else{
      newState.password2.errorMsg = "";
      this.setState(newState);
    }

    if(password.value !== password2.value){
      newState.password2.errorMsg = "The password does not match";
      this.setState(newState);
    }
  }

  HandleSubmit = (e) =>{
    e.preventDefault();
    if(this.Validator()){
      console.log('succuss');
    }else{
      console.log('no succuss');
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
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="name" errorMsg={name.errorMsg} placeholder = "Please enter account name">Enter name:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="address" errorMsg={address.errorMsg} placeholder = "Please enter address">Enter address:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone" errorMsg={telephone.errorMsg} placeholder = "Please enter telephone">Enter telephone:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="email" type="email" errorMsg={email.errorMsg} placeholder = "Please enter email">Enter email:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="password" errorMsg={password.errorMsg} placeholder = "Please enter account password">Enter password:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="password2" errorMsg={password2.errorMsg} placeholder = "Please confirm account password">Enter password:	&nbsp;</Input>
            <SubmitButton onClick={this.HandleSubmit}>Submit</SubmitButton>
          </Body>
          </form>
      </Wrapper>
  )
  }
}

export default CreateUser;
