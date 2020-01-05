import React from "react";

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
                <div className="col-12 col-sm-4">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-1">
                    {this.props.important === true &&
                        <p> <span className="flag">🚩</span></p>
                    }
                </div>
                <div className="col-12 col-sm-3">
                    <p>{this.props.dueDate}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <button type="submit" onClick={this.handleDelete}> Delete</button>
                </div>
                <div className="col-12 col-sm-2">
                    <button type="submit" onClick={this.handleUpdate}> Done</button>
                </div>
            </div>
        )
    }
}

export default Todo;