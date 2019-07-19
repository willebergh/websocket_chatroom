import React, { Component } from 'react';
import io from "socket.io-client";

class Feed extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }

        var socket = io("http://localhost:5000");
        socket.on("newMessage", message => this.setState({
            messages: [...this.state.messages, message]
        }))
    }
    render() {
        const { messages } = this.state;
        return (
            <div id="feed">
                {messages.map(message => {
                    return (
                        <div>
                            {message}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Feed;