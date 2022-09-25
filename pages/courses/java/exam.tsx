import { useState, useRef } from "react";
import Content from "../../../components/Content"
import questions from '../../../data/diagnosticExam.json'
import Editor from "@monaco-editor/react";
import { languages, editor } from "monaco-editor/esm/vs/editor/editor.api"
import { compileAnswers, compileInput } from "../../../data/compileQuestion";
import Link from "next/link";
const Exam = () => {
	const editorRef = useRef(null);
	const [queNum, setQueNum] = useState(1);
	const [currAns, setAns] = useState(null);
	const [answers, setAnswers] = useState([]);
	const [examComplete, setComplete] = useState(false);
	const [examData, setExamData] = useState(null);
	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
		monaco.editor.defineTheme('myTheme', {
			base: 'vs',
			inherit: false,
			rules: [{ background: '161730', borderRadius: '15px' }],
			colors: {
				'editor.foreground': '#FFFFFF',
				'editor.background': '#1C1D37',
				'editorCursor.foreground': '#FFFFFF',
				'editor.lineHighlightBackground': '#0000FF20',
				'editorLineNumber.foreground': '#FFFFFF',
				'editorLineNumber.activeForeground': '#FFFFFF',
				'editor.selectionBackground': '#88000030',
				'editor.inactiveSelectionBackground': '#88000015'
			}
		});
		monaco.editor.setTheme('myTheme');
	}

	const nextQuestion = () => {
		if(questions[queNum-1].type === 1) setAnswers(answers.concat(currAns));
		else {
			setAnswers(answers.concat(editorRef.current?.getValue()));
		}
		setQueNum(queNum+1);
		setAns(null);
	}
	console.log(questions[queNum-1]);

	const isLastQuestion = (queNum === questions.length);

	const completeExam = () => {
		setExamData(compileAnswers(answers));
		setComplete(true);
	}
	
	if(examComplete) {
		return (
			<div>
			<Content>
				<section className="relative bg-[#130F28] w-[60rem] min-h-[30rem] m-auto rounded-xl mt-[50px] p-5">
					You got a {(examData.correct/examData.total)*100}% on the exam.
					Here is a list of topics you need to work on:
					{examData.incorrect.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</section>
			</Content>
			</div>
		)
	}
	return (
		<div>
			<Content>
				<section className="relative bg-[#130F28] w-[60rem] min-h-[30rem] m-auto rounded-xl mt-[50px]">
					<div className="p-5">
						<div>
							{queNum}. {questions[queNum-1].question}
						</div>
						{(questions[queNum-1].type == 1) ? 
							<ol className="flex flex-col list-alpha -space-y-3 ml-5">
								{questions[queNum-1].options.map((item, i) => (
									<li key={i} className="first:-mb-[1px]" ><button className={(currAns == i) ? "submit" : ""} onClick={(e) => {
										e.preventDefault();
										setAns(i)
									}}>{item}</button></li>
								))}
							</ol>
							: <Editor
							    onMount={handleEditorDidMount}
								height="30vh"
								theme="vs-dark"
								defaultLanguage="java"
								defaultValue="// your answer here"
								className="mt-10"
							/>
							
							// <textarea className="w-full mt-5 bg-[#2C2556] rounded focus:outline-none p-5" />
						}

						{isLastQuestion ? 
							<button onClick={() => completeExam()}>Complete Exam</button>	
							:
							<button onClick={() => nextQuestion()}>Next Question</button>
						}
					</div>
				</section>
			</Content>
		</div>
	)
}

export default Exam