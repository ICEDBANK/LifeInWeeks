import { useState } from 'react';
import './style.css';

function App() {

const [alertMessage, setAlertMessage] = useState('');
const [age, setAge] = useState(0);
const [results, setResults] = useState(0);

function handleCalculation() {

  const remainingYears = 90 - age;
  const remainingWeeks = remainingYears * 52;
  setResults(remainingWeeks);
}

  return (
    <>

<div className="container">
        <h1>Our Life In Weeks</h1>
        <p>Assuming that we are lucky enough to live in 90 years</p>

        <div id="displayResult">
            <div className="answer">
                <p>You have</p>
                <h2>{results}</h2>
                <p>weeks left...</p>
            </div>
            <div className="alert">
                <p>Please enter your age below...</p>
            </div>
            <div className="alert2">
                <p>Please enter a number...</p>
            </div>
        </div>

        <div className="buttons">
            <input type="number" id="ageInput" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/>
            <button id="calcBtn" className="btn" onClick={handleCalculation}>Calculate</button>
            <button id="resetBtn" className="btn">Reset</button>
            <a href="index.html" className="refresh">anchor tag</a>
        </div>
    </div>

    </>
  );
}

export default App;
