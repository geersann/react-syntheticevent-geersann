import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: 1, text: "hidden text 1" },
                { id: 2, text: "hidden text 2" },
                { id: 3, text: "hidden text 3" }
            ],
            text: ''
        };
    }

    handleMouseEnter = (text) => {
        this.setState({ text });
    };

    handleMouseLeave = () => {
        this.setState({ text: '' });
    };

    render() {
        const { isListVisible } = this.props;

        return (
            <div>
                {isListVisible && (
                    <ul>
                        {this.state.list.map(item => (
                            <li
                                key={item.id}
                                className="element"
                                onMouseEnter={() => this.handleMouseEnter(item.text)}
                                onMouseLeave={this.handleMouseLeave}
                            >
                                {item.id}
                            </li>
                        ))}
                    </ul>
                )}
                <div data-testid="text">
                    {this.state.text}
                </div>
            </div>
        );
    }
}