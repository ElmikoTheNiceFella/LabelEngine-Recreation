import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Vector2() {
  const reducedMotion = useReducedMotion();

  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true });

  const pathAnim = {
    hidden: {
      pathLength: reducedMotion ? 1 : 0,
    },
    visible: {
      pathLength: isVisible ? 1 : 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <svg
      width="334"
      height="16"
      viewBox="0 0 334 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className="mt-[1.65rem]"
    >
      <motion.path
        d="M3 12.6875C64.051 4.75137 159.994 -2.48176 331.22 9.8472"
        stroke="#006FFF"
        strokeWidth="5"
        strokeLinecap="round"
        variants={pathAnim}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}
