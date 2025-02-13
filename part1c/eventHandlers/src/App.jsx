import { useState } from 'react'
import Display from './Components/Display'
import Button from './Components/Button'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
  }
  const setToZero = () => setCounter(0)




  console.log('rendering...', counter)

  return (
    <>
    <Display counter={counter}/>
    <Button text='plus' onClick={increaseByOne}/>
    <Button text='minus' onClick={decreaseByOne}/>
    <Button text='zero' onClick={setToZero}/>
    </>
  )
}

export default App