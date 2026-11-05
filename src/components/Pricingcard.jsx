import React from "react";
import Flex from "./Flex";
import PricChackmark from "./PricChackmark";
import Button from "./Button";

const Pricingcard = ({btntext , priceh3 , pricedolar , pricetime}) => {
  return (
    <section className="shadow-shawdow01 rounded-md">
      <div className="pt-12.5 px-7.5">
        <h3 className="font-raleway font-bold text-2xl text-four">{priceh3}</h3>
        <Flex classname="items-end pt-1.5 pb-10 w-76.5 border-b border-secondary">
          <h1 className="font-inter font-bold text-5xl text-four">{pricedolar}</h1>
          <span className="font-roboto font-semibold text-secondary">{pricetime}</span>
        </Flex>
      </div>
      <div className="pt-9 pb-10 pl-7.5">
        <PricChackmark text="Access to editing all blocks"/>
        <PricChackmark text="Editing blocks together"/>
        <PricChackmark text="Access to all premium icons"/>
        <PricChackmark text="A dedicated domain"/>
        <Button text={btntext}/>
      </div>
    </section>
  );
};

export default Pricingcard;
