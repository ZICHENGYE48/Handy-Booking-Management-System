import React from 'react';
import './Content.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreateOrder from './component/create-order';
import ReadOrder from './component/read-order';
import UpdateOrder from './component/update-order';
import DeleteOrder from './component/delete-order';

const Content = () =>(
    <div className="content">
          <Route path="/create-order" component={CreateOrder}/> 
          <Route path="/read-order" component={ReadOrder}/>
          <Route path="/update-order" component={UpdateOrder}/> 
          <Route path="/delete-order" component={DeleteOrder}/>
    </div>
)

export default Content;