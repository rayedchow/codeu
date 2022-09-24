import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#130F28] fixed top-0 left-0 right-0 p-10 h-[100px] flex justify-around border-b-[#877EB4] border-b-[1px] z-10">
        <h1>Logo</h1>
        <ul className="flex space-x-10">
            <li>Courses</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar