import React from 'react'

const Paragraph01 = ({classname , Text}) => {
  return (
    <p className={`text-third font-roboto text-4 font-normal ${classname}`} >{Text}</p>
  )
}

export default Paragraph01