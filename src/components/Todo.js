import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-3">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-2">
                     {this.props.important === true &&
                        <p>🚩</p>
                    }
                </div>
                <div className="col-12 col-sm-3">
                    <p>{this.props.dueDate}</p>
                </div>
                <div className="col-12 col-sm-2">
                    <button type="submit">Delete</button>
                </div>
                <div className="col-12 col-sm-2">
                    <button type="submit">Done</button>
                </div>
            </div>
        )
    }
}

export default Todo;