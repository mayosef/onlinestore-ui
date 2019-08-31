import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome , faSignInAlt, faUserPlus, faDog, faIdCard } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  constructor(props) {
    super(props);
         this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  

    render() {
        return (
            
            <header>
              <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
                <ul className="ul-menu">
                  <li className="nav-item"><Link to="/">Home</Link>
                  <FontAwesomeIcon icon={faHome} size="1.5x" className="icons-menu" />
                  </li>
                  <li className="nav-item"><Link to="/login">Login</Link>
                  <FontAwesomeIcon icon={faSignInAlt} /> </li>
                  <li className="nav-item"><Link to="/register">Register</Link>
                  <FontAwesomeIcon icon={faUserPlus} /> </li>
                  <li className="nav-item"><Link to="/store">Store</Link>
                  <FontAwesomeIcon icon={faDog} /></li>
                  <li className="nav-item"><Link to="/user/me">Profile</Link>
                  <FontAwesomeIcon icon={faIdCard} /></li>
                  <li className="nav-item"><Link to="/cart">Cart</Link>
                  <FontAwesomeIcon icon={faDog} /></li>                  
                </ul>
              </nav>
            </header>
            
        )
    }
}

 export default Header;
