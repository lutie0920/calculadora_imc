import img from './assets/img.svg'
import './App.css'

import { useState } from "react";

function App(){

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(0);
    const [status, setStatus] = useState("");

    const calculaBmi = () =>{
      const bmi = (weight / (height * height)).toFixed(2);
      setResult(bmi);
      let bmiStatus = getStatus(bmi);
      setStatus(bmiStatus);
    }

    function getStatus(bmi){
      if(bmi < 18.5){
          return 'Cuidado! Você esta abaixo do peso!'
        }else if(bmi >= 18.5 && bmi <= 25){
          return "Você está no peso ideal";
        }else if(bmi >= 25 && bmi <= 30){
          return "Cuidado! Você está com sobrepeso!";
        }else if(bmi >= 30 && bmi <= 35){
          return "Cuidado! Você está com obesidade severa!";
        }else{
          return "Cuidado! Você está com obesidade morbida!"
        }
}

  return (
    <main>
     <div className="container">
      <section className="img">
        <img src={img} />
      </section>
      <section className="calculator">
        <form className="form">
          <h1 className="title">
            Calculadora - IMC
          </h1>
          <div className="input-box">
            <label htmlFor="weight">
              Peso em Kg
            </label>
            <div className="input-field">
              <input type="number" className="weight" required onChange={evento => setWeight(evento.target.value)} />
              <span>
               Kg
              </span>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="height">
              Altura em metros
            </label>
            <div className="input-field">
              <input type="number" className="height" required onChange={evento => setHeight(evento.target.value)} />
            <span>
              m
            </span>
            </div>
          </div>
          <button onClick={calculaBmi} className="calculate">
            Calcular
          </button>
        </form>
        <div className="infos">
          <div className="result">
            <div className="bmi">
              <span className="value">{ result }</span>
              <span>Seu IMC</span>
            </div>
            <div className="description"> 
              <span>{ status }</span>
            </div>
          </div>
        </div>
      </section>
     </div>
    </main>
  )
}

export default App
