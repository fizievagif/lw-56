import React from 'react';

interface Props {
  price: number;
}

const Burger: React.FC<Props> = (props) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>

      <div className="BreadBottom"></div>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Burger;