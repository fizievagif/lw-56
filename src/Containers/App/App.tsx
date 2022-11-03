import React, {useState} from 'react';
import meatImage from '../../assets/meat.png';
import saladImage from '../../assets/salad.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 50, image: meatImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 15, image: saladImage},
  {name: 'Bacon', price: 40, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Cheese', count: 0},
  ]);

  return (
    <div>
    </div>
  );
};

export default App;
