import Header from './components/Header/Header.jsx'
import UserInput from './components/UserInput/UserInput.jsx'
import Result from './components/Result/Result.jsx'
import { useState } from 'react'


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const inputIsValid = userInput.duration > 0;

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    })
}
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App;
