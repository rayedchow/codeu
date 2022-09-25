import Content from '../../../components/Content'
import CourseListComponent from '../../../components/CourseListComponent'

export const courses = [
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
    title: "Arrays",
    description: "Using the Array data structure",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "ArrayLists",
    description: "Using the ArrayList data structure",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "2D Arrays",
    description: "Using the 2D Array data structure",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Overloading & Overriding",
    description: "Understanding overloading vs. overriding",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Inheritance with Interface and Abstract Classes",
    description: "Understanding Java class inheritance structure and implementing interface and abstract classes",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Exception Handling",
    description: "Learning how to handle errors and exceptions",
    completed: 0,
    exerciseCount: 2,
  },
  {
    title: "Multithreading",
    description: "Understanding CPU optimization and executing multiple parts of a Java program simultaneously",
    completed: 0,
    exerciseCount: 2,
  },
]

const Java = () => {
  return (
    <div>
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
