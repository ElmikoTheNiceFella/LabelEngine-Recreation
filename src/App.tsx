import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loading from "./Loading";
const LandingPage = lazy(() => import("./components/LandingPage"));
const Navbar = lazy(() => import("./components/Navbar"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ShippingCalc = lazy(() => import("./components/ShippingCalc"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const Error404 = lazy(() => import("./components/Error404.tsx"));
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage dark={dark} />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login dark={dark} />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register dark={dark} />
            </Suspense>
          }
        />
        <Route
          path="/shipping-calculator"
          element={
            <Suspense fallback={<Loading />}>
              <ShippingCalc dark={dark} />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<Loading />}>
              <ForgotPassword dark={dark} />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<Loading />}>
              <Error404 dark={dark} />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
