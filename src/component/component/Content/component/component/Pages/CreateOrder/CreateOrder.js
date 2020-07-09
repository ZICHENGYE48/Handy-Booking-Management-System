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
const Control =styled(Flex)`
  flex-direction: row;
  margin-bottom: ${(props)=> props.theme.gutter.xl};
`

class CreateOrder extends React.Component{
  constructor(props){
    super(props);

    this.state = {
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
    }
    this.HandleOnChange = this.HandleOnChange.bind(this);
  }

  Validator = () =>{
    const { address, telephone, email } = this.state;
    const newState = {...this.state};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    const { address, telephone, email } = this.state;
    return(
      <Wrapper>
          <form>
          <Description Title="CreateOrder" SubText="CreateOrder subtext"/>
          <Body>
            <Control>
              <label htmlFor="title">Please select your service: &nbsp;</label>
              <select id="title">
                <option>Locksmith</option>
                <option>Plumber</option>
                <option>Tutor</option>
              </select>
            </Control>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="address" errorMsg={address.errorMsg} placeholder = "Please enter your address">Your address:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone" errorMsg={telephone.errorMsg} placeholder = "Please enter your telephone">Your telephone:	&nbsp;</Input>
            <Input onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="email" type="email" errorMsg={email.errorMsg} placeholder = "Please enter your email">Your email:	&nbsp;</Input>
            <SubmitButton onClick={this.HandleSubmit}>Submit</SubmitButton>
          </Body>
          </form>
      </Wrapper>
  )
  }
}

export default CreateOrder;
