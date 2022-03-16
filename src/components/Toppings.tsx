import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "./Base";
import { buttonVariant } from "./Home";

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
    <motion.div
      className="mx-auto mb-10 mt-24 max-w-xs"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="mb-2 border-b-2 border-solid border-[rgba(255,255,255,0.2)] pb-2">
        Step 2: Choose Toppings
      </h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = props.pizza.toppings.includes(topping)
            ? "active"
            : "";
          return (
            <motion.li
              key={topping}
              onClick={() => props.addTopping(topping)}
              className="cursor-pointer p-2"
              whileHover={{
                color: "#ffbe0b",
                scale: 1.3,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          className="mt-10 cursor-pointer rounded-3xl border-2 border-solid border-white bg-transparent py-3 px-8 text-white opacity-70"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
