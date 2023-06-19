import { Dark } from "../Types";
import Icon from "../assets/LoginRegister/RegisterIcon.svg";
import "../App.scss";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/LoginRegister/ButtonArrow.svg";
import TOGGLE from "../assets/LoginRegister/passwordIcon.svg";
import EMAIL from "../assets/LoginRegister/emailIcon.svg";
import ICON from "../assets/LoginRegister/mailIcon.svg";
import {useState} from 'react';

export default function Register({ dark }:Dark) {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  return (
    <div
      style={{ backgroundColor: dark ? "#090e32" : "white" }}
      className="h-[150vh]"
    >
      <div className="flex justify-center pt-36 items-center">
        <div
          style={{
            background: dark
              ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
              : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
          }}
          className="w-[26rem] rounded-xl h-[39rem]"
        >
          <img
            src={Icon}
            alt="icon-image"
            style={{ backgroundColor: dark ? "#090e32" : "white" }}
            className="p-6 rounded-xl m-auto mt-12"
          />
          <h1
            style={{ color: dark ? "white" : "black" }}
            className="text-center font-['Satoshi'] tracking-[-0.05em] text-2xl pt-3"
          >
            Create an account
          </h1>
          <p className="text-center text-[#ACB0D0] font-['Satoshi'] text-sm pt-2">
            Welcome! Please enter your details to register
            <br />
            your account.
          </p>
          <form className="flex justify-center flex-col items-center gap-4 mt-8">
            <input
              type="text"
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Username"
              required
              className="rounded-full text-sm w-5/6 px-6 h-10 bg-transparent"
            />
            <img
              style={{
                filter: dark ? "invert(0)" : "invert(1)",
                opacity: 0.25,
              }}
              src={ICON}
              alt="mail-icon"
              className="absolute mb-[16.9rem] ml-[17rem] p-3 select-none"
            />
            <input
              type="e-mail"
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="E-mail Address"
              required
              className="rounded-full w-5/6 px-6 h-10 text-sm bg-transparent"
            />
            <img
              style={{
                filter: dark ? "invert(0)" : "invert(1)",
                opacity: 0.25,
              }}
              src={EMAIL}
              alt="mail-icon"
              className="absolute mb-[10rem] ml-[17rem] p-3 select-none"
            />
            <input
              type={visible1 ? "text" : "password"}
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Password"
              required
              className="rounded-full w-5/6 px-6 h-10 text-sm bg-transparent"
            />
            <img
              style={{
                filter: dark ? "invert(0)" : "invert(1)",
                opacity: 0.25,
              }}
              src={TOGGLE}
              onClick={() => setVisible1((t) => !t)}
              alt="toggle-icon"
              className="absolute mb-[2.9rem] ml-[17rem] p-3 select-none cursor-pointer"
            />
            <input
              type={visible2 ? "text" : "password"}
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Confirm Password"
              required
              className="rounded-full w-5/6 px-6 h-10 text-sm bg-transparent"
            />
            <img
              style={{
                filter: dark ? "invert(0)" : "invert(1)",
                opacity: 0.25,
              }}
              src={TOGGLE}
              onClick={() => setVisible2((t) => !t)}
              alt="toggle-icon"
              className="absolute mb-[-4.1rem] ml-[17rem] p-3 select-none cursor-pointer"
            />
            <button
              type="submit"
              className="text-white font-['Satoshi'] flex gap-2 bg-[#006FFF] w-5/6 rounded-full justify-center h-10 items-center"
            >
              Register <img src={Arrow} alt="arrow" />
            </button>
            <p className="font-['Satoshi'] mt-2">
              <span className="text-[#ACB0D0]">Already have an account? </span>
              <NavLink to="/login" className="colored underline">
                Click here to login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
