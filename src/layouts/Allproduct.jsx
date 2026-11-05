import React from 'react'
import Container from '../components/Container'
import Heading01 from '../components/Heading01'
import Paragraph01 from '../components/Paragraph01'
import Image from '../components/Image'
import img01 from '../assets/Allproduct01.png'
import img02 from '../assets/Allproduct02.png'
import img03 from '../assets/Allproduct003.png'
import Flex from '../components/Flex'

const Allproduct = () => {
  return (
    <section className='bg-[#F3F3F3] pt-28.25 pb-17.5'>
        <Container>
            <div className="text-center flex flex-col justify-center items-center">
                <Heading01 text="All product work with
                            several devices." classname="w-92"/>
                <Paragraph01 Text="A great SaaS UI/UX design can make your product addictive and
                            uncomfortable to give up." classname="w-113.5 pt-7 pb-8.5"/>
                <Flex classname="gap-x-5">
                    <Image src={img01}/>
                    <Image src={img02}/>
                </Flex>
            </div>
            <div className="pt-14">
                <Image src={img03}/>
            </div>
        </Container>
    </section>
  )
}

export default Allproduct