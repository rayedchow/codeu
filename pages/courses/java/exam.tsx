import { useState } from "react";
import Content from "../../../components/Content"
import questions from '../../../data/diagnosticExam.json'

const Exam = () => {

	const [queNum, setQueNum] = useState(1);
	const [currAns, setAns] = useState(null);

	console.log(questions[queNum-1]);

	return (
		<div>
			<Content>
				<section className="relative bg-[#130F28] w-[60rem] min-h-[30rem] m-auto rounded-xl mt-[50px]">
				<div>
					<div className="-mb-10">
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
				: <p>Input here</p>
				}
				</div>
				</section>
			</Content>
		</div>
	)
}

export default Exam