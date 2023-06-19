import { Dark } from "../Types";
import Icon from "../assets/LoginRegister/LoginIcon.svg";
import "../App.scss";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/LoginRegister/ButtonArrow.svg";

export default function ForgotPassword({dark}:Dark) {
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
          className="w-[26rem] rounded-xl h-[28rem]"
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
            Reset your password
          </h1>
          <p className="text-center text-[#ACB0D0] font-['Satoshi'] text-sm pt-2">
            Forgot your password? No problem, reset it
            <br />
            here.
          </p>
          <form className="flex justify-center flex-col items-center gap-4 mt-8">
            <input
              type="text"
              style={{
                border: `1px solid ${dark ? "#323358" : "#ACB0D0"}`,
                color: dark ? "white" : "black",
              }}
              placeholder="Enter your email address"
              required
              className="rounded-full w-5/6 px-6 h-10 text-sm font-['Satoshi'] bg-transparent"
            />
            <button className="text-white font-['Satoshi'] flex gap-2 bg-[#006FFF] w-5/6 rounded-full justify-center h-10 items-center">
              Reset password <img src={Arrow} alt="arrow" />
            </button>
            <p className="font-['Satoshi'] mt-2">
              <span className="text-[#ACB0D0]">Don’t have an account?</span>{" "}
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
