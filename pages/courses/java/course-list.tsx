import Content from '../../../components/Content'
import CourseListComponent from '../../../components/CourseListComponent'

const courses = [
  {
    title: "Primitive Types",
    description: "Primitive and reference data types, data structures",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Using Objects",
    description: "Learn how to create objects and define classes",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Boolean Expressions and If Statements",
    description: "Conditional statements and comparisons",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Iteration",
    description: "Using loops and arrays to iterate through data",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Classes",
    description: "Defining and creating classes",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Array",
    description: "Using the Array data structure",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "ArrayList",
    description: "Using the ArrayList data structure",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "2D Array",
    description: "Using the 2D Array data structure",
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
            <CourseListComponent key={i} title={`Unit ${i+1}: ${item.title}`} unit={i+1} description={item.description} completed={item.completed} exerciseCount={item.exerciseCount} />
          ))}
        </section>
      </Content>
    </div>
  )
}

export default Java
