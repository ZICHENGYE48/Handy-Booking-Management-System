import React from 'react';
import './App.css';
import SideBar from './component/SideBar';
import Header from './component/Header';
import Content from './component/Content';
import
{BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="root">
      <div className="app-left">
          <SideBar />
      </div>
      <div className="app-right">
          <Header />
          <Content/>
      </div>
    </div>
    </Router>
  );
}

export default App;
