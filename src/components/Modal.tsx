import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariant } from "./Home";

export interface ModalProps {
  showModal: Boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal }: ModalProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[2]"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className=" max-w-md my-0 mx-auto py-10 px-5 bg-white rounded-xl text-center text-gray-700 font-bold"
            variants={modalVariants}
          >
            <p>Want to make another pizza!?</p>
            <Link to="/">
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                className="mt-10 cursor-pointer rounded-3xl border-2 border-solid border-gray-700 bg-transparent py-3 px-8 text-gray-700 opacity-70"
              >
                Start Again
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
