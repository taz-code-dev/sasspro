import React from 'react'
import Heading01 from '../components/Heading01'
import Container from '../components/Container'
import Focuscard from '../components/Focuscard'
import img01 from '../assets/working01.png'
import img02 from '../assets/working02.png'
import img03 from '../assets/working03.png'
import Flex from '../components/Flex'


const Workingpart = () => {
  return (
    <section className='pt-28.25 pb-32 bg-[#F3F3F3]'>
        <Container>
            <div className="text-center">
                <Heading01 text="The Product we work with."/>
            </div>
            <Flex classname="gap-x-7.5 justify-center pt-14.5">
                <Focuscard image000={img01} headtext="Consulting" classname="pt-10! pl-8!"/>
                <Focuscard image000={img02} headtext="Security" classname="pt-10! pl-8!"/>
                <Focuscard image000={img03} headtext="Management & support" classname="pt-10! pl-8!"/>
            </Flex>    
            <div className=""></div>
        </Container>
    </section>
  )
}

export default Workingpart