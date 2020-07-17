import React from 'react';
import Description from '../../Description';
import styled from 'styled-components';
import Body from '../../../Body';

const Wrapper = styled.div`
  width: 100%;
`
const ManageUser = () =>(
    <Wrapper>
      <Description Title="ManageUser" SubText="ManageUser subtext"/>
      <Body>
        123
      </Body>
    </Wrapper>
)

export default ManageUser ;