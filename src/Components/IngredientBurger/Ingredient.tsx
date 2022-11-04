import React from 'react';
import './Ingredient.css';
import {Ingredient} from '../../types/types';

interface Props extends React.PropsWithChildren{
  addIngredient: React.MouseEventHandler;
  ingredient: Ingredient;
  amount: number;
  deleteIngredient: React.MouseEventHandler;
}

const IngredientBurger: React.FC<Props> = (props) => {
  return (
   <div className="ingredient">
      <button className="add-in" onClick={props.addIngredient}>
        <img
          className="image-in"
          src={props.ingredient.image}
          alt={props.ingredient.name}
        />
      </button>
      <p className="name-in">{props.ingredient.name}</p>
      <span className="amount-in">x{props.amount}</span>
      <button
        className="del-in"
        onClick={props.deleteIngredient}
      >❌</button>
    </div>
  );
};

export default IngredientBurger;