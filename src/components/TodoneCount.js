import React from "react";

class TodoneCount extends React.Component {
    render() {
        return (
            <h3> <span id="sub">S*** I got together: </span><span> {this.props.count} </span> </h3>
        );
    }
}

export default TodoneCount;