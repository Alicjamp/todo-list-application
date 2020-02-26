import React from "react";
import 'moment-timezone';
import moment from 'moment-timezone';
import '../components/Form.css'

class Form extends React.Component {
    state = {
        task: "",
        important: false,
        dueDate: moment().format("YYYY-MM-DD"),
    }

    updateTask = (event) => {
        console.log(event.target.value)
        this.setState({
            task: event.target.value
        })
    }

    updateDueDate = (event) => {
        this.setState({
            dueDate: event.target.value
        })
    }

    setLowPriority = (event) => {
        this.setState({
            important: false
        })
    }

    setHighPriority = (event) => {
        this.setState({
            important: true
        })
    }

    addTodo = (event) => {
        console.log(this.state)
        if (this.state.task === "") {
            alert("Error! Input task in Todo field")
        } else {

            this.props.addTodoFunc(
                this.state.task,
                this.state.dueDate,
                this.state.important
            )
        }

        this.setState({
            task: "",
            important: false,
            dueDate: moment().format("YYYY-MM-DD"),
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <label htmlFor="Todo">Todo</label><br></br>
                                <input id="Todo" type="text" onChange={this.updateTask} value={this.state.task} placeholder="E.g. Take over the world" /><br></br>
                            </div>
                            <div className="col-12 col-md-3">
                                <label htmlFor="Due by date">Due by date</label><br></br>
                                <input type="date" onChange={this.updateDueDate} value={this.state.dueDate} /><br></br>
                            </div>
                            <div className="col-12 col-md-3">
                                <label htmlFor="Priority">Priority</label><br></br>
                                <label htmlFor="Low"><input onClick={this.setLowPriority} id="Low" type="radio" name="Low-High" value="Low" selected /> Low</label>
                                <label htmlFor="High"><input onClick={this.setHighPriority} id="High" type="radio" name="Low-High" value="High" /> High</label>
                            </div>
                            <div className="col-12 col-md-1">
                                <button type="submit" className="add" onClick={this.addTodo} >Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Form;