import React from 'react'

type Props = {
    title: string;
    description: string;
    completed: number;
    exerciseCount: number;
}

const CourseListComponent = (props: Props) => {
  return (
    <div className="w-[60rem] h-[10rem] flex justify-between items-center px-10 border-b-[1px] border-b-[#302A4E]">
        <div className="flex space-x-5 items-center">
            <img src="/javaIcon.svg" />
            <div>
                <h1 className="text-2xl font-title">{props.title}</h1>
                <p>{props.description}</p>
                <p>{props.completed} out of {props.exerciseCount} completed</p>
            </div>
        </div>
        <button className="flex justify-around items-center text-md">
            <p>Start</p>
            <img src="/arrow.svg" />
        </button>
    </div>
  )
}

export default CourseListComponent