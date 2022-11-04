import React from 'react';
import {Ingredient} from "../../types/types";
import IngredientBurger from "../IngredientBurger/Ingredient";

interface Props {
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
  amount: (name: string) => number;
  ingredient: Ingredient[];
}

const BurgerMenu: React.FC<Props> = (props) => {
  return (
    <div>
      {props.ingredient.map(item => (
        <IngredientBurger
          key={item.id}
          ingredient={item}
          addIngredient={() => props.addIngredient(item.name)}
          deleteIngredient={() => props.deleteIngredient(item.name)}
          amount={props.amount(item.name)}
        />
      ))}
    </div>
  );
};

export default BurgerMenu;