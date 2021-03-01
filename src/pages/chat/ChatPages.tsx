import React from 'react';

const ChatPages = () => {
    return <div>
        <Chat/>
    </div>
}
const Chat: React.FC = () => {
    return <div>
        <Messages/>
        <AddMessForm/>
    </div>
}

const AddMessForm: React.FC = () => {

    return <div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Send</button>
        </div>
    </div>
}

const Messages: React.FC = () => {
    let messages = [1, 2, 3, 4,5,6,7,8,9,10];

    return <div style={{height:'400px', overflowY:'scroll'}}>
        {messages.map((m, i) => <Message key={i}/>)}
    </div>
}
const Message: React.FC = () => {
    let message = {
        url: 'https://via.placeholder.com/50',
        author: 'Alex',
        text: `I'd like to speak English correctly`

    }

    return <div>
        <img src={message.url} alt="mess"/> <b>{message.author}</b>
        <br/>
        {message.text}
        <hr/>
    </div>
}


export default ChatPages;