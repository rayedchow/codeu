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
        <div className="absolute w-[1700px]  flex justify-center items-center flex-col text-[1rem]">
            <div><a href="https://devpost.com/software/codeu" target="_black">Double-Award <span className="text-[#0284c7]">Hackathon</span> Winner</a></div>
            <div><a href="https://github.com/voomp/codeu" target="_black">Made using <span className="text-[#0284c7]">Github</span></a></div>
        </div>
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