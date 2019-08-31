import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Home from '../Homepage/Home';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Category from '../Category/Category'; 
import Product from '../Product.js'
import Cart from './Cart/Cart.js';
class App extends React.Component {
  render() {
  return (
    <Router>
      
      <Header />
 
     
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/login"  component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/register"  component={Register} />
        <Route path="/user/me" component={Profile} />
        <Route path="/category/:id" exact component={Category} />
        <Route path="/category/:categoryId/product/:id" component={Product} />




      </main>
    </Router>
  );
  }
}

export default App;
