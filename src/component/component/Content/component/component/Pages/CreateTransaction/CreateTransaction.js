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

const CreateTransaction = () =>{
    return(
    <Wrapper>
    <Description Title="CreateTransaction" SubText="CreateTransaction subtext"/>
      <Body>
        <Input name = "name" placeholder = "Please enter user name">Enter user name:	&nbsp;</Input>
        <Input name = "telephone" placeholder = "Please enter user phone">Enter user phone:	&nbsp;</Input>
        <Input name = "name2" placeholder = "Please enter tradie name">Enter tradie name:	&nbsp;</Input>
        <Input name = "telephone2" placeholder = "Please enter tradie phone">Enter tradie phone:	&nbsp;</Input>
        <Input name = "address" placeholder = "Please enter address">Enter service address:	&nbsp;</Input>
        <Input name = "time" placeholder = "Please enter time">Enter service time:	&nbsp;</Input>
        <SubmitButton>Submit</SubmitButton>
      </Body>
    </Wrapper>
)};

export default CreateTransaction ;