import { useState } from 'react';
import './style.css';

function App() {

const [alertMessage, setAlertMessage] = useState('');

  return (
    <>

<div class="container">
        <h1>Our Life In Weeks</h1>
        <p>Assuming that we are lucky enough to live in 90 years</p>

        <div id="displayResult">
            <div class="answer">
                <p>You have</p>
                <h2 id="result">0</h2>
                <p>weeks left...</p>
            </div>
            <div class="alert">
                <p>Please enter your age below...</p>
            </div>
            <div class="alert2">
                <p>Please enter a number...</p>
            </div>
        </div>

        <div class="buttons">
            <input type="text" id="ageInput" placeholder="Enter your age" />
            <button id="calcBtn" class="btn">Calculate</button>
            <button id="resetBtn" class="btn">Reset</button>
            <a href="index.html" class="refresh">anchor tag</a>
        </div>
    </div>

    </>
  );
}

export default App;
