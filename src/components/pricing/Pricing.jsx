import React from "react";
import Back from "../common/back/Backs";
import PriceCard from "./PriceCard";
import "./price.css";
import Faqs from "./Faqs";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faqs />
    </>
  );
};

export default Pricing;
