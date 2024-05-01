import { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [alertMessage, setAlertMessage] = useState(true); // Set to true initially
  const [alert2Message, setAlert2Message] = useState(false);
  const [age, setAge] = useState(0);
  const [results, setResults] = useState(0);

  useEffect(() => {
    // Set alertMessage to false after a short delay (optional)
    const timer = setTimeout(() => {
      setAlertMessage(false);
    }, 3000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once

  function handleCalculation() {
    if (age === '') {
      setAlertMessage(true);
    } else if (isNaN(age)) {
      setAlert2Message(true);
    }else {
      
      const remainingYears = 90 - age;
      const remainingWeeks = remainingYears * 52;
      setResults(remainingWeeks);

    }


  }

  function handleReset() {
    window.location.reload();
  }

  return (
    <>
      <div className="container">
        <h1>Our Life In Weeks</h1>
        <p>Assuming that we are lucky enough to live 90 years</p>

        <div id="displayResult">
          <div className={`answer${results !== 0 ? 'active' : ''}`}>
            <p>You have</p>
            <h2>{isNaN(results) ? 'Calculating...' : results}</h2>
            <p>weeks left...</p>
          </div>
          <div className={`alert ${alertMessage ? 'active' : ''}`}>
            <p>Please enter your age below...</p>
          </div>
          <div className={`alert2 ${alert2Message ? 'active' : ''}`}>
            <p>Please enter a number...</p>
          </div>
        </div>

        <div className="buttons">
          <input
            type="text"
            id="ageInput"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
          <button id="calcBtn" className="btn" onClick={handleCalculation}>
            Calculate
          </button>
          <button id="resetBtn" className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;