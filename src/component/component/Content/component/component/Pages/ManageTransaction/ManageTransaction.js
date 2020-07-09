import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`
const ManageTransaction = () =>{
    return(
    <Wrapper>
    <Description Title="ManageTransaction" SubText="ManageTransaction subtext"/>
    </Wrapper>
)};
export default ManageTransaction;