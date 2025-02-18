/* eslint-disable react/prop-types */
import Note from './components/Note.jsx'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState('')

const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange}
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default App