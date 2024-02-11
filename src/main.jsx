import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footers/Footers.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Benefits from "./pages/Benefits/Benefits.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Members from "./pages/Members/Members.jsx";
import Partners from "./pages/Partners/Partners.jsx";
import "./styles/fontawesome/css/all.css";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/members",
    element: <Members />
  },
  {
    path: "/partners",
    element: <Partners />
  },
  {
    path: "/benefits",
    element: <Benefits />
  }
]);

document.addEventListener("DOMContentLoaded", (e) => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-sine"
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
