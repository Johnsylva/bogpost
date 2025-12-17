import axios from "axios";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { PostsIndexPage } from "./PostsIndexPage";
import { PostsNewPage } from "./PostsNewPage";
import { PostsShowPage } from "./PostsShowPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://blog-backend-xnlo.onrender.com"; // Replace with YOUR Render URL

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsIndexPage />,
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />,
      },
      {
        path: "/posts/:id",
        element: <PostsShowPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
