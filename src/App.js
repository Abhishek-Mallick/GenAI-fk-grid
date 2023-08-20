import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";


import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home2 from "./components/similar";
import Recommend from "./components/recommend";

import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: "2dc2d098f1895bc848348b1c9fd575412e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
        }
      },
      onConnectionStatus: function (status) {
        if (status === "authorized") {
          window.alanBtnInstance.callProjectApi("sendGreetingMessage");
        }
      },
    });
  }, []);
  return (
    <div className="app overflow-hidden">
      <Router>
        <Header />
        <Nav />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/similar-prompt:24" element={<Recommend />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
