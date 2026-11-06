import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Image01 from '../assets/logo.png'
import Paragraph01 from '../components/Paragraph01'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Heading01 from '../components/Heading01'



const Footerpart = () => {
  return (
    <section className='bg-four pt-21 '>
        <Container>
            <Flex classname="justify-between pb-21">
                <div className="">
                    <Image src={Image01} classname="cursor-pointer"/>
                    <Paragraph01 Text="Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea." classname="w-90.75 text-offwhite! pt-6.5 pb-8"/>
                    <Flex classname="gap-x-3">
                        <FaFacebookF className='text-offwhite text-2xl cursor-pointer'/>
                        <FaTwitter className='text-offwhite text-2xl cursor-pointer'/>
                        <FaInstagram className='text-offwhite text-2xl cursor-pointer'/>
                    </Flex>
                </div>
                <div className="flex flex-col gap-y-3">
                    <Heading01 text="Company" classname="text-offwhite text-[24px]"/>
                    <Paragraph01 Text="About us" classname="text-offwhite! cursor-pointer"/>
                    <Paragraph01 Text="Services" classname="text-offwhite! cursor-pointer"/>
                    <Paragraph01 Text="Blog" classname="text-offwhite! cursor-pointer"/>
                </div>
                <div className="flex flex-col gap-y-3">
                    <Heading01 text="More Links" classname="text-offwhite text-[24px]"/>
                    <Paragraph01 Text="Blog Details" classname="text-offwhite! cursor-pointer"/>
                    <Paragraph01 Text="Service Details" classname="text-offwhite! cursor-pointer"/>
                    <Paragraph01 Text="Contact" classname="text-offwhite! cursor-pointer"/>
                </div>
                <div className="flex flex-col gap-y-3">
                    <Heading01 text="Contact Details" classname="text-offwhite text-[24px]"/>
                    <Paragraph01 Text="Amsterdam Netherlands" classname="text-offwhite! "/>
                    <Paragraph01 Text="+1 62 19 22 705" classname="text-offwhite!"/>
                    <Paragraph01 Text="7 Days - 8am - 10pm" classname="text-offwhite!"/>
                    <Paragraph01 Text="info@stdev.com" classname="text-offwhite! cursor-pointer"/>
                </div>
            </Flex>
            <Paragraph01 Text="© 2021 All Rights Reserved" classname="pb-3 text-offwhite! text-center"/>
        </Container>
    </section>
  )
}

export default Footerpart