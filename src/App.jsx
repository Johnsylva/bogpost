import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PostsPage } from "./PostsPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;
