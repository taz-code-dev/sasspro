import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Newscard from '../components/Newscard'
import Image01 from '../assets/newpartimg01.png'
import Image02 from '../assets/newpartimg02.png'
import Image03 from '../assets/newpartimg03.png'
import Image04 from '../assets/newpartimg04.png'
import Image05 from '../assets/newpartimg05.png'
import Image06 from '../assets/newpartimg06.png'
import Image07 from '../assets/newpartimg07.png'
import Heading01 from '../components/Heading01'

const Newspart = () => {
  return (
    <section className='bg-[#F3F3F3] py-30'>
        <Container>
            <div className="text-center pb-14">
                <Heading01 text="Recent News & Articles"/>
            </div>
            <Flex classname="justify-between">
                <Newscard headtext="Where Should I Buy Next?" image000={Image01} image001={Image04} image002={Image07}/>
                <Newscard headtext="Malesuada Fermentum Tortor" image000={Image02} image001={Image05} image002={Image07}/>
                <Newscard headtext="Magna Malesuada" image000={Image03} image001={Image06} image002={Image07}/>
            </Flex>
        </Container>
    </section>
  )
}

export default Newspart