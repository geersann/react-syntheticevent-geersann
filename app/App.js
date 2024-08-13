import React, { Component, Fragment } from "react";
import Task2 from "./Task2";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showList: false,
        };
    }

    toggleList = () => {
        this.setState(prevState => ({ showList: !prevState.showList }));
    }

    render() {
        const { showList } = this.state;

        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <button onClick={this.toggleList}>
                            Button
                        </button>
                        <Task2 isListVisible={showList} />
                    </div>
                </div>
            </Fragment>
        );
    }
}
