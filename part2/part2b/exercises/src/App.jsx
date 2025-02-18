import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //if name already exists
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      name: newName
    }
    const arrayObj = persons.concat(personObject)
    setPersons(arrayObj)
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {persons.map((element, index) => (
      <p key={index}>{element.name}</p>
    ))}
    </div>
  )
}

export default App