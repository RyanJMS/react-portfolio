import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
