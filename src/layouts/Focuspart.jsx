import React from 'react'
import Container from '../components/Container'
import Heading01 from '../components/Heading01'
import Flex from '../components/Flex'
import Focuscard from '../components/Focuscard'
import img01 from '../assets/focus01.png'
import img02 from '../assets/focus02.png'
import img03 from '../assets/focus03.png'
import img04 from '../assets/focus04.png'
import img05 from '../assets/focus05.png'
import img06 from '../assets/focus06.png'

const Focuspart = () => {
  return (
    <section className='mb-38'>
        <Container>
            <div className="text-center pb-14.5">
                <Heading01 text='Industries in focus'/>
            </div>
            <Flex classname="gap-x-6 gap-y-7 flex-wrap">
                <Focuscard image000={img01} headtext="FinTech"/>
                <Focuscard image000={img02} headtext="Telecom"/>
                <Focuscard image000={img03} headtext="Retail"/>
                <Focuscard image000={img04} headtext="Transportation"/>
                <Focuscard image000={img05} headtext="eLearning"/>
                <Focuscard image000={img06} headtext="Artificial Intelligence"/>
            </Flex>
        </Container>
    </section>
  )
}

export default Focuspart