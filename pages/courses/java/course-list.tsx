import Content from '../../../components/Content'
import CourseListComponent from '../../../components/CourseListComponent'

const courses = [
  {
    title: "Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Objects",
    description: "Learn how to create objects and define classes",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Boolean Expressions and If Statements",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Iteration",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Arrays",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 4,
  },
  {
    title: "2D Array",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Inheritance",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Recursion",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
]

const Java = () => {
  return (
    <div>
      {/* <CodeEditorWindow onChange={undefined} language={"java"} code={undefined} theme={"dark"} /> */}
      {/* <div className="sm:w-[70rem] bg-[#130F28] lg:h-[40rem] sm:h-[60rem] rounded-xl">
        Lessono 1
      </div> */}
      <Content>
        <section className="relative bg-[#130F28] w-[60rem] m-auto rounded-xl mt-[50px]">
          {courses.map((item, i) => (
            <CourseListComponent key={i} title={`Unit ${i}: ${item.title}`} description={item.description} completed={item.completed} exerciseCount={item.exerciseCount} />
          ))}
        </section>
      </Content>
    </div>
  )
}

export default Java
