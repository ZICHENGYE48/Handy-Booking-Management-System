import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`
const ManageUser = () =>{
    return(
    <Wrapper>
    <Description Title="ManageUser" SubText="ManageUser subtext"/>
    </Wrapper>
)};
export default ManageUser;