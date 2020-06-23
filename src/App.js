import React from 'react';
import './App.css';
import SideBar from './component/SideBar';
import Header from './component/Header';
import Content from './component/Content';
import Users from './component/Content/users';

function App() {
  return (
    <div className="root">
      <div className="app-left">
          <SideBar />
      </div>
      <div className="app-right">
          <Header />
          <Content/>
      </div>
    </div>
  );
}

export default App;
