import React from 'react';
import CategoryService from './services/category.service'

 class Home extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             categories:[]
         }
        
        }
        componentDidMount() {
            CategoryService
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({categories})
            })
        }
    
     render() {
         return (
             <header>
                 <div className="welcome">
                     <h1>Welcome to store app!</h1>
                     <h2>The best store to buy!</h2>
                     {this.state.categories.map(category => {
                         return <div>{category.name}</div>
                     })}
                 </div>
        
             </header>
   
         )
     }
 }

 export default Home;