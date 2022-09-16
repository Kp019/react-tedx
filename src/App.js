import Navbar from "./components/navbar/Navbar";
import React from "react";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Speaker from "./components/Speakers/speaker";
import Proevents from "./components/proevents/proevents";
import Schedule from "./components/schedule/Schedule";
import Newspeaker from "./components/new-speaker/Newspeaker";
import Pricing from "./components/pricing/Pricing";
import Ourblog from "./components/ourblog/ourblog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Speaker />
      <Proevents />
      <Schedule />
      <Newspeaker />
      <Pricing />
      <Ourblog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
