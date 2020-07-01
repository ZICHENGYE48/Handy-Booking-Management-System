import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import CreateOrder from './component/create-order';
import ReadOrder from './component/read-order';
import UpdateOrder from './component/update-order';
import DeleteOrder from './component/delete-order';
import styled from 'styled-components';

const Content = () =>{

  const Wrapper = styled.div`
     min-height: 716px;
  `
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