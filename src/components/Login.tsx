import { useState } from "react";
import { Dark } from "../Types";
import Icon from "../assets/LoginRegister/LoginIcon.svg";
import "../App.scss";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/LoginRegister/ButtonArrow.svg";
import EMAIL from "../assets/LoginRegister/mailIcon.svg";
import TOGGLE from "../assets/LoginRegister/passwordIcon.svg";

export default function Login({ dark }:Dark) {

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      style={{ backgroundColor: dark ? "#090e32" : "white" }}
      className="h-screen"
    >
      <div className="flex justify-center pt-36 items-center">
        <div
          style={{
            background: dark
              ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
              : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
          }}
          className="w-[26rem] rounded-xl h-[35rem]"
        >
          <img
            src={Icon}
            alt="icon-image"
            style={{ backgroundColor: dark ? "#090e32" : "white" }}
            className="p-4 rounded-xl m-auto mt-12"
          />
          <h1
            style={{ color: dark ? "white" : "black" }}
            className="text-center font-['Satoshi'] tracking-[-0.05em] text-2xl pt-3"
          >
            Login to your account
          </h1>
          <p className="text-center text-[#ACB0D0] font-['Satoshi'] text-sm pt-2">
            Welcome! Please enter your details to login
            <br />
            to your account.
          </p>
          <form className="flex justify-center flex-col items-center gap-4 mt-8">
            <input
              type="text"
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Username or E-mail"
              required
              className="rounded-full text-sm w-5/6 px-6 h-10 font-['Satoshi'] bg-transparent"
            />
            <img
              style={{ filter: dark ? "invert(0)" : "invert(1)", opacity: 0.25 }}
              src={EMAIL}
              alt="email-icon"
              className="absolute mb-[12.4rem] ml-[17rem]"
            />
            <input
              type={visible ? "text" : "password"}
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Password"
              required
              className="rounded-full w-5/6 px-6 h-10 text-sm  bg-transparent"
            />
            <img
              style={{ filter: dark ? "invert(0)" : "invert(1)", opacity: 0.25 }}
              src={TOGGLE}
              onClick={() => setVisible(t => !t)}
              alt="toggle-icon"
              className="absolute mb-[5.45rem] ml-[17rem] p-3 select-none cursor-pointer"
            />
            <div
              style={{
                color: dark ? "#ACB0D0" : "gray",
              }}
              className="font-['Satoshi'] flex justify-around w-full"
            >
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="forgorPassword"
                  id="forgorPassword"
                />
                <label htmlFor="forgorPassword">Remember me</label>
              </div>
              <NavLink to="/forgot-password">Forgot your password?</NavLink>
            </div>
            <button className="text-white font-['Satoshi'] flex gap-2 bg-[#006FFF] w-5/6 rounded-full justify-center h-10 items-center">
              Login <img src={Arrow} alt="arrow" />
            </button>
            <p className="font-['Satoshi'] mt-2">
              <span className="text-[#ACB0D0]">Don’t have an account? </span>
              <NavLink to="/register" className="colored underline">
                Click here to register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
//Colors: Light: #006fff Dark: #090e32 Gray: #ACB0D0
