import { useState } from "react";


function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        })
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event)=> handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>annual investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event)=> handleChange('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event)=> handleChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event)=> handleChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );
}

export default UserInput;