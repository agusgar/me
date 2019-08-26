import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Eprofe from './pages/eprofe';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/eprofe" exact component={Eprofe} />
      </Router>
    </div>
  );
}

export default App;
