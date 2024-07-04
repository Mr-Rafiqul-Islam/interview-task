import React from "react";
import Heading from "../components/Heading";
// icons
import { IoPlay } from "react-icons/io5";
import Hero from "../components/layouts/Hero";
import Header1 from "../components/layouts/Header1";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <div >
      <Header1 />
      <Hero />
      <Footer/>
    </div>
  );
}

export default Home;
