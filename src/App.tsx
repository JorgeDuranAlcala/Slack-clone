import React from 'react';
import {Header, Sidebar, Chat} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__content">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
