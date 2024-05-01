// Importing useState and useEffect hooks from React
import { useState, useEffect } from 'react';
// Importing custom CSS styles from 'style.css' file
import './style.css';

// Define the functional component App
function App() {
  // State variables
  const [alertMessage, setAlertMessage] = useState(true); // Set to true initially
  const [alert2Message, setAlert2Message] = useState(false);
  const [age, setAge] = useState(0);
  const [results, setResults] = useState(0);

  // useEffect to set alertMessage to false after a short delay, runs only once
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage(false);
    }, 3000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once

  // Function to handle calculation
  function handleCalculation() {
    if (age === '') {
      setAlertMessage(true); // Show alert message if age is empty
    } else if (isNaN(age)) {
      setAlert2Message(true); // Show alert message if age is not a number
    } else {
      // Calculate remaining weeks
      const remainingYears = 90 - age;
      const remainingWeeks = remainingYears * 52;
      setResults(remainingWeeks);
      setAge(''); // Reset age input
    }
  }

  // Function to handle reset
  function handleReset() {
    window.location.reload(); // Reload the page to reset the app
  }

  // JSX markup
  return (
    <>
      <div className="container">
        <h1>Our Life In Weeks</h1>
        <p>Assuming that we are lucky enough to live 90 years</p>

        <div id="displayResult">
          {/* Display result */}
          <div className={`answer${results !== 0 ? 'active' : ''}`}>
            <p>You have</p>
            <h2>{isNaN(results) ? 'Calculating...' : results}</h2>
            <p>weeks left...</p>
          </div>
          {/* Alert message for empty age */}
          <div className={`alert ${alertMessage ? 'active' : ''}`}>
            <p>Please enter your age below...</p>
          </div>
          {/* Alert message for non-numeric age */}
          <div className={`alert2 ${alert2Message ? 'active' : ''}`}>
            <p>Please enter a number...</p>
          </div>
        </div>

        {/* Input field and buttons */}
        <div className="buttons">
          <input
            type="text"
            id="ageInput"
            placeholder="Enter your age"
            value={age}
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

// Export the App component
export default App;
