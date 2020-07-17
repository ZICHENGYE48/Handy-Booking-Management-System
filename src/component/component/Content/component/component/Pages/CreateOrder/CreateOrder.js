import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Input from '../../Body/Input/Input';
import Flex from '../../../../../../Flex';
import SubmitButton from '../../../../../../Button/SubmitButton';
import {Link} from 'react-router-dom';
import Body from '../../../Body';

const Wrapper = styled.div`
  width: 100%;
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
    }
    this.HandleOnChange = this.HandleOnChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  Validator = () =>{
    const { address, telephone, email } = this.state;
    const newState = {...this.state};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

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
  }

  HandleSubmit = (e) =>{
    const { address, telephone, email } = this.state;
    this.Validator();
    if(address.errorMsg !=="" || telephone.errorMsg !=="" || email.errorMsg !==""){
      e.preventDefault();
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
              <Input validationFailed={address.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="address" errorMsg={address.errorMsg} placeholder = "Please enter your address">Your address:	&nbsp;</Input>
              <Input validationFailed={telephone.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="telephone" errorMsg={telephone.errorMsg} placeholder = "Please enter your telephone">Your telephone:	&nbsp;</Input>
              <Input validationFailed={email.validationFailed} onChange={(newValue, id)=>this.HandleOnChange(newValue, id)} id="email" type="email" errorMsg={email.errorMsg} placeholder = "Please enter your email">Your email:	&nbsp;</Input>
              <Link to='/create-order/result'>
                <SubmitButton onClick={this.HandleSubmit}>Submit</SubmitButton>
              </Link>
            </Body>
          </form>
      </Wrapper>
  )
  }
}

export default CreateOrder;
