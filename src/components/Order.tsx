import { useEffect } from "react";
import { motion } from "framer-motion";

export interface OrderProps {
  pizza: {
    base: string;
    toppings: string[];
  };
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 9,
      mass: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }: OrderProps) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="text-center mx-auto mb-10 mt-24 max-w-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 exit={{ y: "-100vh" }} className="text-3xl">
        Thank you for your order :)
      </motion.h2>
      <motion.p className="my-5 mx-auto" variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
