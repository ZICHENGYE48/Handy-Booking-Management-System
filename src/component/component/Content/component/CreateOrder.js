import React from 'react';
import Form from './component/Form';
import Description from './component/Description';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`
const CreateOrder = () =>{
    return(
    <Wrapper>
    <Description Title="CreateOrder" SubText="subtext"/>
    <Form />
    </Wrapper>
)};

export default CreateOrder;
