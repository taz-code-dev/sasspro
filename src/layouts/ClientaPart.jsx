import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Image01 from "../assets/clinticon02.png";
import Image02 from "../assets/clientimg01.png";
import Image03 from "../assets/clientimg02.png";
import Heading01 from "../components/Heading01";
import Paragraph01 from "../components/Paragraph01";
import Clientcard from "../components/Clientcard";

const ClientaPart = () => {
  return (
    <section className="pt-30 pb-34 bg-[#F3F3F3]">
      <Container>
        <Flex classname="items-center">
          <div className="w-4/10">
            <Image src={Image01} />
            <Heading01 text="What our clients say about us" classname="py-7" />
            <Paragraph01 Text="Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit." />
          </div>
          <div className="6/10 pl-7">
            <Flex classname="gap-x-7.5">
              <Clientcard name0="Davis Lubin" Image0002={Image02} />
              <Clientcard name0="Leslie Alexander" Image0002={Image03} />
            </Flex>
            
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ClientaPart;
