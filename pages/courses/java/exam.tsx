import Content from '../../../components/Content'
import MCQuestion from '../../../components/MCQuestion'

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
						Primitive types are this and they do that. Some examples are:
					</p>
					<ul role="list">
						<li>Being primitive.</li>
						<li>Being types.</li>
						<li>Not being reference types.</li>
					</ul>
					<p>
						Here is a question that will test your knowledge on what was just said.
					</p>
					<MCQuestion number={1} title="Primitive types are..." romanOptions={["Primitive", "Reference types", "A data structure"]} options={["I only", "II and III", "III only", "None"]} correctAnswer="III only" />
					<div className="bg-black text-white p-5 h-[200px]">
						Code here
					</div>
					</div>
				</div>
				</div>
      		</Content>
		</div>
	)
}
  
export default Question