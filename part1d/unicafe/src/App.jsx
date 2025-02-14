/* eslint-disable react/prop-types */
import { useState } from 'react'


const Heading = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Content = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Statistics = ({good, bad, neutral, all, average, percentage}) => {
  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <Heading title="Statistics" />
      <Content text="good" value={good} />
      <Content text="neutral" value={neutral} />
      <Content text="bad" value={bad} />
      <Content text="all" value={all} />
      <Content text="average" value={average} />
      <Content text="positive feedback" value={percentage} />
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const handleFeedback = (type) => {
    const newGood = type === 'good' ? good + 1 : good
    const newNeutral = type === 'neutral' ? neutral + 1 : neutral
    const newBad = type === 'bad' ? bad + 1 : bad
    const newAll = all + 1

    const newAverage = (newGood - newBad) / newAll
    const newPercentage = (newGood / newAll) / 100

    setGood(newGood)
    setNeutral(newNeutral)
    setBad(newBad)
    setAll(newAll)
    setAverage(newAverage)
    setPercentage(newPercentage)
  }


  return (
    <div>
      <Heading title='Give Feedback' />
      <Button onClick={() => handleFeedback('good')} text='good' />
      <Button onClick={() => handleFeedback('neutral')} text='neutral' />
      <Button onClick={() => handleFeedback('bad')} text='bad' />
    <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} percentage={percentage} />
    </div>
  )
}

export default App