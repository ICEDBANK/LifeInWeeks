import { useState } from 'react';
import './style.css';

function App() {

const [alertMessage, setAlertMessage] = useState(false);
const [alert2Message, setAler2tMessage] = useState(false);
const [age, setAge] = useState(0);
const [results, setResults] = useState(0);

function handleCalculation() {

  const remainingYears = 90 - age;
  const remainingWeeks = remainingYears * 52;
  setResults(remainingWeeks);
}

function handleReset () {

  window.location.reload();

}

  return (
    <>

<div className="container">
        <h1>Our Life In Weeks</h1>
        <p>Assuming that we are lucky enough to live in 90 years</p>

        <div id="displayResult">
            <div className={`answer${results !== 0 ? 'active' : ''}`}>
                <p>You have</p>
                <h2>{results}</h2>
                <p>weeks left...</p>
            </div>
            <div className={`alert${alertMessage !== 0 ? 'active' : ''}`}>
                <p>Please enter your age below...</p>
            </div>
            <div className={`alert2 ${alert2Message !== 0 ? 'active' : ''}`}>
                <p>Please enter a number...</p>
            </div>
        </div>

        <div className="buttons">
            <input type="text" id="ageInput" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/>
            <button id="calcBtn" className="btn" onClick={handleCalculation}>Calculate</button>
            <button id="resetBtn" className="btn" onClick={handleReset}>Reset</button>
            <a href="index.html" className="refresh">anchor tag</a>
        </div>
    </div>

    </>
  );
}

export default App;
