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


const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Statistics = ({good, bad, neutral, all, average, percentage}) => {
  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive feedback" value={percentage} />
      </tbody>
    </table>
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
      <Heading title="Statistics" />
      <Statistics good={good} bad={bad} average={average} all={all}
       neutral={neutral} percentage={percentage}/>
    </div>
  )
}

export default App