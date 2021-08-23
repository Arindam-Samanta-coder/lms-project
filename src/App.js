import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quizes from './Quizes';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path="/Quiz">
                    <Quiz />
                </Route>
                <Route path="/Quizes/:code">
                    <Quizes />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        
       
    </div>
  );
}

export default App;
