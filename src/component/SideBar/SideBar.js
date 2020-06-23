import React from 'react';
import './SideBar.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import Item from './component/Item/Item';
import About from '../Content/Content';
import Users from '../Content/users'


const SideBar = ()=>{
    return(
    <div className="sidebar">
        <h1>Management System</h1>
        <Accordion allowMultipleExpanded="ture" allowZeroExpanded="true">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD order
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {/* <p>Create order</p>
                    <p>Read order</p>
                    <p>Update order</p>
                    <p>Delete order</p> */}
                    <Router>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/users">Users</Link>
            </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/users">
              <Users/>
          </Route>
        </Switch>
    </Router>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD user
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create user</p>
                    <p>Read user</p>
                    <p>Update user</p>
                    <p>Delete user</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD tradie
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create tradie</p>
                    <p>Read tradie</p>
                    <p>Update tradie</p>
                    <p>Delete tradie</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    CRUD transactions
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Create transactions</p>
                    <p>Read transactions</p>
                    <p>Update transactions</p>
                    <p>Delete transactions</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
    )
}

export default SideBar;