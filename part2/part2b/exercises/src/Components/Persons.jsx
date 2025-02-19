
const Person = ({contactsToShow}) => {
  return (
    <>
    {contactsToShow.map((element, index) => (
        <p key={index}>{element.name} {element.number}</p>
      ))}
    </>
  )
}

export default Person