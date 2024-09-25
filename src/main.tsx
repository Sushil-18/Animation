import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Challenge from "./pages/Challenge.tsx";
import Error from "./pages/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/challenges",
    element: <Challenge />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
