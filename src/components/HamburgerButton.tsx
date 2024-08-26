import React, { useState } from "react";
import { animate, color, motion } from "framer-motion";

type HamburgerButtonProps = {
  toggle: () => void;
};
const HamburgerButton: React.FC<HamburgerButtonProps> = ({ toggle }) => {
  return (
    <motion.button onClick={toggle}>
      <svg width="26" height="26" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="#0D1B2A"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#0D1B2A"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 9.423 L 20 9.423" },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#0D1B2A"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default HamburgerButton;
