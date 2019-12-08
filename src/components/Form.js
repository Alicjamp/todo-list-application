import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <label for="Todo">Todo</label><br></br>
                                <input id="Todo" type="text" placeholder="E.g. Take over the world" /><br></br>
                            </div>
                            <div className="col-12 col-md-3">
                                <label for="Due by date">Due by date</label><br></br>
                                <input type="date" /><br></br>
                            </div>
                            <div className="col-12 col-md-3">
                                <label for="Priority">Priority</label><br></br>
                                <label for="Low"><input id="Low" type="radio" name="Low-High" value="Low" /> Low</label>
                                <label for="High"><input id="High" type="radio" name="Low-High" value="High" /> High</label>
                            </div>
                            <div className="col-12 col-md-3">
                                <button type="submit">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Form;