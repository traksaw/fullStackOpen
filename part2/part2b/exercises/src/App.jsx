import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])


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