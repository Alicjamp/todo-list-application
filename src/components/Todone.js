import React from "react";

class Todone extends React.Component {
    render() {
        return (
            <div>
                <span id="sub">
                    <h3> S*** I got together: 0 </h3>
                </span>
                <div className="row">
                    <div className="col-12 col-sm-9">
                        Todone1
                        </div>
                    <div className="col-12 col-sm-3">
                        <button type="submit">Delete</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-9">
                        Todone2
                        </div>
                    <div className="col-12 col-sm-3">
                        <button type="submit">Delete</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-9">
                        Todone3
                        </div>
                    <div className="col-12 col-sm-3">
                        <button type="submit">Delete</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Todone;