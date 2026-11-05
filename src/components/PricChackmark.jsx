import React from "react";
import Paragraph01 from "./Paragraph01";
import { FaCheck } from "react-icons/fa6";
import Flex from "./Flex";

const PricChackmark = ({ text }) => {
  return (
      <Flex classname="gap-x-2 items-center pb-7">
        <FaCheck className="text-secondary" />
        <Paragraph01 Text={text} />
    </Flex>
  );
};

export default PricChackmark;
