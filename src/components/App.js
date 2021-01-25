import React from 'react';
import RecipeComponent from '../components/RecipeComponent';

export default function App() {
  return (
    <section>
      <h1>Recipes</h1>
      <div className='content'>
        <RecipeComponent />
      </div>
    </section>
  );
}
