import React, { Component } from 'react';
import io from "socket.io-client";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageInput: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({ "messageInput": e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ messageInput: "" })
        var socket = io("http://localhost:5000");
        socket.emit("sendMessage", this.state.messageInput)

    }

    render() {

        return (
            <form id="input" onSubmit={this.handleSubmit}>
                <input value={this.state.messageInput} onChange={this.handleChange} />
                <button type="submit">send</button>
            </form>
        );
    }
}

export default Input;