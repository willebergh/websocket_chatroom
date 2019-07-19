import React, { Component } from 'react';
import "./chat.css"

import Feed from "./Feed";
import Input from "./Input"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div id="chat">
                <Feed />
                <Input />
            </div>
        );
    }
}

export default Chat;