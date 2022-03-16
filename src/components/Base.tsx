import React from "react";
import { Link } from "react-router-dom";

export interface BaseProps {
  addBase: any;
  pizza: {
    base: string;
    toppings: string[];
  };
}

const Base = (props: BaseProps) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = props.pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => props.addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {props.pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
