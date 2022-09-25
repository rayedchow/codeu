import React, { useState } from 'react'

type Props = {
    number: number
    question: {
        question: string
        options: string[],
        answer: number
        explanation: string
    }
}

const MCQuestion = (props: Props) => {
  const [isCorrect, setAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div>
        <div className="-mb-10">
            {props.number}. {props.question.question}
            {/* <ol className="list-roman">
                {props.romanOptions.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ol> */}
        </div>
        <ol className="flex flex-col list-alpha -space-y-5">
            {props.question.options.map((item, i) => (
                <li key={i} className="first:-mb-[1px]" ><button className={(isCorrect == i) ? "submit" : ""} onClick={(e) => {
                    e.preventDefault();
                    setAnswer(i)
                }}>{item}</button></li>
            ))}
        </ol>
        <button className="submit" onClick={() => setShowAnswer(true)}>Submit</button>
        {showAnswer ? <>
            {(isCorrect == props.question.answer) ? <p className="text-green-500">Correct!</p> : <p className="text-red-500">Incorrect</p>}
            {props.question.explanation}
        </> : <></>}
    </div>
  )
}

export default MCQuestion;