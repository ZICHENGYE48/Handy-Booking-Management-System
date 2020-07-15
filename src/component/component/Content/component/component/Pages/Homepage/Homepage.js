import React from 'react';
import Card from '../../../Card';
import styled from 'styled-components';
import Flex from '../../../../../../Flex';

const Wrapper = styled(Flex)`
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
`

const HomePage  = () =>(
    <Wrapper>
      <Card title="Total orders" figure="1" otherInfo="5"/>
      <Card title="Total users" figure="2" otherInfo="6"/>
      <Card title="Total tradies" figure="3" otherInfo="7"/>
      <Card title="Total transactions" figure="4" otherInfo="8"/>
    </Wrapper>
)

export default HomePage ;