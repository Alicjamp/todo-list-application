import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div>

                        <h3> S*** I've got to get done: 2 </h3>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                Todo1
                        </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Delete</button>
                            </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Done</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                Todo2
                        </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Delete</button>
                            </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Done</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                Todo3
                        </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Delete</button>
                            </div>
                            <div className="col-12 col-sm-3">
                                <button type="submit">Done</button>
                         
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;