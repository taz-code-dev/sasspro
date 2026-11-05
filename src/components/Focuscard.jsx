import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Heading01 from './Heading01';
import Paragraph01 from './Paragraph01';
import Image from './Image';

const Focuscard = ({image000 , headtext , classname}) => {
  return (
    <section className='shadow-shawdow01 rounded-md'>
        <div className={`p-2.5 ${classname}`}>
            <Image src={image000}/>
        </div>
        <div className="p-7.5">
            <Heading01 text={headtext} classname="text-[22px]"/>
            <Paragraph01 Text="Psum dolor sit amet, consectetur
                        adipiscing elit. Nisi, maecenas orci sit
                        pellentesque eget." classname="w-67 pb-6.5 pt-5.5 leading-7"/>
            <div className="text-secondary">
                <a href="#" className='text-semibold text-base font-raleway'>See More <FaAngleRight className='inline' /></a>
            </div>
        </div>
    </section>
  )
}

export default Focuscard