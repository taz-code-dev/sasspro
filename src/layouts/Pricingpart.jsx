import React, { useState } from "react";
import Container from "../components/Container";
import Heading01 from "../components/Heading01";
import Flex from "../components/Flex";
import Pricingcard from "../components/Pricingcard";

const Pricingpart = () => {

    let[over,setover]=useState(true)
    let handelpricpart=()=>{
        setover(!over)
    }

  return (
    <section className="pt-28.25 pb-30">
      <Container>
        <div className="text-center">
          <Heading01 text="Affordable Pricing" />
          <Flex classname="gap-x-6 justify-center items-center pt-9">
            <span>Monthly</span>
            <div onClick={handelpricpart} className={`w-22.5 h-10 bg-secondary rounded-full p-1 cursor-pointer flex ${over? "justify-start": "justify-end"}`}>
              <div className="w-7.5 bg-offwhite rounded-full"></div>
            </div>
            <span className="text-secondary">Annualy</span>
          </Flex>
        </div>
        <div className="flex flex-col gap-y-7 pt-10">
            {
                over ?
                <Flex classname="flex gap-x-6 justify-center">
                    <Pricingcard btntext="Try for Free" priceh3="Free Plan" pricedolar="$0" pricetime="/ monthly"/>
                    <Pricingcard btntext="Buy Now" priceh3="Premium Plan" pricedolar="$599" pricetime="/ year"/>
                    <Pricingcard btntext="Buy Now" priceh3="Business Plan" pricedolar="$999" pricetime="/ year"/>
                </Flex>
                :
                <Flex classname="flex gap-x-6 justify-center">
                    <Pricingcard btntext="Try for Free" priceh3="Free Plan" pricedolar="$0" pricetime="/ monthly"/>
                    <Pricingcard btntext="Buy Now" priceh3="Premium Plan" pricedolar="$499" pricetime="/ year"/>
                    <Pricingcard btntext="Buy Now" priceh3="Business Plan" pricedolar="$799" pricetime="/ year"/>
                </Flex>
            }
          
        </div>
      </Container>
    </section>
  );
};

export default Pricingpart;
