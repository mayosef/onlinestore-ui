import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Header from './Header';
import Profile from './Profile';

class App extends React.Component {
  render() {
  return (
    <Router>
      
      <Header />
 
     
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/login"  component={Login} />
        <Route path="/register"  component={Register} />
        <Route path="/user/me" component={Profile} />



      </main>
    </Router>
  );
  }
}

export default App;
