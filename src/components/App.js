import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Single';
import About from '../containers/About';
import Footer from '../containers/Footer';

export default function App() {
  const handleClick = () => {
    const menuItems = document.getElementById('menu-items');
    if (menuItems.style.height === '0px' || menuItems.style.height === '') {
      menuItems.style.height = '70px';
    } else {
      menuItems.style.height = '0px';
    }
  };

  return (
    <Router>
      <section>
        <Header clickHandler={handleClick} />
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/about" component={About} />
          <Route path="/recipe/" component={Recipe} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}
