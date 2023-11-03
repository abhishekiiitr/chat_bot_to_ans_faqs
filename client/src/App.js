import React, { useState } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";

import "./App.css";
import Header from "./components/Header";

function App() {
    const [messages, setMessages] = useState([
        <BotMessage key="0" fetchMessage={() => "How can I Help You?"} />,
    ]);

    const handleFetch = async (text) => {
        return fetch("http://localhost:4000/", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                request: text,
            }),
        })
            .then((res) => res.json())
            .then((data) => data.answer)
            .catch((error) => console.log(error));
    };
    const send = async (text) => {
        const newMessages = messages.concat(
            <>
                <UserMessage key={messages.length + 1} text={text} />
                <BotMessage
                    key={messages.length + 2}
                    fetchMessage={() => handleFetch(text)}
                />
            </>
        );
        setMessages(newMessages);
    };

    return (
        <div className="chatbot">
            <Header />
            <Messages messages={messages} />
            <Input onSend={send} />
        </div>
    );
}

export default App;
