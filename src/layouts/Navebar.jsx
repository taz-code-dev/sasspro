import React from "react";
import Listitem from "../components/Listitem";
import Button from "../components/Button";
import Image from "../components/Image";
import tax from "../assets/logo.png";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";

const Navebar = ({classname}) => {
  return (
    <>
        <nav className={`bg-[#0D554C] ${classname}`}>
        <Container>
          <Flex classname="justify-between">
            <div className="py-5">
              <Image src={tax} alt="logo" />
            </div>
            <div className="flex gap-8.5 items-center">
              <ul className="flex gap-7.5 items-center">
                <Link to="/"><Listitem text="Home" icon={true} /></Link>
                <Link to="/pages"><Listitem text="Pages" icon={true} /></Link>
                <Link to="/about"><Listitem text="About Us" /></Link>
                <Link to="/services"><Listitem text="Services" /></Link>
                <Link to="/blog"><Listitem text="Blog" /></Link>
                <Link to="/contact"><Listitem text="Contact" /></Link>
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
