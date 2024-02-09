import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footers/Footers.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import "./styles/fontawesome/css/all.css";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
