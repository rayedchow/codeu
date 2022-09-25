import { useState, useRef } from "react";
import Content from "../../../components/Content"
import questions from '../../../data/diagnosticExam.json'
import Editor from "@monaco-editor/react";
import { languages, editor } from "monaco-editor/esm/vs/editor/editor.api"
const Exam = () => {
	const editorRef = useRef(null);
	const [queNum, setQueNum] = useState(1);
	const [currAns, setAns] = useState(null);
	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
		monaco.editor.defineTheme('myTheme', {
			base: 'vs',
			inherit: false,
			rules: [{ background: '464986', borderRadius: '15px' }],
			colors: {
				'editor.foreground': '#FFFFFF',
				'editor.background': '#323568',
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
	function showValue() {
		alert(editorRef.current?.getValue());
	}
	console.log(questions[queNum-1]);
	

	return (
		<div>
			<Content>
				<section className="relative bg-[#130F28] w-[60rem] min-h-[30rem] m-auto rounded-xl mt-[50px]">
					<div className="p-5">
						<div>
							{queNum}. {questions[queNum-1].question}
						</div>
						{(questions[queNum-1].type == 1) ? 
							<ol className="flex flex-col list-alpha -space-y-5">
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
								className="max-h-[500px] mt-10"
							/>
							
							// <textarea className="w-full mt-5 bg-[#2C2556] rounded focus:outline-none p-5" />
						}
						<button onClick={showValue}>Run</button>
					</div>
				</section>
			</Content>
		</div>
	)
}

export default Exam