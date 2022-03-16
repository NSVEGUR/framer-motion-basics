import React from "react";

export interface OrderProps {
  pizza: {
    base: string;
    toppings: string[];
  };
}

const Order = (props: OrderProps) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {props.pizza.base} pizza with:</p>
      {props.pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
