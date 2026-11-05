import React from 'react'
import Paragraph01 from './Paragraph01'
import Image from './Image'
import Image01 from '../assets/clinticon01.png'
import Flex from './Flex'
import Heading01 from './Heading01'

const Clientcard = ({Image0002 , name0}) => {
  return (
    <div className="shadow-shawdow01 rounded-md bg-offwhite relative">
        <div className="absolute -top-8 left-30.5">
            <Image src={Image01}/>
        </div>
        <Paragraph01 Text="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi." classname="w-60.5 ml-7.5 mr-10.5 pt-15"/>
        <Flex classname="gap-x-7 items-center p-7.5">
            <div className="">
                <Image src={Image0002}/>
            </div>
            <div className="pb-5">
                <Heading01 text={name0} classname="font-semibold! text-[18px]"/> 
                <Paragraph01 Text="CEO of Fashionon" classname="leading-1"/>
            </div>
        </Flex>
    </div>
  )
}

export default Clientcard