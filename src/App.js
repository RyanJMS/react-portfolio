import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
