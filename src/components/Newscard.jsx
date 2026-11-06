import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Heading01 from './Heading01';
import Paragraph01 from './Paragraph01';
import Image from './Image';
import Flex from './Flex';

const Newscard = ({image000 , image001 , image002 , headtext , classname}) => {
  return (
    <section className='shadow-shawdow01 rounded-md'>
        <div className={`p-2.5 ${classname}`}>
            <Image src={image000}/>
        </div>
        <div className="p-7.5">
            <Heading01 text={headtext} classname="text-[22px]"/>
            <Flex classname="gap-x-3">
                <Flex classname="gap-x-2 items-center">
                    <Image src={image001}/>
                    <Paragraph01 Text="Carter Rosser" classname="font-roboto! font-bold! text-[14px]!"/>
                </Flex>
                <Flex classname="gap-x-2 items-center">
                    <Image src={image002} classname="w-3.5 h-3.5"/>
                    <Paragraph01 Text="24/08/2021" classname="font-roboto! text-[14px]!"/>
                </Flex>
            </Flex>
            <Paragraph01 Text="From romantic getaways to adventurous hikes, find your next..." classname="w-73 pb-6.5 pt-5.5 leading-7"/>
            <div className="text-secondary">
                <a href="#" className='text-semibold text-base font-raleway'>See More <FaAngleRight className='inline' /></a>
            </div>
        </div>
    </section>
  )
}

export default Newscard