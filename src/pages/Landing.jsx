import React from "react";
import { useEffect } from "react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductListing } from "../components/ProductListing";
import { Promo } from "../components/Promo";
import { TopCategories } from "../components/TopCategories";
import useLanding from "../talons/useLanding";

const Landing = () => {
  const { fetchData, promo, offers, products, footer } = useLanding();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Promo data={promo} />
      <TopCategories />
      <Promo data={offers} />
      <ProductListing data={products} />
      <Footer data={footer} />
    </div>
  );
};

export default Landing;
