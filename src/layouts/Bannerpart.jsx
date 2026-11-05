import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Paragraph01 from "../components/Paragraph01";
import Image from "../components/Image";
import Banner from "../assets/banner.png";
import Banline from "../assets/banimgline1.png";
import Button from "../components/Button";

const Bannerpart = () => {
  return (
    <section className="bg-[#0D554C] [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_64%)] pt-40 pb-120">
      <Container>
        <div className="relative pb-30">
          <Flex>
            <div>
              <h3 className="text-offwhite font-raleway font-bold text-lg">Business & Technologies</h3>
              <span className="absolute top-[88px] left-[186px]">
                <Image src={Banline} classname="w-78"/>
              </span>
              <h1 className="w-125 text-offwhite font-raleway font-bold text-[52px] pt-3 pb-11 leading-15">We help tech companies deliver great software</h1>
              <Paragraph01
                classname="w-139 text-offwhite! pb-11 leading-7"
                Text="Since 1999. For millions of users. We transform businesses with powerful and
                    adaptable digital solutions that satisfy the needs of today and unlock the
                    opportunities of tomorrow."
              />
              <div className="relative w-140">
                <input type="text" className="w-full outline-none py-5.5 pr-51 pl-2 bg-offwhite rounded-lg border-0 " />
                <Button text="Request for Demo" classname="absolute top-1/2 -translate-y-1/2 -right-0.5 px-6! rounded-l-none!" />
              </div>
            </div>
            <div>
              <Image src={Banner} alt="banner" classname="absolute -top-8 left-150" />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Bannerpart;
