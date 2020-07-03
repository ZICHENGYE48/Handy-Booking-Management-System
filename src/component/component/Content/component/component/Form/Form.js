import React from 'react';
import styled from 'styled-components';
import Flex from '../../../../../Flex';
import Item from './component/item';
import SubmitButton from '../../../../../Button/SubmitButton';

const Body = styled(Flex)`
  padding: ${(props)=> props.theme.gutter.lg};
  border: 1px solid red;
  width: 100%;
  min-height: 70vh;
  align-items: center;
  flex-direction: column;
`
const P = styled.p`
  margin:0;
  margin-bottom: ${(props)=> props.theme.gutter.xl};
`
const Form = () =>{
  return(
  <Body>
    <P>Your customer id is 001</P>
    <P>The tradie id is 002 &nbsp;&nbsp;<a href="www.google.com">view tradie profile</a></P>
    <P>Your service fee is $100</P>
    <P>Estimated service duration is 3 hrs.</P>
    <P>Estimated arrive time at  12:00</P>
    <P>Estimated finish time at  3:00</P>
    <Item name = "address" placeholder = "Please enter your address">Your address:	&nbsp;</Item>
    <SubmitButton>Submit</SubmitButton>
  </Body>
  )
};

export default Form;