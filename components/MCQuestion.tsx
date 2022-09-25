import React, { useState } from 'react'

type Props = {
    number: number;
    title: string;
    romanOptions?: string[];
    options: string[];
    correctAnswer: string;
}

const MCQuestion = (props: Props) => {
  const [isCorrect, setAnswer] = useState(null);
  return (
    <div>
        <div className="-mb-10">
            {props.number}. {props.title}
            <ol className="list-roman">
                {props.romanOptions.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ol>
        </div>
        <ol className="flex flex-col list-alpha -space-y-5">
            {props.options.map((item, i) => (
                <li key={i} className="first:-mb-[1px]" onClick={(e) => {
                    e.preventDefault();
                    console.log(null === true)
                    if (item.match(props.correctAnswer)) {
                        setAnswer(true);
                    } else {
                        setAnswer(false);
                    }
                }}><button>{item}</button></li>
            ))}
        </ol>
        {isCorrect === true ? <p className="text-green-500">You are correct and will make $100,000 a year as a software engineer!</p> : <p className="text-red-500">You are WRONG and will never amount to anything.</p>}
    </div>
  )
}

export default MCQuestion;