import React from "react";
import moment from "moment";
import '../components/Todo.css'

class Todo extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id)
    }
    handleUpdate = () => {
        this.props.completeTaskFunc(this.props.id)
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="todo">{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-1">
                    {this.props.important === true &&
                        <p> <span role="img" aria-label="flag">🚩</span></p>
                    }
                </div>
                <div className="col-12 col-sm-3">
                    <p>{moment(this.props.dueDate).format("Do MMM YY")}</p>
                </div>
                <div className="col-12 col-sm-1">
                    <button type="submit" onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
                </div>
                <div className="col-12 col-sm-1">
                    <button type="submit" onClick={this.handleUpdate}><i className="fa fa-check-square" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

export default Todo;