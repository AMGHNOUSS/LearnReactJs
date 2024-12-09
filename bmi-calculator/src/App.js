import './App.css';
import { useState } from "react";


function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");

  // Logim Mathematique
  let calt = (e) => {

    e.preventDefault();
    if (weight === 0 || height === 0)
      {
        alert('Enter a valid values of (Weight & Height)');
      }
    else {
      let bmi = (Number(weight) / ((Number(height) / 100) * (Number(height) / 100)));
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5)
        setMessage("You're underweight");
      else if (bmi < 25)
        setMessage("You're normal");
      else if (bmi < 30)
        setMessage("You're overweight")
      else if (bmi < 100)
       setMessage("You're obesity");
    }
  }

  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi();
    setMessage();
  }
  return (
    <div className="App">
      <h3>bmi calculator</h3>
      <form onSubmit={calt}>
        <div>
          <label>Weight (kg)</label>
          <input
            type="text"
            placeholder="Enter Your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
        </div>
        <div>
          <label>Height (cm)</label>
          <input
            type="text"
            placeholder="Enter Your Height"
            value={height}
            onChange={(ev) => setHeight(ev.target.value)}
          />
        </div>
        <div>
        <button className="submit" type="submit">Submit</button>
<button className="reload" onClick={reload}>Reload</button>

        </div>
        <div>
          <h5>Your BMI is : {bmi}</h5>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
