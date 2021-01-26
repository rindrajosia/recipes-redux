import React from 'react';
import Header from '../containers/Header';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Single';
import About from '../containers/About';
import Footer from '../containers/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App() {
  const handleClick = () => {
    let menuItems = document.getElementById("menu-items");
    if(menuItems.style.height === "0px" || menuItems.style.height ==="") {
       menuItems.style.height = "70px";
     }else{
       menuItems.style.height = "0px";
     }
  };

  return (
    <Router>
      <section>
          <Header clickHandler={handleClick}/>
          <Switch>
            <Route exact path="/" component={RecipesList} />
            <Route path="/about" component={About} />
            <Route path="/recipe/" component={Recipe} />
          </Switch>
          <Footer/>
      </section>
    </Router>
  );
}
