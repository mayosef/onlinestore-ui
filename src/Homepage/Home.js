import React from 'react';
import CategoryService from '../services/category.service'
import Categories from './Categories/Categories';
import './Home.scss'
 class Home extends React.Component {
    
     render() {
         return (
             <header className="homepage">
                 <div className="welcome">
                     <h1>Welcome to store app!</h1>
                     <h2>The best store to buy!</h2>
                    <Categories  />
                
                 </div>
             </header>
   
         )
     }
 }

 export default Home;