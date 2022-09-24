import type { NextPage } from 'next'
import CodeEditorWindow from '../components/CodeEditor'
import Content from '../components/Content'
import CourseListComponent from '../components/CourseListComponent'
import Navbar from '../components/Navbar'

const courses = [
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
  {
    title: "Unit 2: Objects and Classes",
    description: "Learn how to create objects and define classes",
    completed: 0,
    exerciseCount: 25,
  },
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
  {
    title: "Unit 1: Java Basics",
    description: "Primitive and reference data types, data structures",
    completed: 2,
    exerciseCount: 10,
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      {/* <CodeEditorWindow onChange={undefined} language={"java"} code={undefined} theme={"dark"} /> */}
      {/* <div className="sm:w-[70rem] bg-[#130F28] lg:h-[40rem] sm:h-[60rem] rounded-xl">
        Lessono 1
      </div> */}
      <Content>
        <section className="relative bg-[#130F28] w-[60rem] m-auto rounded-xl">
          {courses.map((item, i) => (
            <CourseListComponent key={i} title={item.title} description={item.description} completed={item.completed} exerciseCount={item.exerciseCount} />
          ))}
        </section>
      </Content>
    </div>
  )
}

export default Home
