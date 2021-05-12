import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [resultado, setResultado] = useState('');

  const handleSubmit = event => {          
    event.preventDefault();
    let altura = formData.altura / 100
    setResultado(Number(formData.peso / (altura*altura)).toFixed(2));  
       
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });  
  }
  
return (
  <div className="App">
    <div className="content" role="main">
      <h1>IMC</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Altura</label>
          <input className="form-control" name="altura" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Peso</label>
          <input className="form-control" name="peso" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Calcular</button>
      </form>
      <div className="Resultado">
        <h2>
          IMC: {resultado}
        </h2>
        <table className="table-calc">
          <thead>
            <tr className="table-calc-blue">
              <th>IMC</th>
              <th>Classificação</th>
              <th>Obesidade <small>(grau)</small></th>
            </tr>
          </thead>
          <tbody>
            <tr className={resultado < 18.5 && resultado > 0? 'resultado': ''}>
              <td>Menor que 18,5</td>
              <td>Magreza</td>
              <td >0</td>
            </tr>
          
            <tr className={resultado < 25 && resultado >= 18.5? 'resultado': ''}>
              <td>Entre 18,5 e 24,9</td>
              <td>Normal</td>
              <td >0</td>
            </tr>
            
            <tr className={resultado < 30 && resultado >= 25? 'resultado': ''}>
              <td>Entre 25,0 e 29,9</td>
              <td>Sobrepeso</td>
              <td >I</td>
            </tr>
            
            <tr className={resultado < 40 && resultado >= 30? 'resultado': ''}>
              <td>Entre 30,0 e 39,9</td>
              <td>Obesidade</td>
              <td >II</td>
            </tr>

            <tr className={resultado >= 40? 'resultado': ''}>
              <td>Maior que 40,0</td>
              <td>Obesidade Grave</td>
              <td >III</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
)
}

export default App;