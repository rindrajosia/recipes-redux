import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import RecipesList from '../containers/RecipesList';
import Recipe from '../containers/Single';
import About from './About';
import Footer from './Footer';

export default function App() {
  return (
    <Router>
      <section>
        <Header />
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}
