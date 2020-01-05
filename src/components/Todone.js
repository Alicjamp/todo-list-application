import React from "react";
import '../components/Todone.css'

class Todone extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id)
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-9">
                    <p className="todone">{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-3">
                    <button type="submit" onClick={this.handleDelete}> Delete</button>
                </div>
            </div>
        )
    }
}

export default Todone;