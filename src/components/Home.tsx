import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "./Base";
import Loader from "./Loader";

export const buttonVariant = {
  hover: {
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 4px rgb(255, 255,255)",
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="mx-auto mb-10 mt-24 max-w-xs text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="mb-8 text-4xl">Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          className="my-8 mx-5 border-2 border-solid border-white py-4 px-8 text-2xl text-white rounded-full"
          variants={buttonVariant}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader></Loader>
    </motion.div>
  );
};

export default Home;
