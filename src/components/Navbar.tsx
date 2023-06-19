import { Link } from "react-router-dom";
import { Logo, LogoText } from "../assets/Logo";
import { useState, useEffect } from "react";
import { useAnimate, stagger, useReducedMotion } from "framer-motion";
import { DarkToggle } from "../Types";

// COLORS: ["#006fff", "#090e32"]

const animation = (isOpen: boolean) => {
  const reduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        y: isOpen ? 0 : "-130%",
      },
      {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }
    );
    animate(
      "li",
      {
        x: isOpen ? 0 : -250,
        opacity: isOpen ? 1 : 0,
        filter: isOpen ? "blur(0px)" : "blur(5px)",
      },
      {
        duration: isOpen ? (reduceMotion ? 0 : 0.5) : 0,
        delay: isOpen ? stagger(0.05, { startDelay: 0.2 }) : 0.5,
      }
    );
  });

  return scope;
};

export default function Navbar({ dark, setDark }: DarkToggle) {
  const [menuToggle, setMenuToggle] = useState(true);
  const [mob, setMob] = useState(window.innerWidth > 768 ? "pog" : "not pog");
  const scope = animation(menuToggle);

  useEffect(() => {
    setMenuToggle((): boolean => {
      if (window.innerWidth > 768) {
        return true;
      }
      return false;
    });
    const handleResposiveness = (): void => {
      setMob(window.innerWidth > 768 ? "pog" : "not pog");
      setMenuToggle((): boolean => {
        if (window.innerWidth > 768) {
          return true;
        }
        return false;
      });
    };
    window.addEventListener("resize", handleResposiveness);
    return () => {
      window.removeEventListener("resize", handleResposiveness);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "transparent",
      }}
      className="text-white absolute w-full flex flex-col justify-center
      gap-x-[5%] md:flex-row items-center z-[99]"
      ref={scope}
    >
      <div
        style={{
          backgroundColor:
            mob !== "pog" ? (dark ? "#090e32" : "white") : "transparent",
        }}
        className="flex gap-x-4 sm:gap-x-8 w-full md:w-auto justify-center pt-8 md:pt-6 pb-4 z-50"
      >
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() => setDark((t) => !t)}
            checked={dark}
          />
          <svg
            className="swap-on fill-[#c0c7ff] w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-[#090e32] w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div>
          <Link className="gap-x-4 flex" to="/">
            <Logo />
            <LogoText isDark={dark} />
          </Link>
        </div>
        <label
          style={{ borderColor: dark ? "white" : "#090e32" }}
          className="btn md:hidden border-2 btn-circle swap swap-rotate"
        >
          <input
            type="checkbox"
            onChange={() => setMenuToggle((t) => !t)}
            checked={menuToggle}
          />
          <svg
            className="swap-off"
            fill={dark ? "white" : "#090e32"}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on"
            fill={dark ? "white" : "#090e32"}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="w-full md:pt-3 md:w-auto" id="linksContainer">
        <ul
          style={{
            backgroundColor:
              mob !== "pog" ? (dark ? "#090e32" : "white") : "transparent",
          }}
          className="flex flex-col w-full items-center md:flex-row gap-x-8 gap-y-6 pt-2 md:pt-0 md:gap-x-4"
        >
          {[
            "Features",
            "Pricing",
            "Integrations",
            "ShippingCalculator",
            "Contact",
          ].map((dir) => (
            <li
              className="whitespace-nowrap"
              style={{ color: dark ? "white" : "#090e32" }}
              key={dir}
            >
              {dir == "ShippingCalculator" ? (
                <Link to={"/shipping-calculator"}>
                  <span
                    className="glow"
                    style={{
                      animation: "glow 1s infinite",
                      filter:
                        "drop-shadow(2px 2px 0px rgba(104, 104, 104, 0.3))",
                    }}
                  >
                    Shipping Calculator
                  </span>
                </Link>
              ) : (
                <a href={`/#${dir.toLowerCase()}`}>{dir}</a>
              )}
            </li>
          ))}
          <li className="flex md:hidden flex-row md:flex-col xl:flex-row pt-4 pb-8 gap-4">
            <div
              id="loginBtn"
              style={{
                color: dark ? "white" : "#090e32",
                borderColor: dark ? "white" : "#090e32",
              }}
              className="rounded-full border-2 text-center pb-[0.55rem] pt-[0.45rem] flex justify-center items-center"
            >
              <Link to="/Login" className="pl-10 pr-10">
                Login
              </Link>
            </div>
            <div
              id="registerBtn"
              className="rounded-full bg-[#006fff] border-2 border-[#006fff] flex justify-center items-center"
            >
              <Link
                to="/Register"
                className="pl-12 pr-8 pt-[0.45rem] pb-[0.55rem]"
              >
                Register
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden pt-8 pb-4 md:flex flex-row md:flex-col xl:flex-row gap-4">
        <div
          id="loginBtn"
          style={{
            color: dark ? "white" : "#090e32",
            borderColor: dark ? "white" : "#090e32",
          }}
          className="rounded-full border-2 text-center pb-[0.55rem] pt-[0.45rem] flex justify-center items-center"
        >
          <Link to="/Login" className="pl-10 pr-10">
            Login
          </Link>
        </div>
        <div
          id="registerBtn"
          className="rounded-full bg-[#006fff] border-2 border-[#006fff] flex justify-center items-center"
        >
          <Link to="/Register" className="pl-12 pr-8 pt-[0.45rem] pb-[0.55rem]">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
