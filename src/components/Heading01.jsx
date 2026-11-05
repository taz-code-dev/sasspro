import React from 'react'

const Heading01 = ({classname , text}) => {
  return (
    <h1 className={`font-raleway font-bold text-four text-4xl leading-12 ${classname}`}>{text}</h1>
  )
}

export default Heading01