import React,{useState} from 'react'
import './index.css'

function App() {
  const [height,setHeight]= useState(0)
  const [weight,setWeight]= useState(0)
  const [bmi,setBmi]= useState()
  const [msg,setMsg]= useState()
  const [suggestWeight,setSuggestWeight] = useState();

  let calBmi=(event)=>{

    //prevent submitting the form
    event.preventDefault()

    if(weight === 0 || height === 0){
      alert("please enter valid height and weight !!")
    }

    else{

      //logic to calculate bmi using height and weight.
      let bmi = (weight / (height/100) ** 2 )
      setBmi(bmi.toFixed(2))     // defining the precision after decimal point.


      //logic to print suggested weight range.
      let lowRange = (weight-5);
      let highRange = (lowRange+17);

      setSuggestWeight('Your suggested weight range is between ' + lowRange + ' - ' + highRange)

      //logic for message display
      if(bmi < 18.5){
        setMsg("You are in under weight range")
      }
      else if(bmi >=18.5 && bmi < 25){
        setMsg("You are in healthy weight range")     
      }
      else if(bmi >=25 && bmi <= 30) {
        setMsg("You are in over weight range")
      }
      else{
        setMsg("You are in obesity range")
      }

    }

  }

  //Logic to reset the data while clicking on reset button.
  const textClear=()=>{
      setHeight();
      setWeight();
      setBmi();
      setMsg();
      setSuggestWeight();
  }

  return (

    <div className="App">
    
          <div className="header">
            <h2>BMI Calculator</h2>
          </div>

          <div className='container'>

                <form onSubmit={calBmi}>
                  <div className="details">
                      <label>Enter your Height (in cm):</label><br></br>
                      <input value={height} onChange={(e)=> setHeight(e.target.value)}></input><br></br>
                      <label>Enter your Weight (in kg):</label><br></br>
                      <input value={weight} onChange={(e)=> setWeight(e.target.value)}></input><br></br>
                      <div className='buttons'>
                        <input className="btn" type='submit'></input>
                        <input className='btn' onClick={textClear} type='reset'></input>
                      </div>   
                  </div>
                </form><br></br>
                
                <div className="result">
                    <h2>Your BMI is {bmi}</h2><br></br>
                    <p>{msg}</p>
                    <p>{suggestWeight}</p>
                </div>

          </div>

    </div>
    
  );
}

export default App;