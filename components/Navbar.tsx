import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#130F28] top-0 left-0 right-0 p-10 h-[100px] flex justify-between items-center border-b-[#877EB4] border-b-[1px] z-10">
        <Link href="/">
            <a>
                <img src="/logo.svg" className="h-[35px]" />
            </a>
        </Link>
        <ul className="flex space-x-10">
            <Link href="/courses/java/course-list">
                <a>
                    <li>Lessons</li>
                </a>
            </Link>
            <Link href="/courses/java/exam">
                <a>
                    <li>Exam</li>
                </a>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar