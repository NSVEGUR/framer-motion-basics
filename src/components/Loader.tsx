import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -30],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="w-2 h-2 rounded-full my-10 bg-white mx-auto"
      ></motion.div>
      <button
        onClick={() => {
          cycleAnimation();
        }}
        className="mt-10"
      >
        Cycle Loader
      </button>
    </>
  );
};

export default Loader;