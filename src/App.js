import React from 'react';
import './App.css';
import Saludo from './Saludo';
import Form from './components/Form';

function HolaMundo(nombre,edad){
  var presentacion=<div>
    <h2>{nombre}</h2>
    <h2>Mi edad actual es {edad}</h2>
    <h2>Ingenieria en ciencias de la computacion</h2>
  </div>
  return presentacion;
}

const App=()=> {
  var nombre='Dayana Fiorella';
  var edad=21;
  return (
    <div className="App">
      <div className="App-content">
        <p> Aquí haremos nuestro to-do list</p>
        <Form />
      </div>
    </div>
  );
}
export default App;