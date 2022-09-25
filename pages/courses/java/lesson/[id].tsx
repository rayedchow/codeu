import Content from '../../../../components/Content'
import MCQuestion from '../../../../components/MCQuestion'

const Question = () => {
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
							Unit 1: Primitive Types
							</span>
						</h1>
					</div>
					<div className="mt-6 prose prose-indigo prose-lg mx-auto">
					<p>
						A type is a set of values (e.g. integers, floaters, etc.) and a set of operations (e.g. +, -, *, /, etc.) on them.<br /><br />
						Data types can be categorized as either <b>primitive</b> or <b>reference</b>.<br /><br />

						The primitive types used in this course define the set of operations for numbers and boolean (true/false) values. <br />
						Examples are:<br />
					</p>
					<ul role="list">
						<li><b>int</b> - stores integers (whole numbers like 5, 84, -49893</li>
						<li><b>double</b> - stores floating point numbers (decimal numbers like 6.3, -0.9, 60931.89479</li>
						<li><b>boolean</b> - stores Boolean values (either true or false)</li>
					</ul>
					<p>
						Here is a question that .
					</p>
					<MCQuestion number={1} title="Primitive types are..." romanOptions={["Primitive", "Reference types", "A data structure"]} options={["I only", "II and III", "III only", "None"]} correctAnswer="III only" />
					<div className="bg-black text-white p-5 h-[200px]">
						Code here
					</div>
					<br />
					<button className="submit">Next lesson</button>
					<p><i>All lessons are from <a href="https://longbaonguyen.github.io/courses/apcsa/apjava.html" target="_blank">https://longbaonguyen.github.io/courses/apcsa/apjava.html</a></i></p>
					</div>
				</div>
				</div>
      		</Content>
		</div>
	)
}
  
export default Question