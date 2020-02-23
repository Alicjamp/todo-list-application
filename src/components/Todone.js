import React from "react";
import '../components/Todone.css'

class Todone extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id)
    }
    render() {
        return (
            <div className="row todones">
                <div className="col-12 col-sm-11">
                    <p className="todone">{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-1">
                    <button type="submit" onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
                </div>
            </div>
        )
    }
}

export default Todone;