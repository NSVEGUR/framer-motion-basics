import React from "react";
import { Link } from "react-router-dom";

export interface ToppingsProps {
  addTopping: any;
  pizza: {
    base: string;
    toppings: string[];
  };
}

const Toppings = (props: ToppingsProps) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = props.pizza.toppings.includes(topping)
            ? "active"
            : "";
          return (
            <li key={topping} onClick={() => props.addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
