import React, {useState} from 'react';
import meatImage from "../../assets/meat.png";
import cheeseImage from "../../assets/cheese.png";
import saladImage from "../../assets/salad.png";
import baconImage from "../../assets/bacon.png";
import Burger from "../../Components/Burger/Burger";
import {Ingredient} from "../../types/types"
import './App.css';
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";

const INGREDIENTS: Ingredient[] = [
  {id: 11, name: 'Meat', price: 80, image: meatImage},
  {id: 23, name: 'Cheese', price: 50, image: cheeseImage},
  {id: 33, name: 'Salad', price: 10, image: saladImage},
  {id: 41, name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0,},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (name: string) => {
    setIngredients(state => state.map(item => {
      return item.name === name ? {
        ...item,
        count: item.count + 1,
      } : item;
    }));
  };

  const deleteIngredient = (name: string) => {
    setIngredients(state => state.map(item => {
      return item.name === name ? {
        ...item,
        count: item.count = 0,
      } : item;
    }));
  };

  const amount = (name: string) => ingredients.reduce((acc, ingredient) => {
    if (name === ingredient.name) {
      acc += ingredient.count;
    }
    return acc;
  }, 0);

  const getTotalPrice = ingredients.reduce((acc, item) => {
    INGREDIENTS.forEach(totalPrice => {
      if (item.name === totalPrice.name) {
        return acc += (item.count * totalPrice.price);
      }
    });
    return acc;
  }, 30);

  return (
    <div className="container">
      <div className="ingredient-block">
        <BurgerMenu
          ingredient={INGREDIENTS}
          addIngredient={addIngredient}
          deleteIngredient={deleteIngredient}
          amount={amount}
        />
      </div>
      <Burger
        price={getTotalPrice}
        ingredientsBurger={ingredients}
      />
    </div>
  );
};

export default App;
