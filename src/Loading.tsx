import Image from "./assets/LE_Light.svg";
import Load from "./assets/LOADING.svg";
import { useReducedMotion } from "framer-motion";

export default function Loading() {

  const reducedMotion = useReducedMotion();

  return (
    <div className="h-screen bg-[#006FFF] opacity-0 loadingAnimation grid place-items-center relative z-[999]">
      <div className="flex flex-col justify-center items-center">
      <img src={Image} className="w-96 z-10" alt="label-engine" />
      <img src={Load} style={{ display: reducedMotion ? "none" : "inline" }} className="relative w-32" alt="animation" />
      </div>
    </div>
  )
}
