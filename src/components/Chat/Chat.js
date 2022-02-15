import React from "react";
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";

// import "react-chat-widget/lib/styles.css";
import "react-chat-widget/lib/styles.css";
import "./style.css";

function Chat({ savedAge, savedActivity, savedName }) {
    React.useEffect(() => {
        if (savedActivity === "Workout together") {
            addResponseMessage(`Hey ${savedName} let's workout!`);
        }

        if (savedActivity === "Just chat") {
            addResponseMessage(`Hey ${savedName} let's chat!`);
        }

        if (savedActivity === "Watch videos and chat") {
            addResponseMessage(`Hey ${savedName} let's watch something!`);
        }
        toggleWidget();
    }, []);

    const handleNewUserMessage = newMessage => {
        console.log(`New message incoming! ${newMessage}`);
    };

    return (
        <div>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title={`Chatting with Kevin (${parseInt(savedAge) + 2})`}
                subtitle=""
            />
        </div>
    );
}

export default Chat;
