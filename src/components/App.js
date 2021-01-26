import React from 'react';
import Header from '../containers/Header';
import RecipesList from '../containers/RecipesList';
import Footer from '../containers/Footer';

export default function App() {
  const handleClick = () => {
    let menuItems = document.getElementById("menu-items");
    if(menuItems.style.height === "0px" || menuItems.style.height ==="") {
       menuItems.style.height = "200px";
     }else{
       menuItems.style.height = "0px";
     }
  };

  return (
    <section>
        <Header clickHandler={handleClick}/>
        <RecipesList />
        <Footer/>
    </section>
  );
}
