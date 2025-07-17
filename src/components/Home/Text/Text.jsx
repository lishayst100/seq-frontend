import React, { useRef } from "react";
import "./Text.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Text = () => {
  const containerRef = useRef(null);
  const nav = useNavigate();

  const string =
    "Sequence Studio is a creative boutique studio providing creative solutions and productions services including design ,animation & visual effects for varius media forms - television, internet and film. We specialize in the development and production of commercials, animations films, promotional and product videos, from concept stage to final.".split(
      " "
    );

  return (
    <AnimatePresence initial={true}>
      <p
        ref={containerRef}
        className="d-flex flex-wrap container mx-auto text-header"
        role="region"
        aria-label="תיאור סטודיו Sequence"
      >
        {string.map((word, i) => (
          <motion.span
            key={i}
            className="text-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ margin: "-15% 0px -15% 0px " }}
            aria-hidden="true" // מונע עומס מקוראי מסך
          >
            {`${word}`}&nbsp;
          </motion.span>
        ))}

        <motion.span
          className="hi"
          onClick={() => {
            nav("/about");
          }}
          role="link"
          tabIndex="0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ margin: "-15% 0px -15% 0px " }}
          whileHover={{ scale: 1.1 }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              nav("/about");
            }
          }}
          aria-label="מעבר לעמוד אודות. אמור שלום"
        >
          Say Hi!
        </motion.span>
      </p>
    </AnimatePresence>
  );
};

export default Text;
