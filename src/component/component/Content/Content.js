import React from 'react';
import {
    Route,
  } from "react-router-dom";
import CreateOrder from './component/CreateOrder';
import ReadOrder from './component/readOrder';
import UpdateOrder from './component/updateOrder';
import DeleteOrder from './component/deleteOrder';
import styled from 'styled-components';
import Flex from '../../Flex'


const Wrapper = styled(Flex)`
min-height: 700px;
width: 100%;
`

const Content = () =>{
  return(
  <Wrapper>
        <Route path="/create-order" component={CreateOrder}/> 
        <Route path="/read-order" component={ReadOrder}/>
        <Route path="/update-order" component={UpdateOrder}/> 
        <Route path="/delete-order" component={DeleteOrder}/>
  </Wrapper>
  )
}

export default Content;