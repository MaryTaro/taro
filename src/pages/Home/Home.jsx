import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Taro from "../../components/Prices/Taro";
import Reiki from "../../components/Prices/Reiki";
import Matrica from "../../components/Prices/Matrica";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Taro />
      <Reiki />
      <Matrica />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
