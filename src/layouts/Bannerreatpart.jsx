import React from "react";
import Heading01 from "../components/Heading01";
import Flex from "../components/Flex";
import { IoStar } from "react-icons/io5";
import Container from "../components/Container";
import Image1 from "../assets/rateimg01.png";
import Image2 from "../assets/rateimg02.png";
import Image3 from "../assets/rateimg03.png";
import Ratecard from "../components/Ratecard";

const Bannerreatpart = () => {
  return (
    <section className="relative -top-90 z-10 -mb-38">
      <Container>
        <div className="p-12.5 bg-primary rounded shadow-[0_0px_17px_#2C83BB]">
          <div className=" border-b-2 border-[rgba(17,47,66,0.1)] pb-10">
            <Flex classname="justify-between">
              <div className="">
                <p className="font-raleway font-bold text-secondary text-sm pb-4.5">Who we are?</p>
                <Heading01
                  classname="w-187.5"
                  text="More than 5,000 users around the world are
                    already using STDEV actively"
                />
              </div>
              <div className="bg-[#CFDDDB] flex flex-col justify-center items-center p-11 rounded">
                <h1 className="font-bold text-four text-6xl pb-2">4.8</h1>
                <Flex classname="gap-1 text-[#FF7282]">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </Flex>
                <p className="font-roboto font-normal text-base text-[#495E6C] pt-2.5">35 Reviews</p>
              </div>
            </Flex>
          </div>
          <div className="py-4">
            <Flex classname='justify-between'>
                <Ratecard Image00={Image1} text1='70+' text2='Professionals'/>
                <Ratecard Image00={Image2} text1='22Years' text2='Year of experience'/>
                <Ratecard Image00={Image3} text1='$40+M' text2='Fundraised by customers'/>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bannerreatpart;
