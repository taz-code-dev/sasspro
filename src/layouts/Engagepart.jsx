import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Image01 from "../assets/engage01.png";
import Heading01 from "../components/Heading01";
import Paragraph01 from "../components/Paragraph01";
import Button from "../components/Button";

const Engagepart = () => {
  return (
    <section className="pt-27.5 pb-17.5">
      <Container>
        <Flex classname="items-center">
          <div className="w-1/2">
            <Image src={Image01} />
          </div>
          <div className="w-1/2">
            <Heading01
              text="Don't just engage, make it
                        engaging."
            />
            <Paragraph01
              Text="Since 1999. For millions of users. We transform businesses with powerful and
                        adaptable digital solutions."
              classname="pt-10.75 pb-8"
            />
            <Paragraph01
              Text="Psum dolor sit amet consectetur adipiscing elit Pellentesque viverra purus
                        imperdiet a Ut nisl est at ultricies neque ornare tellus tellus enim"
            />
            <Button text="Read More" classname="mt-11" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Engagepart;
