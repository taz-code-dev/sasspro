import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Listitem = ({text , icon , classname}) => {
  return (
    <li className={`text-base font-medium text-primary font-inter inline-block cursor-pointer hover:[text-shadow:var(--shadow-shawdow01)] hover:rounded ${classname}`}>{text} {icon?<FaAngleDown className='inline-block' />: ""}</li>
  )
}

export default Listitem