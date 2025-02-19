import { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  //fill check if filter is true, if so (or has value or not), if it does then it will filter
  const contactsToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  const addContact = (event) => {
    event.preventDefault()
    //if name already exists
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={(e) => setFilter(e.target.value)} />
      <h2>add a new</h2>
      <PersonForm
        addContact={addContact}
        newName={newName}
        handlePersonChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
        newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons contactsToShow={contactsToShow}/>
      
    </div>
  )
}

export default App