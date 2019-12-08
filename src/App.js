import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import Form from "./components/Form.js"
import Todo from "./components/Todo.js"
import Todone from "./components/Todone.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Todo />
          </div>
          <div className="col-12 col-sm-6">
            <Todone />
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
