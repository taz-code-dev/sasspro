import React from 'react'
import Navebar from '../layouts/Navebar'
import Footerpart from '../layouts/Footerpart'
import Focuspart from '../layouts/Focuspart'

const pages = () => {
  return (
    <>
    <Navebar classname='mb-20'/>
    <Focuspart/>
    <Footerpart/>
    </>
  )
}

export default pages