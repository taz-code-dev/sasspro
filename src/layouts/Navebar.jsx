import React from "react";
import Listitem from "../components/Listitem";
import Button from "../components/Button";
import Image from "../components/Image";
import tax from "../assets/logo.png";
import Container from "../components/Container";
import Flex from "../components/Flex";

const Navebar = () => {
  return (
    <>
      <nav className="bg-[#0D554C]">
        <Container>
          <Flex classname="justify-between">
            <div className="py-5">
              <Image src={tax} alt="logo" />
            </div>
            <div className="flex gap-8.5 items-center">
              <ul className="flex gap-7.5 items-center">
                <Listitem text="Home" icon={true} />
                <Listitem text="Pages" icon={true} />
                <Listitem text="About Us" />
                <Listitem text="Services" />
                <Listitem text="Blog" />
                <Listitem text="Contact" />
              </ul>
              <Button text="Let's talk" classname="py-2.5! px-6!"/>
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navebar;
