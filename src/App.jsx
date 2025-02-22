import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Order from "./Components/Order";
import Collections from "./Components/Collections";
import PopularLocalities from "./Components/PopularLocalities";
import AppDownload from "./Components/AppDownload";
import Accordiansection from "./Components/Accordiansection";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Section />
      <Order />
      <Collections />
      <PopularLocalities />
      <AppDownload />
      <Accordiansection />
      <Footer />
    </>
  );
}
