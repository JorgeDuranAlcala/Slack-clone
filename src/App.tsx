import React, { useEffect } from 'react';
import {Header, Sidebar, Chat} from "./components";
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { useStateValue } from "./context/stateContext";
import LogIn from './components/LogIn';
import SendMessage from './components/Send-message';

function App() {

    console.log(useStateValue())
    const [{ user }] = useStateValue()

  return (
      <div className="App">
        <Router >
          {
            !user ? (
              <LogIn/>
            ) : (
                <>
                  <Header/>
                  <div className="App__body">
                      <Sidebar/>
                      <Switch>
                        <Route path="/room/:roomId">
                          <Chat/>
                          <SendMessage channelId="3" />
                        </Route>
                        <Route path="/">
                            <h1>Welcome!!</h1>
                        </Route>  
                      </Switch>
                  </div>
                </>
            )
          }
        </Router>
      </div>
  );
}

export default App;
