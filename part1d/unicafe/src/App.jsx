/* eslint-disable react/prop-types */
import { useState } from 'react'


const Heading = ({title}) => {
  return(
    <>
    <h1>{title}</h1>
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const Content = ({text, value}) => {
  return (
    <>
    <p>{text} {value}</p>
    </>
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

  const makeAverage = () => {
    if (all > 0) {
      const newAverage = (good - bad) / all
      setAverage(newAverage)
      console.log(newAverage, 'new')
    } else {
      setAverage(0)
    }
  }
  const makePercentage = () => {
    if (all > 0) {
      const newPercantage = ((good / all))
      setPercentage(parseFloat(newPercantage))
      console.log(newPercantage, 'new')
    } else {
      setPercentage(0)
    }
  }
  const setTotal = () => {
    const newAll = all + 1
    setAll(newAll)
    console.log(newAll, 'all')
  }

  const raiseGood = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal()
    makeAverage()
    makePercentage()
  }
  const raiseNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal()
    makeAverage()
  }
  const raiseBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    setTotal()
    makeAverage()
  }
  

  return (
    <div>
      <Heading title='Give Feedback'/>
      <Button onClick={raiseGood} text='good'/>
      <Button onClick={raiseNeutral} text='neutral'/>
      <Button onClick={raiseBad} text='bad'/>
      <Heading title='Statistics' />
      <Content text='good' value={good}/>
      <Content text='neutral' value={neutral}/>
      <Content text='bad' value={bad}/>
      <Content text='all' value={all}/>
      <Content text='average' value={average}/>
      <Content text='positive' value={percentage}/>
    </div>
  )
}

export default App