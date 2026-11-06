import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Image01 from '../assets/updatepart.png'
import Paragraph01 from '../components/Paragraph01'
import Heading01 from '../components/Heading01'
import Button from '../components/Button'
import { MdOutlineEmail } from "react-icons/md";

const Updatepart = () => {
  return (
    <section className='py-40'>
      <Container>
        <Flex classname="items-center flex-wrap justify-between">
          <div className="">
            <Paragraph01 Text="OUR NEWSLETTER" classname="text-secondary!"/>
            <Heading01 text="Stay up to date" classname="pt-4.5 pb-7"/>
            <Paragraph01 Text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines." classname="w-140"/>
            <Flex classname="pt-13 gap-x-8.5">
              <div className="relative ">
                <input type="text" className='w-95.25 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ' />
               <MdOutlineEmail className='absolute top-3 left-3'/>
              </div>
              <Button text="Subscribe" classname="py-2! px-12.5"/>
            </Flex>
          </div>
          <div className="">
            <Image src={Image01}/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Updatepart