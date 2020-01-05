import React from 'react';
import uuid from "uuid/v4";
import './App.css';
import './components/Style.css'
import Header from "./components/Header.js"
import Form from "./components/Form.js"
import Todo from "./components/Todo.js"
import Todone from "./components/Todone.js"
import TodoCount from "./components/TodoCount.js"
import TodoneCount from "./components/TodoneCount.js"

class App extends React.Component {
  state = {
    tasks: [
      { task: "Tech returners homework", important: true, complete: false, dueDate: "2019-12-02", id: 1 },
      { task: "Put up Xmas tree", important: true, complete: false, dueDate: "2019-12-30", id: 2 },
      { task: "Wrap presents", important: true, complete: true, dueDate: "2019-12-01", id: 3 },
      { task: "Clean the house", important: false, complete: false, dueDate: "2019-12-22", id: 4 },
      { task: "Food shopping", important: true, complete: true, dueDate: "2019-12-28", id: 5 },
      { task: "Work overtime", important: true, complete: false, dueDate: "2019-12-25", id: 6 },
    ]
  }
  // add task - form
  // delete task - todo and todone
  // complete task - todo
  // put line through todone?

  addTodo = (task, dueDate, important) => {
    console.log(task, dueDate, important)
    const newTask = {
      task: task,
      important: false,
      complete: false,
      dueDate: dueDate,
      id: uuid()
    }

    const copy = this.state.tasks.slice();
    copy.push(newTask)
    console.log(copy)

    this.setState({
      tasks: copy
    })
  }

  render() {

    const todoTasks = this.state.tasks.filter(todo => {
      return todo.complete === false
    })

    const todoneTasks = this.state.tasks.filter(todone => {
      return todone.complete === true
    })

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Form addTodoFunc={this.addTodo}/>
          <div className="row">
            <div className="col-12 col-md-6">
              <TodoCount count={todoTasks.length} />
              <h2>Todo's</h2>
              {todoTasks.map(todo => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <Todo
                        key={todo.id}
                        complete={todo.complete}
                        task={todo.task}
                        important={todo.important}
                        dueDate={todo.dueDate} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="col-12 col-md-6">
              <TodoneCount count={todoneTasks.length} />
              <h2>Todone's</h2>
              {todoneTasks.map(todone => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <Todone
                        key={todone.id}
                        complete={todone.complete}
                        task={todone.task}
                        important={todone.important}
                        dueDate={todone.dueDate} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
