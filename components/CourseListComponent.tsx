import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    description: string;
    completed: number;
    exerciseCount: number;
    unit: number;
}

const CourseListComponent = (props: Props) => {
  return (
    <div className="w-[60rem] h-[10rem] flex justify-between items-center px-10 border-b-[1px] border-b-[#302A4E]">
        <div className="flex space-x-5 items-center">
            <img src="/javaIcon.svg" />
            <div>
                <h1 className="text-2xl">{props.title}</h1>
                <p>{props.description}</p>
                <p className="text-[#877EB4]">{props.completed} out of {props.exerciseCount} completed</p>
            </div>
        </div>
        <Link href={`/courses/java/lesson/${props.unit}`}>
            <button className="flex justify-around items-center text-md">
                <p>Start</p>
                <img src="/arrow.svg" />
            </button>
        </Link>
    </div>
  )
}

export default CourseListComponent