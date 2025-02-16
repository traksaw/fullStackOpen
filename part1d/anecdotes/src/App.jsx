/* eslint-disable react/prop-types */
import { useState } from 'react'

const Header = ({text}) => {
 return (
  <>
  <h1>{text}</h1>
  </>
 )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    let newAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(newAnecdote)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy)
  }

  return (
    <div>
     <Header text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <button onClick={voteAnecdote}>Vote</button>

      <Header text='Anecdote with most votes'/>

      {votes.some((vote) => vote > 0) ? (
        <p>{anecdotes[votes.indexOf(Math.max(...votes))]}<br/> 
        {/* if a vote is greater than one, we will get the element's index */}
        Votes: {Math.max(...votes)}</p> ) : ( 
          <p>No Votes yet</p>
      )}
    </div>
  )
}

export default App