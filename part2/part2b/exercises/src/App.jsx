import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    //if name already exists
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    const arrayObj = persons.concat(personObject)
    console.log(personObject)
    setPersons(arrayObj)
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {persons.map((element, index) => (
      <p key={index}>{element.name} {element.number}</p>
    ))}
    </div>
  )
}

export default App