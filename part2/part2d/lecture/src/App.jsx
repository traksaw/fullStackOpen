import Note from "./Components/Note"
import axios from 'axios'
import { useEffect, useState } from "react"

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNotes] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    console.log('note was added')
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }
  
  
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
        setNotes(notes.concat(response.data))
        setNewNotes('')
      })
  }
//handles the input value
  const handleNoteChange = (event) => {
    setNewNotes(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
  }

useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/notes')
    .then(response => {
    console.log('promise fulfilled')
    setNotes(response.data)
  })
}, [])

  console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
        <Note 
        key={note.id} 
        note={note} 
        toggleImportance={() => toggleImportanceOf(note.id)}
        />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App