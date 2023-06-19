import { useReducedMotion, motion, useInView } from "framer-motion";
import {useRef} from 'react'

export default function Vector1() {

  const reducedMotion = useReducedMotion();

  const ref = useRef(null)
  const isVisible = useInView(ref, {once: true})

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
      width="263"
      height="17"
      viewBox="0 0 263 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[3.7rem]"
      ref={ref}
    >
      <motion.path
        d="M3 13.6875C50.9338 5.38331 126.231 -2.42912 260.459 8.86171"
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
