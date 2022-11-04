import React from 'react';
import Bacon from "../Bacon/Bacon";
import Salad from "../Salad/Salad";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";

interface BurgerProps {
  name: string;
  count: number;
}

interface Props {
  price: number;
  ingredientsBurger: BurgerProps[];
}

const Burger: React.FC<Props> = (props) => {
  const getIngr = () => {
    const ingredients: JSX.Element[] = [];
    props.ingredientsBurger.forEach(item => {
        if (item.name === 'Meat') {
          for (let i = 0; i < item.count; i++) {
            ingredients.push(<Meat key={i + 11 * 2}/>)
          }
        }

        if (item.name === 'Cheese') {
          for (let i = 0; i < item.count; i++) {
            ingredients.push(<Cheese key={i + 23 + 2}/>);
          }
        }

        if (item.name === 'Salad') {
          for (let i = 0; i < item.count; i++) {
            ingredients.push(<Salad key={i + 33 * 2}/>);
          }
        }

        if (item.name === 'Bacon') {
          for (let i = 0; i < item.count; i++) {
            ingredients.push(<Bacon key={i + 41 * 2}/>);
          }
        }
    });
    return ingredients;
  };

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {getIngr()}
      <div className="BreadBottom"></div>
      <p>Total price: {props.price}</p>
    </div>
  );
};

export default Burger;