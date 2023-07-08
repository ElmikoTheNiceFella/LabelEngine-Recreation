import CountUp from "react-countup";
import Star from "../assets/Star";
import { Dark, Info, Features, Steps, Price, Integrations, Footer } from "../Types";
import Grid from "../assets/Grid.svg";
import BGMap from "../assets/BGMap.svg";
import BGImage from "../assets/bgImage.svg";
import BtnArrow from "../assets/BtnArrow";
import Services from "../assets/sponsors.svg";
import BGAccessories from "../assets/BGAccessories1.svg";
import { Link, NavLink } from "react-router-dom";
import InfoBG from "../assets/InfoBG.svg";
import Info1 from "../assets/info1.svg";
import Info2 from "../assets/info2.svg";
import Info3 from "../assets/info3.svg";
import Info4 from "../assets/info4.svg";
import Feature1 from "../assets/Feature1.svg";
import Feature2 from "../assets/Feature2.svg";
import Feature3 from "../assets/Feature3.svg";
import Feature4 from "../assets/Feature4.svg";
import Feature5 from "../assets/Feature5.svg";
import Feature6 from "../assets/Feature6.svg";
import Vector1 from "../assets/Vector1";
import Vector2 from "../assets/Vector2";
import BGStep from "../assets/BGSteps.svg";
import StepVector from "../assets/StepVector.svg";
import Step1 from "../assets/Step1.svg";
import Step2 from "../assets/Step2.svg";
import Step3 from "../assets/Step3.svg";
import Truck from "../assets/Truck.svg";
import Calc from "../assets/Calc.svg";
import CalcArrow from "../assets/CalcArrow.svg";
import Integration1 from "../assets/Integration1.svg"
import Integration2 from "../assets/Integration2.svg"
import Integration3 from "../assets/Integration3.svg"
import Integration4 from "../assets/Integration4.svg";
import Footer1 from "../assets/Footer1.svg";
import Footer2 from "../assets/Footer2.svg";
import LogoLight from "../assets/LE_Light.svg";
import Discord from "../assets/Discord.svg";
import Telegram from "../assets/Telegram.svg";
import Instagram from "../assets/Instagram.svg";

export default function LandingPage({ dark }: Dark) {

  //Data (skip)
  const infoArray: Info = [
    [Info1, 10000, "Labels Created"],
    [Info2, 200, "Positive Reviews"],
    [Info3, 1000, "Happy Customers"],
    [Info4, 10000, "Successful Orders"],
  ];
  const featuresArray: Features = [
    {
      title: "E-Commerce Integration",
      desc: "Ability to integrate your e-commerce store  for easy label generation and improved efficiency.",
      icon: Feature1,
    },
    {
      title: "24/7 Customer Support",
      desc: "We offer 24/7 customer support, our team is available around the clock assist you with any questions or issues you may encounter.",
      icon: Feature2,
    },
    {
      title: "100% Automated",
      desc: "Streamline your operations, saving time & ensuring accuracy. Manage, fulfil, and track orders with ease.",
      icon: Feature3,
    },
    {
      title: "Discounted rates",
      desc: "Our service offers discounted shipping rates from leading carriers starting at $3,5 saving you a lot of money.",
      icon: Feature4,
    },
    {
      title: "Tracking",
      desc: "Streamline your shipping process and keep customers updated every step of the way with our real-time tracking feature!",
      icon: Feature5,
    },
    {
      title: "Insurance",
      desc: "Secure your shipments with ease using our insured labels! $50 on priority & $100 on express (comes with the labels).",
      icon: Feature6,
    },
  ];
  const stepsArray: Steps = [
    {
      title: "Fund your account",
      desc: "Deposit through various payment methods( PayPal, Cashapp, Venmo...",
      icon: Step1,
    },
    {
      title: "Generate your labels",
      desc: "Enter your label’s information and pick between which carrier",
      icon: Step2,
    },
    {
      title: "Ship Instantly",
      desc: "Print the label, attach it to your package and ship it immediately.",
      icon: Step3,
    },
  ];
  const priceArray: Price = [
    {
      title: "USPS Priority",
      desc1: "Priority Mail® service includes tracking and",
      desc2: "delivery in 1-3 business days. (signature available)",
      price: "$5",
      weight: "60lbs",
    },
    {
      title: "USPS Express",
      desc1: "Priority Mail Express® service provides next-day ",
      desc2: "to 2–day delivery If you’re looking for fast shipping",
      price: "$10",
      weight: "60lbs",
    },
    {
      title: "USPS First Class",
      desc1: "First-Class Mail® service is an affordable & easy ",
      desc2: "way to send envelopes & lightweight packages.",
      price: "$3.5",
      weight: "13oz",
    },
    {
      title: "USPS Signature",
      desc1: "Priority Mail® w/signature is a great way to ",
      desc2: "ensure that the package was received.",
      price: "$4",
      weight: "60lbs",
    },
  ];
  const integrationsArray: Integrations = [
    {
      image: Integration1,
      title: "Shopify",
      desc: "Streamline Shopify order fulfilment.",
    },
    {
      image: Integration2,
      title: "WooCommerce",
      desc: "Scale WooCommerce orders fulfilment",
    },
    {
      image: Integration3,
      title: "Ebay",
      desc: "Automate Ebay order fulfilment",
    },
    {
      image: Integration4,
      title: "Amazon",
      desc: "Streamline Amazon order fulfilment.",
    },
  ];
  const footerArray: Footer = [
    {
      icon: Footer1,
      title: "Updates & Announcements",
      desc1: "Join our discord or telegram to get notified",
      desc2: "with the latest updates",
    },
    {
      icon: Footer2,
      title: "Live Support",
      desc1: "Submit a ticket on our website. Our team will get back",
      desc2: "to you as soon as possible.",
    },
  ];
  //End of Data

  return (
    <>
      {/* Header */}
      <header
        style={{ backgroundColor: dark ? "#090e32" : "white" }}
        className="md:h-[75rem] h-[80rem] relative"
      >
        <img
          src={BGMap}
          className="absolute select-none opacity-25 min-w-full hidden lg:inline"
          alt="map"
        />
        {/* STREAMLINE... vvv */}
        <div
          style={{
            backgroundColor: dark ? "#081846" : "white",
            color: dark ? "#006fff" : "#081846",
            border: `2px solid ${dark ? "#081846" : "#7081b3"}`,
          }}
          id="headerBar"
          className="top-32 m-auto relative flex items-center gap-1 w-fit pt-[0.1rem] pb-[0.35rem] px-4 rounded-full"
        >
          <Star />
          Streamline your shipping with{" "}
          <span className=" font-medium">labelengine™</span>
        </div>
        {/* STREAMLINE... ^^^ */}
        <h1
          style={{ color: dark ? "white" : "black" }}
          className="absolute top-[11.5rem] w-full font-semibold text-center text-[2.5rem] sm:text-5xl"
        >
          <span>
            Save <span className="colored">time & money</span> <br className="md:hidden"/>with our&nbsp;
            <br className="hidden md:block" />
            Automated <br className="md:hidden"/><span className="colored">USPS</span> labels
          </span>
        </h1>
        <p
          style={{ color: dark ? "#ACB0D0" : "#4a4c59" }}
          className="absolute text-center z-[1] ml-12 sm:ml-16 m-auto md:ml-0 w-[80%] md:w-full top-[23.5rem] sm:top-[22rem] md:top-[18.75rem] font-[Inter]"
        >
          Stop overpaying for USPS labels! <i>LabelEngine™</i> offers the most
          affordable prepaid labels in the market.
          <br className="hidden md:block" />
          With prices starting at just $3,5 saving you a ton of money as well as
          improving your margins.
        </p>
        <div className="flex justify-center gap-[2%] w-full font-[Inter] top-[33rem] sm:top-[30rem] md:top-96 absolute">
          <button className="text-white text-sm z-50 px-4 w-44 py-3 border-2 border-[#006fff] bg-[#006fff] rounded-full">
            <Link to="/login">Create Label</Link>
            <BtnArrow />
          </button>
          <button
            style={{
              border: `2px solid ${dark ? "white" : "gray"}`,
              color: dark ? "white" : "black",
            }}
            className="text-sm px-4 z-50 w-44 py-3 bg-transparent rounded-full"
          >
            <Link to="/Info">Learn more</Link>
          </button>
        </div>
        <div
          style={{ backgroundColor: dark ? "#090e32" : "white" }}
          className="overflow-hidden h-[100%]"
        >
          <img
            className="min-w-max z-0 relative top-[33rem] md:top-96 right-24"
            id="bg-image"
            src={BGImage}
            alt="bg-image"
          />
        </div>
      </header>
      <main
        style={{ backgroundColor: dark ? "#090e32" : "white", transitionDuration: "200ms" }}
        className="relative"
      >
        {/* Images & Background */}
        <img
          src={Services}
          className="m-auto w-96 md lg:w-[30rem]"
          alt="services"
        />
        <img
          src={BGAccessories}
          className="absolute hidden xl:inline mix-blend-soft-light"
          alt="background"
        />
        {/* Stats */}
        <section className="z-50">
          <div className="grid z-50 place-content-center">
            <h2
              style={{ color: dark ? "white" : "black" }}
              className="relative text-4xl top-12 z-50"
            >
              <span className="font-semibold">Why Choose</span> Us?
            </h2>
            <Vector1 />
          </div>
          <div
            id="info"
            className="lg:w-[58rem] md:w-[40rem] sm:w-[30rem] mx-6 md:h-56 h-[19rem] rounded-lg lg:h-28 sm:m-auto relative top-[4rem] z-50 font-[Satoshi]"
          >
            <img
              src={InfoBG}
              className="h-full mix-blend-screen select-none"
              alt="map"
            />
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative z-50 ml-0 md:ml-8 lg:bottom-20 md:bottom-32 bottom-[17rem] text-center md:text-left">
                <p className="text-white">Stats</p>
                <h2 className="text-white font-semibold text-xl tracking-tight">
                  Our Achievements
                </h2>
              </div>
              <div
                id="cardContainer"
                className="grid grid-cols-2 lg:grid-cols-4 relative gap-6 m-auto bottom-[18rem] md:bottom-48 lg:bottom-[5.75rem]"
              >
                {infoArray.map((info, i) => (
                  <div key={i} id="card">
                    <h2 className="text-white w-32 relative z-50 font-semibold text-[2rem]">
                      +
                      <CountUp
                        start={0}
                        end={info[1]}
                        duration={1.5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h2>
                    <div className="flex gap-1 relative text-white">
                      <img src={info[0]} alt="" />
                      <p className="relative z-50 tracking-tight">{info[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Features */}
        <section
          id="features"
          style={{ backgroundColor: dark ? "#090e32" : "white" }}
          className="lg:px-24 px-12 sm:px-16 h-[75rem] md:h-[56rem] lg:h-[50rem] xl:h-[43rem] overflow-hidden relative top-36 pt-4"
        >
          <img
            src={Grid}
            className="absolute z-0 xl:-top-40"
            alt="background"
          />
          <div
            style={{
              borderColor: dark ? "#006fff" : "gray",
              color: dark ? "white" : "black",
            }}
            className="border-2 relative w-fit px-6 py-2 rounded-full tracking-widest"
          >
            FEATURES
          </div>
          <h1
            style={{ color: dark ? "white" : "black" }}
            className="text-4xl relative mt-4"
          >
            <strong>Streamline your shipping with </strong>
            <span className="colored">Labelengine™</span>
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-8 relative top-12">
            {featuresArray.map((feature, i) => (
              <li key={i} className="flex w-96 gap-4">
                <img
                  style={{
                    backgroundColor: dark ? "#081846" : "#f5f5f5",
                    borderColor: dark ? "#0D1D4A" : "#e3e3e3",
                    padding:
                      feature.title == "24/7 Customer Support"
                        ? "0.55rem"
                        : "0.7rem",
                  }}
                  src={feature.icon}
                  className="w-[3.1rem] border-2 rounded-xl h-[3.1rem] mt-1"
                  alt={feature.title}
                />
                <div className="md:w-[17rem] lg:w-[19rem]">
                  <p
                    style={{ color: dark ? "white" : "#090e32" }}
                    className="text-xl"
                  >
                    {feature.title}
                  </p>
                  <p className="text-gray-500 w-[16rem] sm:w-[25rem] md:w-[16rem]">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* Steps */}
        <section
          style={{ backgroundColor: dark ? "#090e32" : "white" }}
          className="relative h-[46rem] xl:h-[28rem]"
        >
          <img src={BGStep} className="absolute opacity-50" alt="background" />
          <div
            style={{
              borderColor: dark ? "#006fff" : "gray",
              color: dark ? "white" : "black",
            }}
            className="border-2 w-fit px-6 relative py-2 m-auto rounded-full tracking-widest"
          >
            STEPS
          </div>
          <div className="grid z-50 place-content-center">
            <h2
              style={{ color: dark ? "white" : "black" }}
              className="relative font-semibold font-[Satoshi] tracking-[-2px] text-4xl top-4 z-50"
            >
              How to Get Started?
            </h2>
            <Vector2 />
          </div>
          <div
            id="container12"
            className="flex flex-col xl:flex-row gap-y-10 items-center justify-center mt-12"
          >
            <div
              className="flex w-[22.8rem] gap-4 py-3 relative z-50 px-4 rounded-lg items-center"
              style={{
                background: dark
                  ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
                  : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
              }}
            >
              <img
                style={{
                  backgroundColor: dark ? "#081846" : "#f5f5f5",
                  borderColor: dark ? "#0D1D4A" : "#e3e3e3",
                }}
                src={stepsArray[0].icon}
                className="p-[0.85rem] rounded-xl h-16 w-16 border-2"
                alt={stepsArray[0].title}
              />
              <div>
                <h3
                  className="text-[1.2rem] "
                  style={{ color: dark ? "white" : "black" }}
                >
                  {stepsArray[0].title}
                </h3>
                <p className="text-gray-500 leading-5 relative bottom-1">
                  {stepsArray[0].desc}
                </p>
              </div>
            </div>
            <img
              src={StepVector}
              className="relative w-fit px-4 z-50 rotate-90 xl:rotate-0"
              alt="arrow"
            />
            <div
              className="flex w-[22.8rem] gap-4 py-3 relative z-50 px-4 rounded-lg items-center"
              style={{
                background: dark
                  ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
                  : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
              }}
            >
              <img
                style={{
                  backgroundColor: dark ? "#081846" : "#f5f5f5",
                  borderColor: dark ? "#0D1D4A" : "#e3e3e3",
                }}
                src={stepsArray[1].icon}
                className="p-[0.85rem] rounded-xl h-16 w-16 border-2"
                alt={stepsArray[1].title}
              />
              <div>
                <h3
                  className="text-[1.2rem] "
                  style={{ color: dark ? "white" : "black" }}
                >
                  {stepsArray[1].title}
                </h3>
                <p className="text-gray-500 leading-5 relative bottom-1">
                  {stepsArray[1].desc}
                </p>
              </div>
            </div>
            <img
              src={StepVector}
              className="relative w-fit px-4 z-50 rotate-90 xl:rotate-0"
              alt="arrow"
            />
            <div
              className="flex w-[22.8rem] gap-4 py-3 relative z-50 px-4 rounded-lg items-center"
              style={{
                background: dark
                  ? "linear-gradient(to top left, #261E5D -28.69%, rgba(15, 19, 50, 1) 53.93%, #261E5A 139.67%)"
                  : "linear-gradient(to top left, white -28.69%, rgba(15, 19, 50, 0.1) 53.93%, white 139.67%)",
              }}
            >
              <img
                style={{
                  backgroundColor: dark ? "#081846" : "#f5f5f5",
                  borderColor: dark ? "#0D1D4A" : "#e3e3e3",
                }}
                src={stepsArray[2].icon}
                className="p-[0.85rem] rounded-xl h-16 w-16 border-2"
                alt={stepsArray[2].title}
              />
              <div>
                <h3
                  className="text-[1.2rem] "
                  style={{ color: dark ? "white" : "black" }}
                >
                  {stepsArray[2].title}
                </h3>
                <p className="text-gray-500 leading-5 relative bottom-1">
                  {stepsArray[2].desc}
                </p>
              </div>
            </div>
          </div>
          <img src="" alt="" />
        </section>
        {/* Pricing */}
        <section
          id="pricing"
          className="h-[95rem] sm:h-[93rem] lg:h-[65rem] xl:h-[47rem] sm:pl-20 pl-6"
          style={{ backgroundColor: dark ? "#090e32" : "white" }}
        >
          <div className="flex justify-between sm:w-5/6 md:w-[90%]">
            <div
              style={{
                borderColor: dark ? "#006fff" : "gray",
                color: dark ? "white" : "black",
              }}
              className="border-2 relative w-fit px-6 py-2 h-11 rounded-full tracking-widest"
            >
              PRICING
            </div>
            <NavLink
              to="/shipping-calculator"
              style={{
                borderColor: "#006FFF",
                color: dark ? "white" : "black",
              }}
              className="border-2 w-fit gap-1 relative flex px-6 mr-4 py-3 rounded-full"
            >
              <img src={Calc} className="mt-[0.12rem]" alt="calculator-icon" />{" "}
              <span className="text-[#006FFF] whitespace-nowrap">
                Shipping Calculator
              </span>
              <img
                src={CalcArrow}
                className="mt-1 w-5"
                alt="calculator-arrow"
              />
            </NavLink>
          </div>
          <h1
            style={{ color: dark ? "white" : "black" }}
            className="text-4xl relative mt-4"
          >
            <strong>
              Save on shipping & Improve
              <br />
              your margins
            </strong>
          </h1>
          <div className="flex mt-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 z-[2] w-full lg:w-fit gap-4">
              {priceArray.map((card) => (
                <div
                  style={{ backgroundColor: dark ? "#090e32" : "white" }}
                  className="font-['Inter'] w-[22.5rem] sm:w-[30rem] md:w-[40rem] md:ml-4 lg:ml-0 lg:w-[25.5rem] pl-5 py-6 border-2 border-[#131F51]"
                >
                  <div className="flex">
                    <h3 className="text-[#006FFF] text-xl pr-1">•</h3>
                    <div className="priceText pr-4">
                      <h3
                        style={{ color: dark ? "white" : "#131F51" }}
                        className="text-xl mb-3 font-semibold tracking-[-0.01em]"
                      >
                        {card.title}
                      </h3>
                      <p className="text-[#5E6282] tracking-[-1px]">
                        {card.desc1 + " "}
                        <br className="hidden lg:block" />
                        {card.desc2}
                      </p>
                    </div>
                  </div>
                  <div className="space-x-4 mt-6 py-3 font-semibold">
                    <NavLink
                      to={"/login"}
                      style={{
                        backgroundColor: dark ? "#131F51" : "#006FFF",
                        borderColor: dark ? "#131F51" : "#006FFF",
                        color: dark ? "#006FFF" : "white",
                      }}
                      className="py-3 md:px-12 px-4 lg:px-4 whitespace-nowrap rounded-md border-2 border-[#131F51] tracking-[-1px]"
                    >
                      Starting at {card.price}
                    </NavLink>
                    <NavLink
                      to={"/login"}
                      className="bg-transparent rounded-md border-2 border-[#131F51] py-3 px-4 md:px-12 lg:px-4 text-[#006fff] tracking-[-1px]"
                    >
                      Up to {card.weight}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            <img
              src={Truck}
              className="absolute right-1 z-50 xl:z-[1] w-[43rem] xl:w-[35rem] mt-[60rem] sm:mt-[55rem] md:mt-[53rem] lg:mt-[27rem] xl:mt-32"
              alt="truck-image"
            />
          </div>
        </section>
        {/* Integrations */}
        <section
        id="integrations"
        className="h-[68rem] md:h-[40rem] xl:h-[30rem] px-8 sm:px-20">
          <div className="px-0 sm:px-4">
            <div
              style={{
                borderColor: dark ? "#006fff" : "gray",
                color: dark ? "white" : "black",
              }}
              className="border-2 w-fit px-6 py-2 rounded-full tracking-widest"
            >
              INTEGRATIONS
            </div>
            <div className="flex justify-between items-center">
              <h1
                style={{ color: dark ? "white" : "black" }}
                className="text-4xl mt-4"
              >
                <strong>
                  Seamlessly integrate your store
                  <br />
                  with
                  <span className="colored"> Labelengine™</span>
                </strong>
              </h1>
              <blockquote className="text-[#ACB0D0] hidden xl:flex items-center gap-5">
                <div className="w-[1px] h-4 bg-[#ACB0D0]"></div>
                Labelengine can be easily Integrated with the following
                platforms &<br />
                marketplaces to streamline order fulfillment for your business.
              </blockquote>
            </div>
          </div>
          <div className="grid gridCols gap-12 mt-10">
            {integrationsArray.map((integration) => (
              <figure>
                <div
                  style={{
                    background: `linear-gradient(${
                      dark ? "#090e32" : "white"
                    }, ${
                      dark ? "#090e32" : "white"
                    }) padding-box, linear-gradient(#32469B, transparent 80%) border-box`,
                  }}
                  className="h-28 gradientBorder grid place-content-center"
                >
                  <img
                    style={{
                      filter: dark ? "invert(0)" : "invert(75%)",
                    }}
                    src={integration.image}
                    alt={`${integration.title}-icon`}
                    className="integ"
                  />
                </div>
                <figcaption>
                  <h4 className="text-[#006FFF] font-semibold text-lg">
                    {integration.title}
                  </h4>
                  <p className="text-[#ACB0D0]">{integration.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="h-[52rem] sm:h-[47rem] lg:h-[30rem] bg-[#006FFF] flex flex-col items-center"
      >
        <p className="font-[Inter] tracking-[0.5rem] text-center mt-16 text-white opacity-50 uppercase">
          #1 cheap & reliable shipping labels
        </p>
        <h1 className="font-[Satoshi] text-white text-center text-3xl sm:text-4xl mt-6">
          Streamline your shipping with <strong>labelengine™</strong>
        </h1>
        <div className="flex gap-4 mt-12 flex-col w-5/6 justify-center lg:flex-row">
          {footerArray.map((feature) => (
            <figure className="flex gap-4 bg-[#0F78FF] p-4 rounded-xl border-2 border-white border-opacity-5">
              <div className="p-4 rounded-full border-2 h-fit border-white grid place-content-center border-opacity-25">
                <img src={feature.icon} className="w-8" alt={feature.title} />
              </div>
              <figcaption>
                <h4 className="font-['Satoshi'] text-lg font-bold text-white tracking-[-1px]">
                  {feature.title}
                </h4>
                <p className="text-white opacity-50">
                  {feature.desc1}
                  <br />
                  {feature.desc2}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="h-[1px] rounded-full w-[75%] opacity-20 bg-white mt-16"></div>
        <nav className="flex items-center gap-[5%] gap-y-8 w-full justify-center flex-col lg:flex-row mt-8">
          <Link to="/">
            <img src={LogoLight} alt="logo" />
          </Link>
          <div className="text-white space-x-4">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#integrations">Integrations</a>
            <Link to="/login">Tracking</Link>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex gap-4">
            {[Discord, Telegram, Instagram].map((social) => (
              <div className="rounded-full border-2 w-12 h-12 grid place-content-center">
                <img src={social} className="w-6" alt={social + "-icon"} />
              </div>
            ))}
          </div>
        </nav>
      </footer>
    </>
  );
}
//Colors: Light: #006fff Dark: #090e32
