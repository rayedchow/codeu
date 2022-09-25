import Link from 'next/link'
import React from 'react'
import { courses } from "../pages/courses/java/course-list"

const LessonList = () => {
  return (
    <div className="relative bg-[#130F28] w-full m-auto rounded-xl mt-[50px]">
        {courses.map((item, i) => (
            <Link href={`/courses/java/lesson/${i+1}`} key={i}>
                <div className="w-full h-[5rem] flex space-x-10 items-center px-10 border-b-[1px] border-b-[#302A4E] cursor-pointer hover:bg-[#1A1535]" 
                key={i}>
                    <h1>LESSON</h1>
                    <h1>{item.title}</h1>
                </div>
            </Link>
        ))}
    </div>
  )
}
export default LessonList;