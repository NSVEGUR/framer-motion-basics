import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariant } from "./Home";

export interface BaseProps {
  addBase: any;
  pizza: {
    base: string;
    toppings: string[];
  };
}

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 100,
    },
  },
};

const Base = (props: BaseProps) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="mx-auto mb-10 mt-24 max-w-xs"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="mb-2 border-b-2 border-solid border-[rgba(255,255,255,0.2)] pb-2">
        Step 1: Choose Your Base
      </h3>
      <ul>
        {bases.map((base) => {
          let spanClass = props.pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => props.addBase(base)}
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
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {props.pizza.base && (
        <motion.div variants={nextVariants}>
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              className="mt-10 cursor-pointer rounded-3xl border-2 border-solid border-white bg-transparent py-3 px-8 text-white opacity-70"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
