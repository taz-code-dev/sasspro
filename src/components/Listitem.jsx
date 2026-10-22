import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Listitem = ({text , icon , classname}) => {
  return (
    <li className={`text-base font-medium text-black font-inter inline-block ${classname}`}>{text} {icon?<FaAngleDown className='inline-block' />: ""}</li>
  )
}

export default Listitem