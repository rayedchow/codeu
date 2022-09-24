import React from 'react'
import Navbar from './Navbar'

const Content = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className="mb-[50px]">{children}</div>
    </div>
  )
}

export default Content