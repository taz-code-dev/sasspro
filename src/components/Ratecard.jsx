import React from "react";
import Image from "./Image";
import Flex from "./Flex";

const Ratecard = ({Image00 , text1 , text2}) => {
  return (
    <Flex classname="gap-5">
      <div className="">
        <Image src={Image00} />
      </div>
      <div className="">
        <h2 className="font-inter font-bold text-secondary text-3xl pb-1 pt-1">{text1}</h2>
        <p className="font-raleway font-bold text-third text-base">{text2}</p>
      </div>
    </Flex>
  );
};

export default Ratecard;
