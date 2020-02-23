import React from 'react';
import axios from "axios";
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
    todos: []
  };

  componentDidMount() {
    // Fetch the todos making a GET request
    axios.get("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos")
      .then((response) => {
        const todos = response.data.todos;
        this.setState({
          todos: todos
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addTodo = (task, dueDate, important) => {
    const newTask = {
      text: task,
      important: important,
      completed: false,
      dueDate: dueDate,
    };

      axios.post("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos", newTask)
      .then((response) => {
        const newTodo = response.data;
        const copyOfTodos = this.state.todos.slice();
        copyOfTodos.push(newTodo);

        this.setState({
          todos: copyOfTodos
        });
      })
      .catch((err) => {
        console.log(err);
    });
  }

  deleteTask = (id) => {
    axios.delete(`https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos/${id}`)
    .then(() => {
      const filteredTasks = this.state.todos.filter(todo => {
        if (todo.taskID === id) return false;
        else return true;
      });
      this.setState({
        todos: filteredTasks
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  completeTask = id => {
    console.log(id)
    // Mark task (complete=true)
    axios.put(`https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos/${id}`, {
      
      completed: true
    })
      .then(() => {
        const updatedTasks= this.state.todos.map(todo => {
          if (todo.taskID === id) {
            const updatedTask = { ...todo, completed: true }
            return updatedTask;
          }
          return todo;
        });

        this.setState({
          todos: updatedTasks
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const todoTasks = this.state.todos.filter(todo => {
      return todo.completed === false
    })

    const sortedImportant = todoTasks.sort(function(task1, task2) {
      return Number(task2.important) - Number(task1.important);
    })

    const todoneTasks = this.state.todos.filter(todone => {
      return todone.completed === true
    })

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Form addTodoFunc={this.addTodo} />
          <div className="row">
            <div className="col-12 col-md-7">
              <TodoCount count={todoTasks.length} />
              {/* <h2>Todo's</h2> */}
              {sortedImportant.map(todo => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <Todo
                        deleteTaskFunc={this.deleteTask}
                        completeTaskFunc={this.completeTask}
                        key={todo.taskID}
                        complete={todo.completed}
                        task={todo.text}
                        important={todo.important}
                        dueDate={todo.dueDate}
                        id={todo.taskID} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="col-12 col-md-5">
              <TodoneCount count={todoneTasks.length} />
              {/* <h2>Todone's</h2> */}
              {todoneTasks.map(todone => {
                return (
                  <div className="row">
                    <div className="col-12">
                      <Todone
                        deleteTaskFunc={this.deleteTask}
                        key={todone.taskID}
                        complete={todone.completed}
                        task={todone.text}
                        important={todone.important}
                        dueDate={todone.dueDate}
                        id={todone.taskID} />
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
