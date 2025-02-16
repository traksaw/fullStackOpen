import Part from "./Part"

const Content = ({course}) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises,0)
    console.log(total)
  return (
    <>
    {course.parts.map(course => 
        <Part key={course.id} name={course.name} exercises={course.exercises} />
        )}
    <Part name={`Total of ${total} exercises`} exercises={null} />
    </>
  )
}

export default Content