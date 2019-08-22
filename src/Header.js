import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


class Header extends React.Component {

    render() {
        return (
            
            <header>
              <nav>
                <ul className="nav">
                  <li className="nav-item"><Link to="/">Home</Link></li>
                  <li className="nav-item"><Link to="/login">Login</Link></li>
                  <li className="nav-item"><Link to="/register">Register</Link></li>
                  <li className="nav-item"><Link to="/about">About Us</Link></li>
                  <li className="nav-item"><Link to="/store">Store</Link></li>
                  <li className="nav-item"><Link to="/user/me">Profile</Link></li>

                </ul>
              </nav>
            </header>
            
        )
    }
}

 export default Header;
