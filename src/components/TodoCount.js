import React from "react";

class TodoCount extends React.Component {
    render() {
        return (
            <h3> <span id="sub">S*** I've got to get done: </span><span> {this.props.count} </span> </h3>
        );
    }
}

export default TodoCount;