import { Dark } from "../Types";
import { useState } from "react";
import MapBG from "../assets/BGMap.svg";
import Alert from "../assets/Shipping Calculator/Alert.svg";
import USPS from "../assets/Shipping Calculator/USPS.svg";
import Icon1 from "../assets/Shipping Calculator/Icon1.svg";
import Icon2 from "../assets/Shipping Calculator/Icon2.svg";
import Icon3 from "../assets/Shipping Calculator/Icon3.svg";
import Arrow from "../assets/Shipping Calculator/Arrow.svg";
import "../App.scss";
import { Link } from "react-router-dom";

export default function ShippingCalc({ dark }:Dark) {

  const [toggled, setToggled] = useState<boolean>(false);
  const [measurement, setMeasurement] = useState<string>("lbs");
  const [visibility, setVisibility] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const [price1, setPrice1] = useState<number>(0);
  const [price2, setPrice2] = useState<number>(0);
  const [price3, setPrice3] = useState<number>(0);

  const cardArray = [
    {
      title: "Priority",
      value: "Best value",
      delivery: "2-4 Business Days",
      price: price1,
    },
    {
      title: "Signature",
      value: "Best value",
      delivery: "2-4 Business Days",
      price: price3,
    },
    {
      title: "Express",
      value: "Fastest",
      delivery: "Next Day Delivery",
      price: price2,
    },
    {
      title: "First Class",
      value: "Cheapest",
      delivery: "2-4 Business Days",
      price: 3,
    },
  ];

  const handleClick = () => {
    const value = (measurement === "oz") ? +input / 16 : +input;
    const values = convertToPrice(value);
    if (value < 1) {
      setVisibility(1);
    } else {
      setVisibility(2);
      setPrice1(values[0]); setPrice2(values[1]); setPrice3(values[2]);
    }
  }

  return (
    <div
      style={{ backgroundColor: dark ? "#090e32" : "white" }}
      className="h-[132rem] md:h-[100rem] xl:h-[75rem] absolute w-full overflow-x-hidden"
    >
      <img
        src={MapBG}
        className="opacity-25 absolute min-w-max xl:min-w-full"
        alt="background-map"
      />
      <div className="grid place-items-center mt-36 h-fit">
        <div
          style={{
            borderColor: dark ? "#006fff" : "gray",
            color: dark ? "white" : "black",
          }}
          className="border-2 relative w-fit z-10 px-6 py-2 rounded-full tracking-widest"
        >
          CALCULATOR
        </div>
        <h1
          style={{ color: dark ? "white" : "black" }}
          className="text-[1.65rem] sm:text-3xl sm:text-4xl font-bold tracking-[-2px] mt-8"
        >
          Get a quote on your shipping cost
        </h1>
        <p className="text-center text-[#ACB0D0] mt-3">
          The absolute best Rates with LabelEngine.{" "}
          <br className="block sm:hidden" />
          Calculate the shipping cost
          <br />& savings using our Shipping Calculator.
        </p>
      </div>
      <div className="w-[26rem] sm:w-[30rem] md:w-[36rem] mt-8 h-[35rem] md:h-[30rem] m-auto">
        <div className="text-white pb-2 z-10 ml-[18rem] sm:ml-[20rem] md:ml-[27.5rem] absolute px-3 sm:px-2 bg-[#006fff] w-fit rounded-xl">
          <p className="font-['Satoshi']">Save up to</p>
          <h3 className="font-bold font-['Satoshi'] text-[2rem] leading-7">
            89%
          </h3>
        </div>
        <div
          style={{
            background: dark
              ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
              : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
          }}
          className="w-full h-[30rem] md:h-[24rem] rounded-xl relative top-8"
        >
          <h1 className="font-semibold text-center pt-10 text-[2.75rem] sm:text-5xl tracking-[-0.05em] relative">
            <span style={{ color: dark ? "white" : "black" }}>Shipping </span>
            <span className="colored">Calculator</span>
          </h1>
          <p className="text-[#ACB0D0] text-center pt-2 font-['Inter'] tracking-[-0.04em] text-lg">
            Get an instant quote on your shipping cost.
          </p>
          <form id="shippingCalc" className="mt-4">
            <div className="col-span-3 md:col-span-1">
              <input
                type="text"
                style={{ color: dark ? "white" : "black" }}
                className="border-[#ACB0D0] font-['Satoshi'] bg-transparent w-full px-4 py-[0.65rem] border-2 rounded-lg border-opacity-25"
                placeholder="Shipping from"
                required
              />
              <figure className="flex gap-1 ml-4">
                <figcaption className="text-[#2F3056]">Zip code</figcaption>
                <img src={Alert} className="mt-1" alt="alert-icon" />
              </figure>
            </div>
            <div className="col-span-3 md:col-span-2">
              <input
                type="text"
                style={{ color: dark ? "white" : "black" }}
                className="bg-transparent w-full px-4 py-[0.65rem] font-['Satoshi'] border-2 rounded-lg border-[#ACB0D0] border-opacity-25"
                placeholder="Shipping to"
                required
              />
              <figure className="flex gap-1 ml-4">
                <figcaption className="text-[#2F3056]">Zip code</figcaption>
                <img src={Alert} className="mt-1" alt="alert-icon" />
              </figure>
            </div>
            <input
              type="text"
              style={{ color: dark ? "white" : "black" }}
              className="bg-transparent w-full font-['Satoshi'] h-12 pl-4 border-2 rounded-lg border-[#ACB0D0] border-opacity-25 col-span-2"
              placeholder="Package weight"
              value={input}
              onChange={e => setInput(e.target.value)}
              required
            />
            <fieldset className="border-2 w-full relative bottom-[0.6rem] h-[3.625rem] border-[#ACB0D0] border-opacity-25 rounded-lg">
              <legend
                style={{ opacity: dark ? ".25" : "1" }}
                className="px-2 ml-2 text-[#ACB0D0]"
              >
                Unit
              </legend>
              <div
                onClick={() => setToggled((v) => !v)}
                className="h-8 rounded-lg cursor-pointer pb-2"
              >
                <div className="flex gap-8">
                  <p
                    style={{ color: dark ? "white" : "black" }}
                    className="text-lg w-2 md:w-6 font-['Satoshi'] ml-4 select-none"
                  >
                    {measurement}
                  </p>
                  <img
                    src={Arrow}
                    style={{ filter: dark ? "invert(0)" : "invert(1)" }}
                    className="pr-4 md:pr-0"
                    alt="dropdown-arrow"
                  />
                </div>
                <div
                  id="dropdown"
                  style={{
                    display: toggled ? "block" : "none",
                    backgroundColor: dark ? "#090e32" : "#e3e3e3",
                  }}
                  className="absolute w-32 font-['Satoshi'] text-lg h-24 rounded-b-lg rounded-tr-lg top-[2.125rem]"
                >
                  <p
                    style={{ color: dark ? "white" : "#090e32" }}
                    onClick={() => setMeasurement("lbs")}
                    className="h-1/2 flex hover:opacity-60 justify-center items-center"
                  >
                    lbs
                  </p>
                  <p
                    style={{ color: dark ? "white" : "#090e32" }}
                    onClick={() => setMeasurement("oz")}
                    className="h-1/2 flex hover:opacity-60 justify-center items-center"
                  >
                    oz
                  </p>
                </div>
              </div>
            </fieldset>
            <button type="submit" onClick={handleClick} className="tracking-[-0.02em] h-12 rounded-lg col-span-3 flex justify-center items-center font-['Satoshi'] text-white bg-[#006FFF]">
              <a href="#rates" className="w-full">Get Rates</a>
            </button>
          </form>
        </div>
      </div>
      <div
        id="rates"
        className="grid place-items-center xl:grid-cols-3 md:grid-cols-2 w-fit m-auto gap-12 "
      >
        {cardArray.map((card) => (
          <div
            style={{ borderColor: dark ? "#171741" : "#e0e0e0",
          display: (card.value == "Cheapest") ? (visibility == 1 ? "block" : "none") : (visibility == 2) ? "block" : "none" }}
            className="w-72 h-[19.35rem] cardReveal min-w-fit rounded-lg pb-4 pt-6 px-6 space-y-8 bg-transparent border-2"
            key={card.title}
          >
            <div className="flex gap-2">
              <img src={USPS} alt="usps-icon" />
              <div>
                <h3
                  style={{ color: dark ? "white" : "black" }}
                  className="text-white font-semibold text-lg"
                >
                  USPS - {card.title} Mail
                </h3>
                <p className="text-white bg-[#006fff] text-sm pb-[0.1rem] w-fit px-2 font-['Satoshi'] rounded-md">
                  {card.value}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <img
                  style={{ filter: dark ? "invert(0)" : "invert(1)" }}
                  src={Icon1}
                  className="w-4"
                  alt="location-icon"
                />
                <p
                  style={{ color: dark ? "white" : "black" }}
                  className="text-white tracking-[-0.05em] font-['Satoshi']"
                >
                  Free Tracking Included
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  style={{ filter: dark ? "invert(0)" : "invert(1)" }}
                  className="w-4"
                  src={Icon2}
                  alt="truck-icon"
                />
                <p
                  style={{ color: dark ? "white" : "black" }}
                  className="text-white tracking-[-0.05em] font-['Satoshi']"
                >
                  {card.delivery}
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  style={{ filter: dark ? "invert(0)" : "invert(1)" }}
                  className="w-4"
                  src={Icon3}
                  alt="shield-icon"
                />
                <p
                  style={{ color: dark ? "white" : "black" }}
                  className="text-white tracking-[-0.05em] font-['Satoshi']"
                >
                  $50 Insurance Included
                </p>
              </div>
            </div>
            <h2 className="text-[#006FFF] font-bold px-3 text-2xl m-auto py-1 rounded-md border-[#006FFF] border-2 w-fit font-['Satoshi']">
              ${card.price}.00
            </h2>
            <Link
              to={"/Login"}
              className="tracking-[-0.02em] font-['Satoshi'] absolute ml-[3.45rem] text-white px-6 py-3 rounded-full bg-[#006FFF]"
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
//Colors: Light: #006fff Dark: #090e32 Gray: #ACB0D0
function convertToPrice(num:number):number[] {
  if (num >= 1 && num <= 4) {
    return [5,7,10]
  } else if (num > 4 && num <= 6) {
    return [7,9,10]
  } else if (num > 6 && num <= 8) {
    return [7,9,20]
  } else if (num > 8 && num <= 15) {
    return [12,14,20]
  } else if (num > 15 && num <= 20) {
    return [18,20,25]
  } else if (num > 20 && num <= 25) {
    return [12,20,35]
  } else if (num > 25 && num <= 30) {
    return [25,28,35]
  } else if (num > 30 && num <= 35) {
    return [25,28,40]
  } else if (num > 35 && num <= 40) {
    return [30,35,40]
  } else if (num > 40 && num <= 45) {
    return [30,35,45]
  } else if (num > 45 && num <= 50) {
    return [35,40,45]
  } else if (num > 50 && num <= 55) {
    return [35,40,60]
  } else if (num > 55 && num <= 60) {
    return [50,52,60]
  } else if (num > 60 && num <= 65) {
    return [50,60,70]
  } else if (num > 65 && num <= 70) {
    return [55,60,70]
  }
  return [0, 0, 0]
}
