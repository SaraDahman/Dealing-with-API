import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/all'
import Userpost from './components/onePost'
import UserPosts from './components/userPosts'

function App() {
  return (
  <Router>
    <div className="App">
    <Switch>
      <Route exact path = '/' component = {Posts} />
      <Route exact path ='/post' component ={Userpost} />
      <Route exact path ='/posts' component ={UserPosts} />
    </Switch>
    </div>
  </Router>
  );
}

export default App;
