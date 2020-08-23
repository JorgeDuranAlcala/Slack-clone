import React from 'react';
import {Header, Sidebar, Chat} from "./components";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__body">
        <Sidebar/>
        <Router>
          <Switch>
            <Route path="/room/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
                <h1>Welcome!!</h1>
            </Route>  
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
