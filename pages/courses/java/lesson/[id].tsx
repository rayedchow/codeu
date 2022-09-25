import Content from '../../../../components/Content'
// import MCQuestion from '../../../../components/MCQuestion'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import lessons from '../../../../data/lessons.json';
import ReactHTMLParser from 'react-html-parser'
import Link from 'next/link';
import { useState } from 'react';

const Question = ({ id }: InferGetServerSidePropsType<GetServerSideProps>) => {
	const lesson = lessons[id-1];
	const isLastLesson = (lessons.length == id);
	
	const [isCorrect, setAnswer] = useState(null);
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div>
			<Content>
			<div className="relative py-16 overflow-hidden">
				<div className="relative px-4 sm:px-6 lg:px-8">
					<div className="text-lg max-w-prose mx-auto">
						<h1>
							<span className="block text-white text-base font-semibold tracking-wide uppercase">
							Lesson
							</span>
							<span className="mt-2 block text-4xl leading-8 font-extrabold text-white tracking-tight sm:text-6xl">
							{lesson.unit}
							</span>
						</h1>
					</div>
					<div className="mt-6 prose prose-indigo prose-lg mx-auto">
					<p>
						{lesson.text.map((value) => {
							return <span>{ReactHTMLParser(value)}<br /></span>;
						})}
					</p>
					{/* <MCQuestion number={1} question={lesson.question} /> */}
					<div className="-mb-10">
						1. {lesson.question.question}
					</div>
					<ol className="flex flex-col list-alpha -space-y-5">
						{lesson.question.options.map((item, i) => (
							<li key={i} className="first:-mb-[1px]" ><button className={(isCorrect == i) ? "submit" : ""} onClick={(e) => {
								e.preventDefault();
								setAnswer(i)
							}}>{item}</button></li>
						))}
					</ol>
					<button className="submit" onClick={() => setShowAnswer(true)}>Submit</button>
					{showAnswer ? <>
						{(isCorrect == lesson.question.answer) ? <p className="text-green-500">Correct!</p> : <p className="text-red-500">Incorrect</p>}
						<p>{ReactHTMLParser(lesson.question.explanation)}</p>
					</> : <></>}
					{/* <div className="bg-black text-white p-5 h-[200px]">
						Code here
					</div> */}
					{isLastLesson ? 
						<Link href="/courses/java/exam">
							<button className="submit flex justify-evenly items-center text-md">
								<p>Start Exam</p>
								<img src="/arrow.svg" />
							</button>
						</Link>
						
					 :
						<Link href={`/courses/java/lesson/${parseInt(id)+1}`}>
							<button className="submit flex justify-evenly items-center text-md" onClick={() => {setShowAnswer(false); setAnswer(null)}}>
								<p>Next Lesson</p>
								<img src="/arrow.svg" />
							</button>
						</Link>
					}
					
					<p><i>All lessons are from <a href="https://longbaonguyen.github.io/courses/apcsa/apjava.html" target="_blank">https://longbaonguyen.github.io/courses/apcsa/apjava.html</a></i></p>
					</div>
				</div>
				</div>
      		</Content>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async(context) => {
	return { props: { id: context.query.id } };
}
  
export default Question